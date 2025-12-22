const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

// WEEK 2 FIX: Manual Security (Replaces Helmet)
app.use(function(req, res, next) {
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
});

app.get('/', function(req, res) {
    var name = req.query.name || "Intern";
    
    // WEEK 2 FIX: Manual XSS Protection
    // This stops the <script> from running
    var cleanName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    res.send('<h1>Welcome, ' + cleanName + '</h1>' +
             '<form action="/login" method="POST">' +
             'User: <input type="text" name="username"><br>' +
             'Pass: <input type="password" name="password"><br>' +
             '<button type="submit">Login</button></form>');
});

app.post('/login', function(req, res) {
    var user = req.body.username;

    // WEEK 3 FIX: Manual Logging (Replaces Winston)
    var logEntry = "[" + new Date().toISOString() + "] Login Attempt: " + user + "\n";
    fs.appendFileSync('security.log', logEntry);

    // WEEK 2 FIX: Manual SQL Injection Block
    if (user && (user.indexOf("'") !== -1 || user.indexOf("--") !== -1)) {
        return res.send("<h1>Security Alert: SQL Injection Blocked!</h1>");
    }
    res.send("<h1>Login Failed</h1>");
});

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});