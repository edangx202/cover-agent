require('/workspace/cover-agent/utils/text-encoding-polyfill'); // Add this line to include the polyfill

const fs = require('fs');
const path = require('path');
import { fireEvent, getByPlaceholderText, getByText, waitFor } from '@testing-library/dom';

const JSDOM = require('jsdom').JSDOM;

beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, 'pgLogin.html'), 'utf8');
    const dom = new JSDOM(html.toString(), { runScripts: "dangerously" });
    // const dom = new JSDOM(html.toString());
    document = dom.window.document;
    

    document.documentElement.innerHTML = html.toString();   //!

    window = dom.window;

    // Define global properties for the test environment
    global.document = document;
    global.window = window;
    global.alert = jest.fn();
    global.authenticate = jest.fn((username, password) => username === 'admin' && password === 'password');
});

it('username', function () {
    const usernameInput = getByPlaceholderText(document, 'Username or Email');
    expect(document.getElementById('username')).toBeTruthy();
});



it('Mock authentication with correct credentials', async () => {
    // Get elements from the DOM
    const usernameInput = getByPlaceholderText(document, 'Username or Email');
    const passwordInput = getByPlaceholderText(document, 'Password');
    const loginButton = getByText(document, 'Login');

    global.authenticate = jest.fn(loginButton.onclick() );

    // Set input values
    usernameInput.value = 'admin';
    passwordInput.value = 'password';

    // Simulate click on the login button
    fireEvent.click(loginButton);

    // Wait for the authentication to finish
    await waitFor(() => {
        // expect(loginButton.onclick).toHaveBeenCalledTimes(1);
        // expect(global.mockClick).toHaveBeenCalledTimes(1);

        expect(global.authenticate).toHaveBeenCalledTimes(1);
        // expect(global.mockAuthenticate).toHaveBeenCalledWith('admin', 'password');
        // expect(window.location.href).toBe('pgMenu.html');
    });

    // Check if the authenticate function was called
    // expect(global.mockAuthenticate).toHaveBeenCalled();
});




