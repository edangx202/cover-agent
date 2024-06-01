const fs = require('fs');
const path = require('path');
const { fireEvent, getByPlaceholderText, getByText } = require('@testing-library/dom');
const { JSDOM } = require('jsdom');
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


const html = fs.readFileSync(path.resolve(__dirname, 'pgLogin.html'), 'utf8');
console.log('debug the HTML content');  // Add this line to debug the HTML content
console.log(html);  

const dom = new JSDOM(html, { runScripts: "dangerously" });
document = dom.window.document;
window = dom.window;

// Define global properties for the test environment
global.document = document;
global.window = window;

console.log('document')
console.log(document)


const usernameInput = getByPlaceholderText(document.getElementById('username'), text='Username or Email');
console.log('usernameInput')
console.log(usernameInput)
