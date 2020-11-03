import React from "react";
import PropTypes from 'prop-types';
import './inputPanel.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faGrin} from '@fortawesome/free-regular-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

class InputPanel extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            pressedKeys: [],
        }
    }

    onInputKeyDown = (e) => {
        let existKeys = [...this.state.pressedKeys];
        if (existKeys.indexOf(e.key) !== -1) {
            return;
        }
        existKeys.push(e.key);
        this.setState({
            pressedKeys: existKeys
        },  () => {
            if (this.keyPressed('Shift') && this.keyPressed('Enter')) {
                console.log('pressed shift and enter')
                this.setState({
                    inputText: this.state.inputText + "\n"
                })
                console.log(this.state.inputText + '\n')
                return;
            }
            if (this.keyPressed('Enter')) {
                console.log('submit input text')
                if (this.props.onsubmit) {
                    this.props.onsubmit({
                        text: this.state.inputText,
                        time: Date.now()
                    })
                }
                this.setState({
                    inputText: ''
                });
            }
        });
    }
    onKeyUp = e => {
        const pressedKeys = [...this.state.pressedKeys];
        let keyPos = pressedKeys.indexOf(e.key);
        if (keyPos !== -1) {
            // 删除key
            pressedKeys.splice(keyPos, 1);
            this.setState({
                pressedKeys: [...pressedKeys]
            })
        }
    };

    onInputEvent = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    keyPressed(key) {
        return this.state.pressedKeys.indexOf(key) !== -1
    }

    render() {
        return (
            <>
                {/*<div>*/}
                {/*    {this.state.pressedKeys.join('-')}*/}
                {/*</div>*/}
                <div className="input-panel">
                    <FontAwesomeIcon icon={faMicrophone} className="emotion-icon-btn" />
                    <input value={this.state.inputText} type="text" className="input-box"
                           onKeyUp={this.onKeyUp}
                           onKeyDownCapture={this.onInputKeyDown} onInput={this.onInputEvent} />
                    <FontAwesomeIcon icon={faGrin} className="emotion-icon-btn" />
                </div>
            </>
        )
    }
}

InputPanel.propTypes = {
    onsubmit: PropTypes.func
}

export default InputPanel;