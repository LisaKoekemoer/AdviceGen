import './App.css';
import desktop from './images/pattern-divider-desktop.svg';
import mobile from './images/pattern-divider-mobile.svg';
import dice from './images/icon-dice.svg';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState([])

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])



  return (
    <div className="app">
      <div className='container'>
        <h3>Advice #{text.id}</h3>
        <p>{text.advice}</p>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>   
        <button onClick={fetchAdvice}>
          <img src={dice} alt="" />
        </button> 
      </div>
    </div>
  );
}

export default App;
