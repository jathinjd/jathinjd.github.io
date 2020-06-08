import React from 'react';
import './Contact.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        return(
            <div className="section" id="contact" style={useStyles.sectionClass}>
                <Paper className="contact-container">
                    <div className="contact-head">
                        <Typography className="conatct-title" variant="h4">Contact Me</Typography>
                        <Typography>I am open to new opportunites, ideas and feedback. Find me here...</Typography>
                    </div>
                    <div className="contact-content">
                        <div className="contact-item">
                            <Typography className="contact-method">Email:</Typography>
                            <div className="contact-address">
                                <a href="mailto:jathin57@gmail.com">
                                    <EmailIcon />
                                    <Typography>jathin57@gmail.com</Typography>
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Typography className="contact-method">LinkedIn:</Typography>
                            <div className="contact-address">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jathin-dhulipalla/">
                                    <LinkedInIcon />
                                    <Typography>/jathin-dhulipalla</Typography>
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Typography className="contact-method">Instagram:</Typography>
                            <div className="contact-address">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jathin.jd/">
                                    <InstagramIcon />
                                    <Typography>/jathin.jd</Typography>
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Typography className="contact-method">Facebook:</Typography>
                            <div className="contact-address">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jathin.dhulipalla/">
                                    <FacebookIcon />
                                    <Typography>/jathin.dhulipalla</Typography>
                                </a>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Contact;