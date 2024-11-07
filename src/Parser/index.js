import { Fail, Success } from "../Monads/index.js";

class Parser {
    constructor(rules) {
        const [startRule, ...otherRules] = rules;
        if (!startRule) throw Error("No start rule")
        this.startSymbol = startRule.symbol.id;
        this.symbol2rule = {};
        this.symbol2rule[this.startSymbol] = startRule.rule;
        otherRules.forEach((aRule) => {
            this.symbol2rule[aRule.symbol.id] = aRule.rule;
        })
        console.log(">>>", this.symbol2rule)
    }

    parse(inputTree) {
        return this.symbol2rule[this.startSymbol]
            .parse(inputTree, this).map(x => symbol(this.startSymbol, x)).orCatch((e) => new Error(e))
    }

    static builder() {
        return new ParserBuilder();
    }
}

class ParserBuilder {
    constructor() {
        this._rules = [];
    }

    addRule(rule) {
        this._rules.push(rule);
        return this;
    }

    build() {
        return new Parser(this._rules);
    }
}

function rule(symbol, rule) {
    if ("symbol" !== symbol.type) throw Error("left arg not a symbol");
    return {
        type: "rule",
        symbol,
        rule,
        parse: (inputTree, parser) => {
            return rule.parse(inputTree, parser);
        }
    };
}

function or(left, right) {
    return {
        type: "or",
        left,
        right,
        parse: (inputTree, parser) => {
            return Success.of()
                .flatMap(() => {
                    return left.parse(inputTree, parser);
                })
                .failMap(() => {
                    return right.parse(inputTree, parser);
                })
        }
    };
}

function dot(left, right) {
    return {
        type: "dot",
        left,
        right,
        parse: (inputTree, parser) => {
            const inType = inputTree.type;
            if (inType !== "dot") return Fail.of("Not a dot input");
            const leftMaybe = left.parse(inputTree.left, parser);
            const rightMaybe = right.parse(inputTree.right, parser);
            if (leftMaybe.isSuccess() && rightMaybe.isSuccess()) return leftMaybe.flatMap(l => rightMaybe.map(r => dot(l, r)));
            return Fail.of("Fail to match dot");
        }
    };
}

function symbol(s, value) {
    return {
        type: "symbol",
        id: s,
        value,
        parse: (inputTree, parser) => {
            return parser.symbol2rule[s]
            .parse(inputTree, parser)
            .map(x => symbol(s, x))
        }
    };
}

function token(s) {
    return {
        type: "token",
        id: s,
        parse: (inputTree, parser) => {
            const inType = inputTree.type;
            if (inType !== "token") return Fail.of("Not a token input");
            if (inputTree.id === s) return Success.of(token(s));
            return Fail.of("fail to parse token");
        }
    };
}

const parser = Parser
    .builder()
    .addRule(
        rule(
            symbol("S"),
            or(
                dot(
                    symbol("S"),
                    token("a")
                ),
                token("b")
            )
        )
    )
    .build();

console.log("AST: ",
    parser.parse(
        // dot(
        //     token("b"),
        //     dot(
        //         token("a"),
        //         token("a")
        //     )
        // )
        dot(
            dot(token("b"), token("a")),
            token("a")
        )
    )
);
