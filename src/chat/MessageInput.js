import React, { useState } from 'react';

const MessageInput = () => {
    const [text, setText] = useState('');
    const [username, setUsername] = useState('');
    return (
        <div className='messageInputBox whiteBackgroundColor'>
            <div className='inline'>
                <div className='inline smallRightPadding smallCase'>username</div>
                <input value={username} onChange={event => setUsername(event.target.value)} />
            </div>
            <div className='inline smallLeftPadding'>
            <div className='inline smallRightPadding smallCase'>message</div>
                <input value={text} onChange={(event) => setText(event.target.value)} />
            </div>
            <input className='inline button primaryBackgroundColor whiteText' type='submit' label='Send' onClick={() => {
                fetch('http://localhost:5000/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: text,
                        username: username,
                        date: Date.now()
                    })
                }).then(res=>{
                    if(res.status === 200)
                        setText('');
                });
            }} />
        </div>
    );
}
export default MessageInput;