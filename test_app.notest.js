const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!doctype html><html><body><div id="mainContent"></div><div id="categoriesContainer"></div><button id="categoryButton">Category</button></body></html>');
global.window = window;
global.document = window.document;
global.fetch = require('jest-fetch-mock');

const App = require('./app'); // Adjust the path as needed

describe('App', () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    test('should initialize and set userIsAuthenticated to false', () => {
        expect(app.userIsAuthenticated).toBe(false);
    });

    // test('should add event listener for DOMContentLoaded', () => {
    //     const spy = jest.spyOn(document, 'addEventListener');
    //     app.initEventListeners();
    //     expect(spy).toHaveBeenCalledWith('DOMContentLoaded', expect.any(Function));
    // });

    // I expect and want automated tests to be added after this


});

// But automated tests are actually added after this. This is not what i want
