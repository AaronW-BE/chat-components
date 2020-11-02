import React from "react";
import PropTypes from 'prop-types';
import './bubble.css';
import {ThemeContext, themes} from "../context/theme-context";

export const BUBBLE_TYPES = {
    PLAIN: 0,
    PICTURE: 1,
    VOICE: 2,
    VIDEO: 3,
    COUPON: 9
}

class Bubble extends React.Component{
    render() {
        return (
            <div className={`bubble default ${this.context === themes.dark && this.props.direction !== 'right' ? 'dark' : 'light'} ${this.props.direction} ${this.props.isPrimary ? 'bubble_primary': ''}`}>
                <div className="bubble_cont">
                    <div className="plain"><pre>{this.props.text}</pre></div>
                </div>
            </div>
        )
    }
}

Bubble.contextType = ThemeContext;

Bubble.propTypes = {
    direction: PropTypes.string,
    isPrimary: PropTypes.bool,
    text: PropTypes.string
}

Bubble.defaultProps = {
    text: ''
};

export default Bubble;