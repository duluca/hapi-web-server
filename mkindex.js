var fs  = require('fs');
var path = require('path');

var create = function(baseDir) {
    var fileName = path.join(baseDir, 'index.html');

    if (!fs.existsSync(fileName)) {
        var html = "<!doctype html>";
        fs.writeFileSync(fileName, html);
        console.log('Created: ' + fileName);
    }
};

module.exports = create;