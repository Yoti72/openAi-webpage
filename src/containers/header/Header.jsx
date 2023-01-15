import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding id" id="home">
       <div className="gpt3__header-content">
        <h1 className="gradient__text">Open AI Could Greatly Impact the World</h1>
        <p>The new advancements in Open AI will change the world and tech field we know. The rising interest in the artificial intelligence company OpenAI, whose chatbot ChatGPT has dazzled amateurs and industry experts with its ability to spit out haikus, debug code and answer questions while imitating human speech, might also have led to Microsoft investing $10 billion in the company as part of the funding that will value the firm at $29 billion</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email address'></input>
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>

        
       </div>
       <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
       </div> 
    </div>
  )
}

export default Header