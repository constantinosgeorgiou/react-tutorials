import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";

class App extends Component {
    render() {
        return (
            <div>
                <AppBar color="primary" position="static">
                    <ToolBar>
                        <TypoGraphy variant="title" color="inherit">
                            My header
                        </TypoGraphy>
                        <NavBar />
                    </ToolBar>
                </AppBar>
                <Posts />
            </div>
        );
    }
}

export default App;
