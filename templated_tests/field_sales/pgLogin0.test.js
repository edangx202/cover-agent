require('/workspace/cover-agent/utils/text-encoding-polyfill'); // Add this line to include the polyfill

const fs = require('fs');
const path = require('path');
// const { fireEvent, getByPlaceholderText, getByText } = require('@testing-library/dom');
import { fireEvent, getByPlaceholderText, getByText, waitFor } from '@testing-library/dom';

const { JSDOM } = require('jsdom');


describe('Login Form', () => {
    let dom;
    beforeEach(() => {
        // Load the HTML file into the DOM
        const html = fs.readFileSync(path.resolve(__dirname, 'pgLogin.html'), 'utf8');
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        global.document = dom.window.document;
    });

    afterEach(() => {
        // Clean up
        delete global.document;
    });

    it('should display an alert for invalid credentials', () => {
        
        const usernameInput = getByPlaceholderText('Username or Email');
        const passwordInput = getByPlaceholderText('Password');
        const loginButton = getByText('Login');

        // Set invalid credentials
        usernameInput.value = 'invalid_username';
        passwordInput.value = 'invalid_password';

        // Trigger the click event on the login button
        fireEvent.click(loginButton);

        // Wait for the alert to be displayed
        return waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith('Invalid credentials. Please try again.');
        });
    });

    // Add more test cases for valid credentials, navigation, etc.
});
