var webpack = require('webpack');
var PROD = process.env.NODE_ENV == 'production';

module.exports = {
    entry: {
      app: ["./client.js", 'webpack-hot-middleware/client'],
      vendor: [
       'react', 'react-dom'
      ]
    },
    output: {
        path: __dirname + "/Scripts/dist",
        filename: "[name].bundle.js"
    },
    resolve: {
    		extensions: ['.js', '.scss', '.css']
    },
    module: {
        loaders: [
            {
                loader: ['react-hot-loader/webpack','babel-loader'],
                test: /\.js/,
                exclude: /(node_modules|bower_components)/
            },
            {
                loader: ['babel-loader'],
                test: /\.example/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=compressed'
            }
        ]
    },
    plugins: PROD ? [
              new webpack.optimize.UglifyJsPlugin({minimize: true}),
              new webpack.optimize.OccurrenceOrderPlugin(),
              new webpack.HotModuleReplacementPlugin(),
              new webpack.NoErrorsPlugin(),
              new webpack.LoaderOptionsPlugin({
               options: {
                 sassLoader: {
                   includePaths: [
                     './node_modules'
                   ]
                 }
               }
             })
            ] :
    [
        // Avoid publishing files when compilation fails
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
         options: {
           sassLoader: {
             includePaths: [
               './node_modules'
             ]
           }
         }
       })
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
