//const errorStackParser = require('error-stack-parser');
const { parse } = require('stacktrace-parser');

try {
    function innerfn() {
        throw new Error("my error");
    }
    
    function outerfn() {
        innerfn();
    }
    
    outerfn();
}
catch (err) {
    console.log("Raw:");
    console.log(err.stack);

    //const frames = errorStackParser.parse(err);
    const frames = parse(err.stack);

    console.log("Parsed stack frame:");
    console.log(JSON.stringify(frames, null, 4));
}