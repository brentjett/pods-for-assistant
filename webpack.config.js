const path = require( 'path' )
const pckg = require( './package.json' )
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

const alias = {}

// Build config.
const config = {
	entry: './src/index.js',
	externals: {
		'react': 'React',
	},
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: '[name].js',
		chunkFilename: `chunk-[name].js?var=${ pckg.version }`
	},
	resolve: { alias },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.s?css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} )
	],
}

// Production build config.
if ( 'production' === process.env.NODE_ENV ) {
	config.optimization = {
		minimize: true,
		minimizer: [ new CssMinimizerPlugin() ]
	}
}
module.exports = config
