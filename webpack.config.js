const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    var config = {
        entry: [
            "./node_modules/gd-sprest-bs/dist/gd-sprest-bs-icons.min.js",
            path.resolve(__dirname, "build/index.js")
        ],
        externals: {
            "gd-bs": "GD",
            "gd-bsx": "GD",
            "gd-sprest-bs": "GD"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-sprest-bsx" + (isDev ? "" : ".min") + ".js"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                // Handle TypeScript Files
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env", "@babel/preset-react"]
                            }
                        }
                    ]
                }
            ]
        }
    };

    // Return the configuration
    return config;
}