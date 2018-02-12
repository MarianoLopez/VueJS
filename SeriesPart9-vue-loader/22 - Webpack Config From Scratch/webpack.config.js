let webpack = require('webpack');
let path = require('path');
let production = true;
module.exports = {
    entry:{
        app:'./src/main/resources/frontEnd/app.js'
    },
    output: {
        path: path.resolve(__dirname,'src/main/resources/static/js'),
        filename: "[name].js",
        publicPath: "./src/main/resources/static"
    },
    module: {
        rules: [
            {
                test:/\.js$/,//any .js file
                exclude:/node_modules/,
                loader: 'babel-loader'//translate code for browsers - config = .babelrc
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    plugins: []
};
//hardcoded.. doesnt read the process.env.NODE_ENV.. set NODE_ENV=production && webpack (if(process.env.NODE_ENV==='production'))
if(production){
    console.log("production")
    //minification
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap:true,
            compress:{
                warnings:false
            }
        })
    );
}else{
    console.log("dev")
}