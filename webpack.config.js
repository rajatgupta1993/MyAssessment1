
const webpack= require("webpack");
const {resolve} = require("path");
module.exports= {
    context: resolve('src'),
    entry: {
        app: './index.js'
    },
    // output: {
    //     path: resolve('dist'),
    //     filename: 'bundle.js'
    // },

    output: {
           path :   resolve(__dirname,'public'),
           filename : 'bundle.js',
            },

    devServer: {
        inline: true, 
        port:8080,
        historyApiFallback: true,
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
            },

            // {
            //     enforce: 'pre',
            //     test: [/\.js$/, /\.jsx$/],
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
               
            //  },
        ]
    }
}