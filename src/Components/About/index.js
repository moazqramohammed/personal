import "./index.scss";
import Image from "../home-img.png";

const About = function () {
    return (
        <div className="about">
            <div className="container">
                <h2 className="text-capitalize">about</h2>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <p>
                            My name is Moaz, I’m self-taught
                            front-end developer, And I'm still.
                        </p>
                        <p>
                            That’s when I stared to learn front-end development
                            throughtout courses, web sites and etc. One of the
                            most impactful free courses I found for myself as a
                            web beginner was FreecodeCamp which was easy to follow.
                        </p>
                        <p>
                            Today most of the time I’m working with React
                            developing Single Page Applications.
                        </p>
                    </div>
                    <div className="about-image col-md-6" >
                        <img src={Image} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;