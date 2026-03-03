// Q.F.A.S. Local AI Proxy — Runs on localhost:3141
// Solves CORS by proxying NVIDIA API requests from the browser
// Usage: node proxy.js

const http = require('http');
const https = require('https');

const PORT = 3141;
const TARGET = 'integrate.api.nvidia.com';

const server = http.createServer((req, res) => {
    // CORS headers for browser
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('POST only');
        return;
    }

    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        const options = {
            hostname: TARGET,
            port: 443,
            path: '/v1/chat/completions',
            method: 'POST',
            headers: {
                'Authorization': req.headers['authorization'] || '',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Content-Length': Buffer.byteLength(body)
            }
        };

        const proxy = https.request(options, (apiRes) => {
            res.writeHead(apiRes.statusCode, { 'Content-Type': 'application/json' });
            apiRes.pipe(res);
        });

        proxy.on('error', (err) => {
            console.error('Proxy error:', err.message);
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        });

        proxy.write(body);
        proxy.end();
    });
});

server.listen(PORT, () => {
    console.log('');
    console.log('===========================================');
    console.log('  Q.F.A.S. AI PROXY running on port ' + PORT);
    console.log('  http://localhost:' + PORT);
    console.log('===========================================');
    console.log('');
    console.log('Keep this running while using AI features.');
    console.log('Press Ctrl+C to stop.');
});
