import { useState } from "react";

const ChatFooter = ({ socket, playerName }) => {    
    const [message, setMessage] = useState('');
    
    const handleSendMessage = (e) => {
        e.preventDefault();     
        socket.emit("message", {
            text: message,
            name: playerName,
            id: `${ socket.id }${ Math.random() }`,
            socketID: socket.id,
        });
        setMessage('');
    };
    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
            <input
                type="text"
                placeholder="Write message"
                className="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="sendBtn">SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;