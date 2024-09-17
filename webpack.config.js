const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const DotenvWebpack = require('dotenv-webpack');
const path = require('path');


module.exports = (_, argv) => ({
    entry: './src/index.ts',
    mode: 'development',
    output: {
        path: (argv.mode === "development")
            ? path.resolve(__dirname, 'dist')
            : path.resolve(__dirname, 'dist'),
        filename: 'modules.bundle.js',
    },
    // devServer: {
    //     host: "./dist",
    //     port: 3100,
    // },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    // { loader: 'sass-loader' }, 
                ]
            },
            {
                test: /\.(ts|tsx)?$/, // Add rule for .ts and .tsx files
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)?$/,
                use: 'babel-loader',
                exclude: [/node_modules/, /public/],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolves these extensions
        alias: {
            // Set up aliases
            components: path.resolve(__dirname, 'src/components/'),
            // Not used yet
            // utils: path.resolve(__dirname, 'src/utils/'),
            // assets: path.resolve(__dirname, 'src/assets/'),
            store: path.resolve(__dirname, 'src/utilities/store/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new ModuleFederationPlugin({
            name: "app",  // this name needs to match with the entry name
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./App": "./src/App/index.js",
                "./QueryWrapper": "./src/components/custom/wrappers/QueryWrapper/QueryWrapper.tsx",
                // "./NotionDataWrapper": "./src/components/custom/NotionPage/NotionPage.tsx",
                // "./MarkdownWrapper": "./src/components/custom/wrappers/MarkdownWrapper/MarkdownWrapper.tsx",
                "./AppProvider": "./src/components/custom/providers/Providers.tsx",
                "./AlertProvider": "./src/components/custom/providers/AlertProvider.tsx",
                "./ConfirmProvider": "./src/components/custom/providers/Confirm/ConfirmProvider.tsx",
                // "./ThemeProvider": "./src/components/custom/providers/ThemeProvider/ThemeProvider.tsx",
                // "./FormsContainer": "./src/components/custom/forms/FormsContainer/FormsContainer.tsx",
                "./ChartsContainer": "./src/components/custom/charts",
                "./ReusableTable": "./src/components/custom/charts/ReusableTable.tsx",
                "./ChatBox": "./src/components/custom/Chat/Chat.tsx",
                "./utilities/queries": "./src/utilities/api/index.ts",
                "./utilities/store": "./src/utilities/store/index.ts",
                "./utilities/store/utilityStore": "./src/utilities/store/utilityStore.ts",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: "18.3.1"
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: "18.3.1"
                },
                zustand: { singleton: true, requiredVersion: "4.1.1" }, // Share Zustand to ensure single store instance
            },
        }),
        new DotenvWebpack(),
    ],
});