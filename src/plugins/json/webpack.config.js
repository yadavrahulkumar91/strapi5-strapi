module.exports = {
    // other webpack configuration...
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            // your other rules...
        ],
    },
    output: {
        // your output configuration...
    },
    target: "web", // or "node" or another supported target
};
