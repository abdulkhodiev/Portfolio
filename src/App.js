import React, { createContext, useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import twitter from "./twitter-icon.png";
import figma from "./figma-icon.png";
import insta from "./instagram-icon.png";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    useEffect(() => {
        document.body.className = theme === "dark" ? "dark-theme" : "";
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <label htmlFor="check">
            <input
                type="checkbox"
                id="check"
                className="check"
                onChange={toggleTheme}
                checked={theme === "dark"}
            />
            <div className="parent">
                <div className="child"></div>
            </div>
        </label>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <div>
                <header>
                    <div className="container d-flex justify-content-between align-items-center py-4">
                        <div className="nav-pages d-flex gap-4">
                            <a className="logo" href="#">
                                Jobirkhon Abdulkhodiev
                            </a>
                            <a href="#">Section two</a>
                            <a href="#">Section three</a>
                            <a href="#">Section four</a>
                        </div>
                        <div className="navs-web d-flex align-items-center gap-4">
                            <a href="#">
                                <img src={twitter} alt="Twitter" />
                            </a>
                            <a href="#">
                                <img src={figma} alt="Figma" />
                            </a>
                            <a href="#">
                                <img src={insta} alt="Instagram" />
                            </a>
                            <ThemeToggler />
                        </div>
                    </div>
                </header>
                <main>
                    <div className="container d-flex flex-column gap-5 p-5">
                        <h1>
                            Hello. <br /> My name is Jobirkhon.
                        </h1>
                        <div className="context-wr d-flex flex-column gap-3">
                            <p>
                                I'm a Software Engineer and Front-End Web
                                developer – creating digital experiences that
                                are intuitive for real people and making complex
                                processes easy to use.
                            </p>
                            <p>
                                Right now, I'm Design Lead at Holiday Extras,
                                covering all our digital platforms across a
                                whole load of brands – leading a great team
                                across design, UI engineering, accessibility and
                                customer experience. I'm lucky to be part of a
                                great team of designers, writers, engineers, PMs
                                and data specialists – amongst others – testing,
                                iterating and optimising our platforms and
                                products.
                            </p>
                            <p>
                                I've got some work on Dribbble, some previous
                                work at Saga and you can find me over on Twitter
                                and sometimes on Medium too. I also take too
                                many photos.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
};

export default App;
