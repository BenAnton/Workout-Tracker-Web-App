import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import SignUpLogin from "../Components/Login/SignUp-Login"

jest.mock("../Components/Login/SignUp-Form", () => () => (
    <div data-testid="signup-form">SignupForm</div>
));

jest.mock("../Components/Login/CreateAccount-Form", () => () => (
    <div data-testid="create-account-form">CreateAccountForm</div>
));

describe("SignUp Login Component", () => {
    test("Renders sign in and create account buttons", () => {
        render(<SignUpLogin/>);
        expect(screen.getByText("Sign In")).toBeInTheDocument();
        expect(screen.getByText("Create Account")).toBeInTheDocument();
    });

    test("Shows signup form by default", () => {
        render(<SignUpLogin/>);
        expect(screen.getByTestId("signup-form")).toBeInTheDocument();
    });

    test("Shows create account form when create account button is clicked", () => {
        render(<SignUpLogin/>);
        const createButton = screen.getByText("Create Account");
        fireEvent.click(createButton);
        expect(screen.getByTestId("create-account-form")).toBeInTheDocument();
    });

    test("Shows signup form when sign in button is clicked after switching", () => {
        render(<SignUpLogin/>);
        const createButton = screen.getByText("Create Account");
        const signInButton = screen.getByText("Sign In");

        fireEvent.click(createButton);
        expect(screen.getByTestId("create-account-form")).toBeInTheDocument();

        fireEvent.click(signInButton);
        expect(screen.getByTestId("signup-form")).toBeInTheDocument();
    });
});