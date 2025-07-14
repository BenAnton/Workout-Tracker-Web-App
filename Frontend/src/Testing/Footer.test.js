import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Footer from "../Components/Footer/Footer";
import {ThemeContext} from '../Components/Context/ThemeContext';
import {MemoryRouter} from 'react-router-dom';


describe('Footer theme toggle button', () => {
    const mockToggleTheme = jest.fn();


    const renderFooter = (themeValue = "light") => {
        render(
            <MemoryRouter>
                <ThemeContext.Provider value={{theme: themeValue, toggleTheme: mockToggleTheme}}>
                    <Footer/>
                </ThemeContext.Provider>
            </MemoryRouter>
        );
    };

    test('Renders the button with correct label when in Light mode', () => {
        renderFooter("light");
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent("Change To Dark Mode");
    });

    test("Renders button with correct label when in Dark mode", () => {
        renderFooter("dark");
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent("Change To Light Mode");
    });

    test("Calls toggleTheme on click", () => {
        renderFooter("light");
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    });
});