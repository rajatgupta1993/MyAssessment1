var config= require('./webpack.config')
const webpack= require("webpack");
config.plugins.push(
    new  webpack.optimize.UglifyJsPlugin({
        minimize:  true,
        compress: {
            warnings:  false
        }
    }
    )
) 

module.exports= config;