/**
 * Created by doguhanuluca on 2/3/15.
 */
var path = require('path');

var mkdir = require('./mkdir');
var mkindex = require('./mkindex');

var baseDir = process.argv[2] || '';

mkdir(path.join(baseDir, 'public'));
mkdir(path.join(baseDir, 'public/css'));
mkdir(path.join(baseDir, 'public/fonts'));
mkdir(path.join(baseDir, 'public/css'));
mkdir(path.join(baseDir, 'public/js'));
mkdir(path.join(baseDir, 'public/templates'));
mkdir(path.join(baseDir, 'public/images'));

mkindex(path.join(baseDir, 'public'));
