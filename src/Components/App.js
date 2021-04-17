import { Component } from "react";
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Portfolio from "./Portfolio"
import MyTools from "./MyTools"
import "./index.scss";

class App extends Component {

    scrollingToProjects = () => {
        document.getElementById("portfolio").scrollIntoView();
    }
    scrollingToContact = () => {
        document.getElementById("contact").scrollIntoView();
    }
    render() {
        return (
            <div className="App">
                <header>
                    <Home scrollingToProjects={this.scrollingToProjects} scrollingToContact={this.scrollingToContact} />
                </header>
                <div>
                    <MyTools />
                </div>
                <section id="portfolio">
                    <Portfolio />
                </section>
                <section>
                    <About />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        )
    }
}

export default App;