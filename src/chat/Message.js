import React from 'react';

const Message = ({ message: { message, date, username } }) => {
    const dateX = new Date(date);
    return (
        <div key={message} className='messageBoxPadding smallBottomGreyBorder'>
            <div className='inline smallCase'><b>{username}</b></div>
            <div className='inline tinyCase'>{dateX.toLocaleDateString('en-US', { timeStyle: 'short', dateStyle: 'short' })}</div>
            <div>{message}</div>
        </div>
    );
}
export default Message;