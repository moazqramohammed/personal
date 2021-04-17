import { Component } from "react";
import "./index.scss";
import axios from "axios";
class MyTools extends Component {
    state = {
        images: [],
        hide: function (item) {
            item.style.opacity = "0";
            item.style.visibility = "hidden";
        },
        show: function (item) {
            item.style.opacity = "1";
            item.style.visibility = "visible";
        },
        cur: 0
    };
    componentDidMount() {
        axios.get("./data.json").then(req => this.setState({ images: req.data.mytools }))
    }
    render() {
        const { images } = this.state;
        const mytools = images.map(image => {
            return (
                <li className="images" key={image.id}><img src={image.image} alt="tool" /></li>
            )
        })
        return (
            <div id="mytools" className="mytools py-3">
                <div className="container">
                    <span>developer tools</span>
                    <div className="mytools-list">
                        <ul className="list-unstyled text-center">
                            {mytools}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyTools;