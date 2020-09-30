import React from "react";
import Navigation from "./components/navigation";
import Main from "./components/main";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <h1>React Router Demo</h1>
            <Navigation />
            <Main />
        </div>
    );
};

export default App;
