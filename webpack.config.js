
const webpack= require("webpack");
const {resolve} = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports= {
    context: resolve('src'),
    entry: {
        app: './index.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'bundle.js',
    },
    devServer: {
      
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: [/\.js$/,/\.jsx$/],
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
             { test: /\.css$/,
               loader: "style-loader!css-loader" 
            },

             {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "file-loader"
            }

          /*  {
                enforce: 'pre',
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: "eslint-loader",
               
             },*/
        ]
    }
}