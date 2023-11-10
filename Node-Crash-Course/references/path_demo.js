const path = require('path')

// Base file name, moostra o noeme do arquivo  em que estamos
console.log(path.basename(__filename))

// Directory name ele vai mostrar o diretório em que estamos
console.log(path.dirname(__filename))

// File Extension mostaa a exteção do arquivo em que estamos
console.log(path.extname(__filename))

// Create a path object
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))
