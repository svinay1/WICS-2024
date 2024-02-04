// import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [reply, setReply] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setUserInput(e.target.value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post(`http://127.0.0.1:5000/get_response`, {}, { params: {
                input: userInput
            }})
            .then(response => setReply([...reply, response.data.response]))
            .catch(err => console.warn(err));
            } catch (error) {
            console.error('Error fetching response:', error);
        }
        setFormSubmitted(true);
    };
    
    return (
            <div className="chatbot-container">
              <div className="chatbot-messages">
                {reply.map((response, index) => (
                  <div key={index} className="chatbot-message chatbot-response">
                    {response}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="chatbot-input-form">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleChange}
                  placeholder="Type a message..."
                  className="chatbot-input"
                />
                <button type="submit" className="chatbot-send-button">
                  Send
                </button>
              </form>
            </div>
          );
        };

export default Chatbot;

