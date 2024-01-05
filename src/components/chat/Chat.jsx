import Chatting from "../chatting/Chatting";
import Top from "../top/Top";
import "./Chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <Top />
      </div>
    <div className="chatting">
      <Chatting />
    </div>
     <div className="inputed">
      <input type="text"></input>
      <button>Send</button>
     </div>

    </div>
  )
}

export default Chat
