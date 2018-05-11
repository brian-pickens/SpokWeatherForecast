var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
	module: {
		rules: [
            {
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
					  {
						  loader: 'css-loader',
						  options: {
							  // If you are having trouble with urls not resolving add this setting.
							  // See https://github.com/webpack-contrib/css-loader#url
							  url: false,
							  minimize: true,
							  sourceMap: true
						  }
					  },
					  {
						  loader: 'resolve-url-loader'
					  },
					  {
						  loader: 'sass-loader',
						  options: {
							  sourceMap: true
						  }
					  }
					]
				  })
            },
			{
			  test: /\.(svg|png|jpg|gif|cur|woff|woff2|eot|ttf|otf|mp3|ogg)$/,
			  loader: 'file-loader'
			},
			{
			  test: /\.(html)$/,
			  loader: 'raw-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/app/spok-weather/app.spok-weather.index.html',
			output: __dirname + '/dist/development',
			inject: 'head'
		}),
		new ExtractTextPlugin('spok-weather.styles.css'),
		new CleanWebpackPlugin(['dist/development'])
	],

	externals: {
		jquery: 'jQuery',
		angular: 'angular'
	},

	entry: {
		'spok-weather.main': './src/app/spok-weather/app.spok-weather.main.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/development')
	},

	devtool: "#inline-source-map",

	mode: 'development'
};
