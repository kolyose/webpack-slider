
module.exports = {
	
	entry: {
		SliderComponent: './SliderComponent.js',
		SliderClassES6: './es6-class/SliderClassES6.js',
		SliderModuleES6: './es6-module/SliderModuleES6.js'
	},
	
	output: {
		path: './build',  
		filename: '[name].js'
	},
	
	watch: true,
	
	module: {
		loaders: [
			{test: /\.jade$/, loader: "jade-loader"},
			{test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	
	node: { 
		// чтобы jade-loader не глючил
		fs: "empty"
	}
};