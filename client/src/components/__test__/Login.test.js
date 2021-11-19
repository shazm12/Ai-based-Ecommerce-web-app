import {render, screen ,cleanup } from '@testing-library/react'
import Login from '../Login';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('Login',() => {
    render(<Login />);
    const loginElement = screen.getByTestId('login-1');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent('Username');
    expect(loginElement).toHaveTextContent('Password');
})


test('Check For User Login',() => {
    render(<Login />);
    const loginElement = screen.getByTestId('login-1');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent('Username');
    expect(loginElement).toHaveTextContent('Password');

    const nameField = screen.getByTestId("namefield");
    const LoginScreen = screen.getByTestId("login-1");
    userEvent.type(nameField,"Shamik Bera");
    const passwordField = screen.getByTestId("passwordField");
    userEvent.type(nameField,"shamik123");
    expect(screen.getByTestId("login-1")).not.toHaveTextContent("Wrong Credentials");

})
