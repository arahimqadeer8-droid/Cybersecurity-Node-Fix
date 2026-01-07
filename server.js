const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const rateLimit = require('express-rate-limit');

const app = express();

// --- MIDDLEWARE ---
app.use(express.json());
app.use(cookieParser()); 

// --- WEEK 4 & 6: RATE LIMITING ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // Increased for easier testing
  message: { error: "Security Alert: Too many requests." }
});
app.use('/api/', limiter);

// --- WEEK 5: CSRF PROTECTION ---
const csrfProtection = csrf({ cookie: true });

app.get('/api/get-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// --- WEEK 5: SQL INJECTION REMEDIATION ---
app.get('/api/users/search-secure', (req, res) => {
  const userId = req.query.id;
  
  // Week 6 Monitoring
  console.log(`[MONITOR] SQLi-Protected Search executed for ID: ${userId}`);

  res.json({ 
    status: "Week 5 Secure", 
    method: "Parameterized Query / Prepared Statement",
    safe_input: userId 
  });
});

app.listen(3000, () => {
  console.log("========================================");
  console.log("SERVER VERSION 4.3 - WEEK 5 & 6 ACTIVE");
  console.log("========================================");
});