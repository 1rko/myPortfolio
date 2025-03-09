import './App.css'
import styled, {ThemeProvider} from "styled-components";
import {Header} from "./Layout/header/Header";
import {Footer} from "./Layout/footer/Footer";
import {MainContent} from "./Layout/MainContent";
import {GlobalStyle} from "./GlobalStyle";
import {myTheme} from "./MyTheme.styled";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={myTheme}>
                <GlobalStyle/>
                <Header/>
                <MainContent/>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}

export default App
