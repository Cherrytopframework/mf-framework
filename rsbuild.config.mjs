import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');
const Dotenv = require('dotenv-webpack');
const rspack = require('@rspack/core');

const {
    ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');
const path = require('path');


export default defineConfig({
    entry: './src/index.ts',
    // entry: './src/boostrap.tsx',
    context: __dirname,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'modules.bundle.js',
    },
    // Javascript / Typescript support
    module: {
        rules: [
          {
            test: /\.jsx$/,
            use: {
              loader: 'builtin:swc-loader',
              options: {
                jsc: {
                  parser: {
                    syntax: 'ecmascript',
                    jsx: true,
                  },
                },
              },
            },
            type: 'javascript/auto',
          },
          {
            test: /\.tsx$/,
            use: {
              loader: 'builtin:swc-loader',
              options: {
                jsc: {
                  parser: {
                    syntax: 'typescript',
                    tsx: true,
                  },
                },
              },
            },
            type: 'javascript/auto',
          },
        ],
      },
    output: {
        // set uniqueName explicitly to make HMR works
        uniqueName: 'app',
        // distPath: 'dist'
    },
    // React support
    plugins: [
        pluginReact()
    ],
    server: {
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
    dev: {
        // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
        assetPrefix: true,
    },
    // Module federation support
    tools: {
        rspack: {
            output: {
                // You need to set a unique value that is not equal to other applications
                uniqueName: 'app'
            },
            plugins: [
                // new HtmlWebpackPlugin(),
                new rspack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']),
                new Dotenv({
                  path: './.env', // Path to .env file (this is the default)
                  safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
                }),
                new ModuleFederationPlugin({
                    name: 'app',
                    // remotes: {},
                    exposes: {
                      "./App": "./src/App/index.tsx",
                      "./CherrytopFramework": "./src/Entry.tsx",
                      "./AuthProvider": "./src/components/custom/Auth/Auth3.tsx",
                      // app/AppProvider includes theme, alert, confirm, drawer providers
                      "./AppProvider": "./src/components/custom/providers/Providers.tsx",
                      "./AlertProvider": "./src/components/custom/providers/AlertProvider.tsx",
                      "./ConfirmProvider": "./src/components/custom/providers/Confirm/ConfirmProvider.tsx",
                      "./BottomNavigation": "./src/components/Mui/BottomNavigation/BottomNavigation.tsx",
                      "./Camera": "./src/components/custom/Camera/Camera.tsx",
                      "./ChatBox": "./src/components/custom/Chat/Chat.tsx",
                      "./ChatView": "./src/components/custom/Chat/ChatView.tsx",
                      "./ChartsContainer": "./src/components/custom/charts/ChartsWrapper.tsx",
                      "./DrawerContainer": "./src/components/Mui/Drawer/Drawer.tsx",
                      "./DateTimeLabel": "./src/components/custom/DateTimeLabel/DateTimeLabel.tsx",
                      './DisplayCard': './src/components/Mui/DisplayCard/DisplayCard.tsx',                        
                      "./FormContainer": "./src/components/custom/forms/FormContainer.tsx",
                      './List': './src/components/Mui/List/List.tsx',
                      "./MarkdownWrapper": "./src/components/custom/wrappers/MarkdownWrapper/MarkdownWrapper.tsx",
                      "./Navbar": "./src/components/Mui/Navbar/Navbar.tsx",
                      "./NavMenu": "./src/components/Mui/Navbar/NavMenu.tsx",
                      "./NotionDataWrapper": "./src/components/custom/NotionPage/NotionPage.tsx",
                      "./QueryWrapper": "./src/components/custom/wrappers/QueryWrapper/QueryWrapper.tsx",
                      "./ReusablePopover": "./src/components/custom/ReusablePopover/ReusablePopover.tsx",
                      "./ReusableTable": "./src/components/custom/charts/ReusableTable.tsx",
                      "./Tabs": "./src/components/Mui/Tabs/Tabs.tsx",
                      "./ThemeProvider": "./src/utilities/theme/index.ts",
                      "./utilities/queries": "./src/utilities/api/index.ts",
                      "./utilities/store": "./src/utilities/store/index.ts",
                      "./utilities/store/utilityStore": "./src/utilities/store/utilityStore.ts"
                    },
                    shared: {
                      react: {
                          singleton: true,
                          requiredVersion: "^18.3.1"
                      },
                      "react-dom": {
                          singleton: true,
                          requiredVersion: "^18.3.1"
                      },
                      zustand: { singleton: true, requiredVersion: "^4.1.1" }, // Share Zustand to ensure single store instance
                  },
                }),
                //todo Need to add code to check if environment is development
                new ReactRefreshPlugin()
            ],
        },
    },
    devServer: {
      // static: {
      //     directory: path.join(__dirname, "public"),
      // },
      // host: "./dist",
      // port: 8080,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
  },
});
