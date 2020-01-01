import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import socketIo from 'socket.io-client';
import Message from './Message';
import MessageInput from './MessageInput';

const io = socketIo('http://localhost:5000/');

const Chat = () => {
    const [messagesFromServer, loadingMessages] = useFetch('http://localhost:5000/messages');
    const [messages, setMessages] = useState([]);
    const [loadedMessages, setLoadedMessages] = useState(false);
    if(!loadedMessages && !loadingMessages) {
        setMessages(messagesFromServer);
        setLoadedMessages(true);
    }
    useEffect(()=>{
        io.on('newMessage', (arg)=>{
            const updatedMessages = [...messages];
            updatedMessages.push(arg);
            setMessages(updatedMessages);
        })
    })
    return (
        <div className='chatBoxBorder darkText whiteBackgroundColor'>
            {!loadingMessages && <div>{
                    messages.map(item => <Message message={item}/>)
                }</div>}
            <MessageInput/>
        </div>
    );
}
export default Chat;