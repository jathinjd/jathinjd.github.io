import React from 'react';
import './Contact.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import validator from 'validator';
import emailjs from 'emailjs-com';
import { contactTemplate } from '../../util/data';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            fullName:"",
            email:"",
            phone:"",
            message:"",
            validName: true,
            validEmail: true,
            validPhone: true,
            validMessage: true,
            filledName: false,
            filledEmail: false,
            filledPhone: false,
            filledMessage: false
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChangeName(eve) {
        const curstr = String(eve.target.value)
        if(validator.matches(curstr,/^[A-Za-z ]+$/i) && (curstr.length >= 2 && curstr.length <= 35)){
            this.setState({validName: true, filledName: true, fullName: eve.target.value});
        } else {
            this.setState({validName: false, filledName: false, fullName: ""});
        }
        if(curstr === null || curstr === "") {
            this.setState({validName: true, filledName: false, fullName: ""});
        }
    }

    handleChangeEmail(eve) {
        const curstr = String(eve.target.value)
        if(validator.isEmail(curstr)){
            this.setState({validEmail: true, filledEmail: true, email: eve.target.value});
        } else {
            this.setState({validEmail: false, filledEmail: false, email: ""});
        }
        if(curstr === null || curstr === "") {
            this.setState({validEmail: true, filledEmail: false, email: ""});
        }
    }

    handleChangePhone(eve) {
        const curstr = String(eve.target.value)
        if(validator.isMobilePhone(curstr)){
            this.setState({validPhone: true, filledPhone: true, phone: eve.target.value});
        } else {
            this.setState({validPhone: false, filledPhone: false, phone: ""});
        }
        if(curstr === null || curstr === "") {
            this.setState({validPhone: true, filledPhone: false, phone: ""});
        }
    }

    handleChangeMessage(eve) {
        const curstr = String(eve.target.value)
        if(curstr.length > 10 && curstr.length <= 500){
            this.setState({validMessage: true, filledMessage: true, message: eve.target.value});
        } else {
            this.setState({validMessage: false, filledMessage: false, message: ""});
        }
        if(curstr === null || curstr === "") {
            this.setState({validMessage: true, filledMessage: false, message: ""});
        }
    }

    handleFormSubmit(eve) {
        if(this.state.validName && this.state.validEmail && this.state.validMessage) {
            const emailjsTemplParamAlert = {
                my_email: contactTemplate.alertEmail.my_email,
                senders_name: this.state.fullName,
                senders_email: this.state.email,
                senders_message: this.state.message,
                alert_subject: contactTemplate.alertEmail.alert_subject,
                senders_phone: this.state.phone
            }
            emailjs.send(contactTemplate.alertEmail.emailjs_serviceID, contactTemplate.alertEmail.emailjs_templateID, emailjsTemplParamAlert, contactTemplate.emailjs_userID)
                .then(((response) => {
                    console.log("Alert email sent");
                }, (error) => {
                    console.log("Failed");
            }));
            
            const emailjsTemplParamResponse = {
                my_name: contactTemplate.autoResponseEmail.my_name,
                senders_name: this.state.fullName,
                senders_email: this.state.email,
                my_email: contactTemplate.autoResponseEmail.my_email,
                auto_reply_subject: contactTemplate.autoResponseEmail.auto_reply_subject
            }
            emailjs.send(contactTemplate.autoResponseEmail.emailjs_serviceID, contactTemplate.autoResponseEmail.emailjs_templateID, emailjsTemplParamResponse, contactTemplate.emailjs_userID)
                .then(((response) => {
                    console.log("Reponse email sent");
                }, (error) => {
                    console.log("Response email Failed");
            }));
        }
        else{
            console.log("oops");
        }
    }

    render() {

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        const ColorButton = withStyles((theme) => ({
            root: {
                color: theme.palette.getContrastText(grey[900]),
                backgroundColor: grey[900],
                '&:hover': {
                    backgroundColor: grey[800],
                },
            },
        }))(Button);

        return(
            <div className="section" id="contact" style={useStyles.sectionClass}>
                <Paper className="contact-container">
                    <div className="contact-head">
                        <Typography className="conatct-title" variant="h4">Contact Me</Typography>
                        <Typography>Would love to hear about opportunites, collaborations, ideas and feedback. Find me here...</Typography>
                    </div>
                    <div className="contact-body">
                        <div className="contact-form">
                            <TextField
                                className="form-contact-inp"
                                label="Full Name *"
                                placeholder="Full Name"
                                variant="outlined"
                                onChange={this.handleChangeName}
                                error={!this.state.validName}                   
                            />
                            <TextField
                                className="form-contact-inp"
                                label="Email *"
                                placeholder="email"
                                variant="outlined"
                                onChange={this.handleChangeEmail}
                                error={!this.state.validEmail}
                            />
                            <TextField
                                className="form-contact-inp"
                                label="Phone"
                                placeholder="000-000-0000"
                                variant="outlined"
                                onChange={this.handleChangePhone}
                                error={!this.state.validPhone}
                            />
                            <TextField
                                className="form-message-inp"
                                label="Message *"
                                placeholder="Type your message here..."
                                multiline
                                variant="outlined"
                                onChange={this.handleChangeMessage}
                                error={!this.state.validMessage}
                            />
                            <ColorButton 
                                className="form-button"
                                variant="contained"
                                onClick={this.handleFormSubmit}>
                                <Typography className="button-text">Send</Typography>
                            </ColorButton>
                        </div>
                        <div className="contact-content">
                            <div className="contact-item">
                                <Typography className="contact-method">Email:</Typography>
                                <div className="contact-address">
                                    <a href="mailto:jathin.dhulipalla@gmail.com">
                                        <EmailIcon />
                                        <Typography>jathin.dhulipalla@gmail.com</Typography>
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <Typography className="contact-method">LinkedIn:</Typography>
                                <div className="contact-address">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jathind/">
                                        <LinkedInIcon />
                                        <Typography>/jathind</Typography>
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
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Contact;