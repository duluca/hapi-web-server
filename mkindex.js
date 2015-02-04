var fs  = require('fs');

var create = function() {
    var fileName = 'public/index.html';

    if (!fs.existsSync(fileName)) {
        var html = "<!doctype html>";
        fs.writeFileSync(fileName, html);
        console.log('Created: ' + fileName);
    }
};

module.exports = create;