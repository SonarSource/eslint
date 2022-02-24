"use strict";

module.exports = function(context) {

    "use strict";

    return {
        "Identifier": function(node) {
            if (node.name === "foo") {
                context.report({
                    node,
                    message: "Avoid using identifiers named 'foo'.",
                    extra: {
                        someExtraInfo: {
                            pi: Number(3.14), // to test deep equality (not reference-based)
                            e: 2.71
                        }
                    }
                });
            }
        }
    };

};
