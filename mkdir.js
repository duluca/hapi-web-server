/**
 * Created by doguhanuluca on 2/3/15.
 */
var fs  = require('fs'),
    path = require('path');

var mkdirpSync = function (dirpath) {
    var parts = dirpath.split(path.sep);
    for( var i = 1; i <= parts.length; i++ ) {
        var dirPath = path.join.apply(null, parts.slice(0, i));
        if(!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
            console.log("Created: " + dirPath);
        }
    }
}

module.exports = mkdirpSync;