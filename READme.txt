**Cybersecurity Internship Task – Web Application Security**

**Project Title:**
Strengthening Security Measures for a Web Application

**Overview:**
This project focuses on analyzing and securing a simple User Management System web application. The objective is to identify common security vulnerabilities and implement basic cybersecurity measures using standard tools and best practices as part of a cybersecurity internship.

**Application Setup:**

* Mock web-based application sourced from GitHub
* Installed dependencies using `npm install` and `npm start`
* Application tested locally at `http://localhost:3000`
* Features tested: Signup, Login, and Profile Management

**Week 1: Security Assessment:**

* Explored application structure and user flows
* Performed vulnerability assessment using OWASP ZAP, browser developer tools, and manual testing
* Tested for XSS and SQL Injection vulnerabilities
* Documented identified vulnerabilities and improvement areas

**Week 2: Implementing Security Measures:**

* Input validation and sanitization using validator library
* Password hashing and salting using bcrypt
* Implemented token-based authentication using JSON Web Tokens (JWT)
* Secured HTTP headers using Helmet.js

**Week 3: Advanced Security and Final Reporting:**

* Conducted basic penetration testing using Nmap and browser-based testing
* Implemented logging using Winston
* Created a security best practices checklist including input validation, HTTPS usage, and password security

**Final Deliverables:**

* Secure web application
* GitHub repository with source code and README
* Final report summarizing vulnerabilities and fixes
* Recorded video explanation

**Status:**
All weekly tasks were completed successfully as per internship requirements.

Week 4: Perimeter Defense & API Security

Hardened Security Headers: Fine-tuned Helmet.js to implement strict Content Security Policy (CSP) and HTTP Strict Transport Security (HSTS).
+2


Brute-Force Mitigation: Integrated express-rate-limit to protect API endpoints from automated credential stuffing and Denial of Service (DoS) attempts.
+2


Perimeter Verification: Validated that the API gateway successfully drops unauthorized or excessive requests before they reach backend logic.

Week 5: Advanced Database Security & CSRF Protection

SQL Injection Remediation: Transitioned from basic input sanitization to Parameterized Queries (Prepared Statements) to ensure all user input is treated as data, not executable code.
+1


Cross-Site Request Forgery (CSRF) Defense: Implemented the Synchronizer Token Pattern, requiring a unique, cryptographically strong csrfToken for every sensitive state-changing request.
+2


Session Integrity: Secured user sessions by binding tokens to authenticated sessions, preventing unauthorized third-party actions.
+2

Week 6: Real-Time Monitoring & Zero-Trust Integration

Intrusion Detection System (IDS): Leveraged Windows PowerShell to create a live security monitor that flags and logs intercepted malicious payloads (e.g., SQLi attempts) in real-time.


Zero-Trust Architecture: Adopted a "Never Trust, Always Verify" model, where every request is explicitly verified via token integrity regardless of the user's network location.


Final Security Audit: Conducted a comprehensive review of all implemented defenses, maintaining a persistent audit trail for forensic analysis


