import {ThemeProvider} from "styled-components";
import {Header} from "./Layout/header/Header";
import {Footer} from "./Layout/footer/Footer";
import {MainContent} from "./Layout/MainContent";
import {GlobalStyle} from "./Styles/GlobalStyle";
import {myTheme} from "./Styles/MyTheme.styled";
import {GoToTopBtn} from "./Components/goToTopBtn";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={myTheme}>
                <GlobalStyle/>
                <Header/>
                <MainContent/>
                <Footer/>
                <GoToTopBtn/>
            </ThemeProvider>
        </div>
    )
}

export default App
