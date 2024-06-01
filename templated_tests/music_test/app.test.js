const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!doctype html><html><body><div id="mainContent"></div><div id="categoriesContainer"></div><button id="categoryButton">Category</button></body></html>');
global.window = window;
global.document = window.document;
global.fetch = require('jest-fetch-mock');

const App = require('./app'); 

let app;

beforeEach(() => {
    app = new App();
});

test('should initialize and set userIsAuthenticated to false', () => {
    expect(app.userIsAuthenticated).toBe(false);
});

// successfully tested Jest functions will be added below

