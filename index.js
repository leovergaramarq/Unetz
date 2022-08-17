const express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    server = http.createServer(app);
// 

console.log(__dirname);
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/html')));

server.listen(app.get('port'), ()=> {
    console.log('Server running on port', app.get('port'));
});
