import { useRouter } from "next/router";

const ChatBody = ({ messages, socket, lastMessageRef }) => {  
  const router = useRouter();

  const handleLeaveChat = () => {
    window.location.href = '/'; // navigate to the root page and trigger reload
  };
  
  return (
  <>
    <header className="chat__mainHeader">
      <p>Welcome to Legacy Legend</p>
      <button className="leaveChat__btn" onClick={ handleLeaveChat }>
        LEAVE CHAT
      </button>
    </header>

    <div className="message__container">
      {
        messages.map((message) =>
          (message.socketID === socket.id) ? (
            <div className="message__chats" key={ message.id }>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={ message.id }>
              <p>{ message.name }</p>
              <div className="message__recipient">
                <p>{ message.text }</p>
              </div>
            </div>
          )
        ) 
      }
      <div ref={ lastMessageRef } />
    </div>
  </>
  );
};

export default ChatBody;