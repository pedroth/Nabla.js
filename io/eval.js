
import * as nabla from "../src/index.js";

export function codeEval(code) {
    code = `
    ${Object.values(nabla).map(v => v.toString()).join("\n")}
    ${code}
    `;
    let evaluation;
    try {
        evaluation = eval(code);
    } catch (e) {
        evaluation = e.message;
    }
    evaluation = evaluation == null ?
        "undefined" :
        evaluation?.toString == null ?
            evaluation :
            evaluation.toString()
    return JSON.stringify(evaluation, null, 2);
}