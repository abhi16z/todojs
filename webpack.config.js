module.exports = {
    entry: ['./todo/todo.js'],
    output: {
        filename: 'todo.js'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      },
	mode:'development'
};