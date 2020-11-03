import Bubble, {BUBBLE_TYPES} from "../bubble";
import React from "react";

import './message.css';
import avatar from './aa.jpg'

export const themeTypes = {
    text: 'text',
    image: 'image',
    revoke: 'revoke',
    voice: 'voice',
    video: 'video',
    card: 'card',
    location: 'location',
    emotion: 'emotion',
    file: 'file',
    link: 'link',
    weapp: 'weapp',
    chatrecord: 'chatrecord',
    todo: 'todo',
    vote: 'vote',
    collect: 'collect',
    redpacket: 'redpacket',
    meeting: 'meeting',
    docmsg: 'docmsg',
    markdown: 'markdown',
    news: 'news',
    calendar: 'calendar',
    mixed: 'mixed',
    meeting_voice_call: 'meeting_voice_call',
    voip_doc_share: 'voip_doc_share',
    external_redpacket: 'external_redpacket',
};

function Message(props) {
    const {self, text} = props;
    return (
        <div className={`message ${self ? 'me' : ''}`}>
            <div className="message_system">
                <div className="content">15:34</div>
            </div>
            <Bubble direction={ self ? 'right' : 'left' }
                    type={BUBBLE_TYPES.PLAIN}
                    text={text}
                    isPrimary={self} />
            <img className="avatar" src={avatar} alt=""/>
        </div>
    );
}

export default Message;