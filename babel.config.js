module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                exclude: [
                    "babel-plugin-transform-async-to-generator",
                    "babel-plugin-transform-regenerator",
                ],
            },
        ],
        [
            "@babel/preset-react",
            {
                runtime: "automatic",
                development: process.env.NODE_ENV === "development",
                importSource: "@welldone-software/why-did-you-render",
            },
        ],
        "@babel/preset-typescript",
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "~": "./src/",
                },
            },
        ],
        [
            "@emotion",
            {
                sourceMap: true,
                autoLabel: "dev-only",
                labelFormat: "[filename]-[local]",
                cssPropOptimization: true,
            },
        ],
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
    ],
};
