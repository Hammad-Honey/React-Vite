import logo from '../../assets/DayaraLogo.svg';
import './footer.css';
import facebookLogo from "../../assets/facebook.svg";
import instagramLogo from "../../assets/instagram.svg";
import linkedinLogo from "../../assets/Linkedin.svg";
import xLogo from "../../assets/xLogo.svg";

function Footer() {
    return (
        <>
            <footer className='footerBackground'>
                <div className='container'>
                    <img className='logo_img' src={logo} alt='Site Logo'></img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s </p>
                    <div className="social">

                        <div className="icon-circle">
                            <img style={{ width: "18px", height: "18px" }} src={facebookLogo} alt="Facebook social icon" />
                        </div>
                        <div className="icon-circle">
                            <img style={{ width: "18px", height: "18px" }} src={instagramLogo} alt="Facebook social icon" />
                        </div>
                        <div className="icon-circle">
                            <img style={{ width: "18px", height: "18px" }} src={linkedinLogo} alt="Facebook social icon" />
                        </div>
                        <div className="icon-circle">
                            <img style={{ width: "18px", height: "18px" }} src={xLogo} alt="Facebook social icon" />
                        </div>


                    </div>
                </div>
            </footer>
        </>
    );
}


export default Footer;