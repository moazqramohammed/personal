import "./index.scss";
import Image from "../home-img.png";
const Home = function (props) {
    // console.log(props)
    return (
        <div className="home">
            <div className="row h-100 flex align-items-center">
                <div className="col-md-6 col-12 text-center home-content">
                    <h1>I develop <span className="quality">quality driven</span> solution</h1>
                    <span className="career">front-end developer</span>
                    <div className="contact">
                        <span onClick={() => props.scrollingToProjects()} className="text-decoration-none project-anchor"> view projects </span>
                        <span> or </span>
                        <span onClick={() => props.scrollingToContact()} className="text-decoration-none contact-anchor"> contact me </span>
                    </div>
                </div>
                <div className="col-md-6 home-image">
                    <img src={Image} alt="home" />
                </div>
            </div>
        </div>
    )
}
export default Home;