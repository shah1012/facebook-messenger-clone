import {
  Button,
  FormControl,
  InputLabel,
  Input,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  // All of my useStates
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); //array for all the messages
  const [userName, setUsername] = useState("");

  //useState = variable in react
  //useEffect = run code on a condition

  useEffect(() => {
    //runs when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");

    //all the logic to send the message goes here
    // setMessages([...messages, { username: userName, text: input }]); //--> keeps all the previous messages and appends the new message to the end
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
        alt="Facebook Messenger Logo"
      />
      <h1>Hello There</h1>
      <h2>Welcome {userName}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
        a
      </form>
      {/* messages themselves */}

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
