/**
 * Created by doguhanuluca on 2/3/15.
 */
var path = require('path');

var basePath = process.env.APP_DIR || ".";

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = [
    // Assets
    {
        method: 'GET',
        path: '/images/{path*}',
        handler: {
            directory: { path: path.join(basePath, '/public/images') }
        }
    },
    {
        method: 'GET',
        path: '/css/{path*}',
        handler: {
            directory: { path: path.join(basePath, '/public/css') }
        }
    },
    {
        method: 'GET',
        path: '/fonts/{path*}',
        handler: {
            directory: { path: path.join(basePath, '/public/fonts') }
        }
    },
    {
        method: 'GET',
        path: '/templates/{path*}',
        handler: {
            directory: { path: path.join(basePath, '/public/templates') }
        }
    },
    {
        method: 'GET',
        path: '/js/{path*}',
        handler: {
            directory: { path: path.join(basePath, '/public/js') }
        }
    },
    {
        method: 'GET',
        path: '/bower_components/{path*}',
        handler: {
            directory: { path: path.join(basePath, '/public/bower_components') }
        }
    }
];