var webpack = require('webpack')
module.exports = {
	entry:{
		app:'./src/main.js'
	},
	output:{
		filename:'[name].js'
	},
	resolve:{
		extensions: ['.js', '.vue', '.json'],
	},
	module: {
	    rules: [
	      {
	        test: /\.vue$/,
	        loader: 'vue-loader',
	        options: {
	        	loaders:{
	        		less:[{
	        			loader:'less-loader'
	        		}],
	        		css:[{
	        			loader:'css-loader'
	        		}]
	        	}
	        }
	      },
	      {
	        test: /\.js$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	      },
	      {
	        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000,
	          name: 'img/[name].[hash:7].[ext]'
	        }
	      },
	      {
	        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000,
	          name: 'fonts/[name].[hash:7].[ext]'
	        }
	      }
	    ]
  },
  
}