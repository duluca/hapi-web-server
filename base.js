var path = require('path');

var basePath = process.env.APP_DIR || ".";

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = [
    // Base
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply){
            "use strict";
            reply.file(path.join(basePath, '/public/index.html'));
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: function(request, reply){
            "use strict";
            reply('You found an invalid route, but won the 404 error!').code(404);
        }
    }
];