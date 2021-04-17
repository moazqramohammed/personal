import "./index.scss";
import { FaTelegram, FaFacebook } from "react-icons/fa";
const Contact = function () {
    return (
        <div className="contact">
            <div className="container">
                <div className="about-header d-flex flex-column align-items-center">
                    <h2 className="text-capitalize">contact with me</h2>
                    <span>qrhmhmdmadh@gmail.com</span>
                </div>
                <form className="d-flex dicoration-column flex-column">
                    <label>name</label>
                    <input />
                    <label>email</label>
                    <input />
                    <label>message</label>
                    <textarea rows="8" />
                    <input type="submit" value="send" />
                </form>
                <div className="social">
                    <a href='https://www.facebook.com/moaz.qramohammed.5/' rel="noreferrer" target="_blank"><FaFacebook className="icon" />facebook</a>
                    <a href='https://t.me/MoazQraMohammed' rel="noreferrer" target="_blank"><FaTelegram className="icon" />telegram</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;