// const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const WebpackNodeExternals = require('webpack-node-externals')
// const webpack = require('webpack');
// const paths = require('./paths');

// const reactRefreshRuntimeEntry = require.resolve('react-refresh/runtime');

// const reactRefreshWebpackPluginRuntimeEntry = require.resolve(
//     '@pmmmwh/react-refresh-webpack-plugin'
// );

// const babelRuntimeEntry = require.resolve('babel-preset-react-app');

// const babelRuntimeEntryHelpers = require.resolve(
//     '@babel/runtime/helpers/esm/assertThisInitialized',
//     { paths: [babelRuntimeEntry] }
// );

// const babelRuntimeRegenerator = require.resolve('@babel/runtime/regenerator', {
//     paths: [babelRuntimeEntry],
// });

// module.exports = {
//     mode: 'production',
//     entry: {
//         index: './src/index.ts'
//     },
//     output: {
//         filename: '[name].js',
//         path: paths.appBuild,
//         clean: true,
//         publicPath: '/',
//         library: {
//             type: 'commonjs-static',
//         }
//     },
//     // output: {
//     //     filename: 'static/js/[name].[chunkhash].js',
//     //     path: paths.appBuild,
//     //     clean: true,
//     //     publicPath: '/'
//     // },
//     devServer: {
//         open: true,
//         port: 3000,
//         compress: true,
//         historyApiFallback: true,
//         hot: true,
//         static: {
//             directory: paths.appPublic
//         }
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(jsx?|tsx?)$/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: 'babel-loader',
//                         options: {
//                             cacheDirectory: true,
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.(ts|tsx)$/,
//                 exclude: /node_modules/,
//                 use: 'ts-loader'
//             },
//             {
//                 test: /\.(css)$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'postcss-loader'
//                 ]
//             },
//             {
//                 test: /\.(sass|scss)$/,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     'postcss-loader',
//                     'sass-loader'
//                 ]
//             },
//             {
//                 test: /\.(js|ts)$/,
//                 loader: 'source-map-loader'
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Webpack 前端自動化開發',
//             filename: 'index.html',
//             template: 'public/index.html'
//         }),
//         new ReactRefreshWebpackPlugin(),
//         new webpack.DefinePlugin({
//             'process': JSON.stringify(process.env.NODE_ENV)
//         }),
//         new MiniCssExtractPlugin(),
//         new CopyPlugin({
//             patterns: [
//                 {
//                     from: path.resolve(__dirname, './src/components/ReactRouterDomMetadataWrapping/types.ts'),
//                     to: path.resolve(__dirname, './dist/index.d.ts')
//                 }
//             ]
//         })
//     ],
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js', '.jsx'],
//         alias: {
//             '@': path.resolve(__dirname, './src')
//         },
//         plugins: [
//             new ModuleScopePlugin(paths.appPath, [
//                 reactRefreshRuntimeEntry,
//                 reactRefreshWebpackPluginRuntimeEntry,
//                 babelRuntimeEntry,
//                 babelRuntimeEntryHelpers,
//                 babelRuntimeRegenerator
//             ]),
//             new TsconfigPathsPlugin({
//                 extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.sass', '.scss', '.css']
//             })
//         ]
//     },
//     performance: {
//         hints: false
//     },
//     externalsPresets: {
//         node: true
//     },
//     optimization: {
//         minimize: true,
//         minimizer: [
//             new TerserWebpackPlugin({
//                 terserOptions: {
//                     compress: {
//                         pure_funcs: ['console.log']
//                     }
//                 }
//             })
//         ]
//     },
//     externals: [
//         WebpackNodeExternals({
//             allowlist: []
//         })
//     ]
// }






















const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        library: {
            type: 'commonjs-static',
        },
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/components/ReactRouterDomMetadataWrapping/types.ts'),
                    to: path.resolve(__dirname, './dist/index.d.ts')
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024,
                    },
                },
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log']
                    }
                }
            }),
        ],
    },
    externalsPresets: { node: true },
    externals: [
        nodeExternals({
            allowlist: []
        })
    ],
}



