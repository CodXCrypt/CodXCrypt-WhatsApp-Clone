import React, { useState, useEffect } from "react";
import "./Chat.css";
import MoreVert from "@material-ui/icons/MoreVert";
import AttachFlie from "@material-ui/icons/AttachFile";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar, IconButton } from "@material-ui/core";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>>", input);

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={"https://avatars.dicebear.com/api/human/${seed}.svg"} />
        <div className="chat__headerInfo">
          <h3>Room Nmaae</h3>
          <p>Last Seen...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFlie />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={'chat__message ${true && "chat__reciever"}'}>
          <span className="chat__name">Divyanshu</span>
          Hey Guys
          <span className="chat__timestamp">3:43pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              return setInput(e.target.Value);
            }}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
