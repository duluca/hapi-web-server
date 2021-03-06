# hapi-web-server
Route and controller definitions to use Hapi.JS to serve static content (html, css, js, images, etc) over the web. Kind of like `express.static` but for Hapi.JS.

## Why Do You Need This?
Avoid using a templating engine or server-side generated html files. Hapi-web-server contains route and controller definitions for Hapi.JS, so you can avoid writing this straighforward and boilerplate like code by using the package.

## Install
`npm install --save-dev hapi-web-server`

[Npm Link] (https://www.npmjs.com/package/hapi-web-server)

### Content Folder Structure
On npm install the expected folder structure and index.html is created:
- public
  - css
  - fonts
  - images
  - js
  - templates
  - index.html

You can get the routes and the controllers that will server the content with `require('hapi-web-server')`. See the code sample below on usage.

## Sample Code
```javascript
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection( { port: 3000, address: 'localhost'});

var webServerRoutes = require('hapi-web-server');

var apiRoutes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    }
];

var routes = webServerRoutes.concat(apiRoutes);

server.route(routes);

server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});
```
