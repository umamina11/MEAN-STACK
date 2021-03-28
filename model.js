//require ,exports,module,__dirname,__filename

//console.log(__dirname)
//console.log(__filename)

let names = ['jill', 'lynn', 'mike']
let scores = [100, 90, 95]

//module.exports = names//export names only and we export another module then it get override

//module.exports = scores

exports.names = names
module.exports.scores = scores
exports.data = [1, 2, 3]
    //module.exports = "apple"

//console.log(module)