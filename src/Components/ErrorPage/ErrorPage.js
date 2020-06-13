import React from 'react';
import './ErrorPage.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Box from '@material-ui/core/Box';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luckyGifNumber: 5
        };
        this.handleGifChange = this.handleGifChange.bind(this);
    }

    handleGifChange() {
        const randGif = Math.floor(Math.random() * 10) + 1;
        this.setState({luckyGifNumber: randGif});
    }

    render() {

        const useStyles = {
            sectionClass: {
                paddingTop: this.props.navbarHeight
            }
        }

        const luckyGifNumber = this.state.luckyGifNumber;

        return(
            <div className="section" id="errorpage" style={useStyles.sectionClass}>
                <h1>Oops...</h1>
                <Typography variant = "h6">
                    Looks like you hit the self-destruct button.
                    Jk...
                </Typography>
                <div className="error-options">
                    <Box m={2} className="error-option">
                        <Button variant="contained" className="error-option">
                            <NavLink className="error-button" to={'/me/#aboutme'} smooth>
                                Go Home
                            </NavLink>
                        </Button>
                    </Box>
                    <Box m={2} className="error-option">
                        <Button m={2} variant="contained" className="error-option" onClick={this.handleGifChange}>
                            I like it here
                        </Button>
                    </Box>
                </div>
                <div className="error-gif">
                    <img
                        src={require("../../images/errorpagegifs/" + luckyGifNumber + ".gif")}
                        alt="Nothing to see here!"
                    />
                </div>
            </div>
        )
    }
}

export default ErrorPage;