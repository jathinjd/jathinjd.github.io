import React from 'react';
import './Footer.css';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        /*const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }*/

        return(
            <div className="footer-container" id="footer">
                <Typography>&copy; 2021 Jathin Dhulipalla.</Typography>
                <div className="footer-social-links">
                    <a href="mailto:jathin.dhulipalla@gmail.com">
                        <EmailIcon style={{fill: "white"}} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jathind/">
                        <LinkedInIcon style={{fill: "white"}} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jathinjd">
                        <GitHubIcon style={{fill: "white"}} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jathin.jd/">
                        <InstagramIcon style={{fill: "white"}} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jathin.dhulipalla/">
                        <FacebookIcon style={{fill: "white"}} />
                    </a>
                </div>
                <div className="footer-powered-by">
                    <Typography>Powered by: </Typography>
                    <div className="footer-social-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
                            <img src={require("../../images/technologies/react.svg")} alt="react"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">
                            <img src={require("../../images/technologies/materialui.svg")} alt="material-ui"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;