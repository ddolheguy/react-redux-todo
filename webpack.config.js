 
module.exports = {
  entry: './app/Index.js',
  output: { path: __dirname, filename: 'dist/bundle.js' },
  extensions: ['', '.js', '.jsx'],
  modulesDirectories: ['node_modules', 'bower_components'],
  module: {
    loaders: [
        {
          test: /\.js$/, 
          loader: "babel-loader"
        }

        // NOTE: For Babel 6, we need to use presets
        // {
        //     test: /\.js$/,
            // loader: 'babel',
            // exclude: ["bower_components", "node_modules"],
            // query: {
            //     presets: ['es2015', 'react']
            // }
        // }
    ]
  }
};
