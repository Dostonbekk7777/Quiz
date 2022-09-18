import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'What is ReactJS ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'What is component ?',
    variants: ['app', 'part of an application or webpage', 'there is no correct answer'],
    correct: 1,
  },
  {
    title: 'What is JSX ?',
    variants: [
      'This is simple HTML',
      'This is function',
      'This is the same HTML, but with the ability to execute JS code',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You have found {correct} out of {questions.length} questions</h2>
      <a href='/'>
      <button>Try Again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) *100);
  console.log("This app build by Doston Orziev")
  return (
    <>
      <div className="progress">
        <div style={{ width: percentage+"%"}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={()=> onClickVariant(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0); 
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant= (index)=>{
    setStep(step+1);

    if(index === question.correct){
      setCorrect(correct+1)
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question = {question} onClickVariant={onClickVariant} />) :  (<Result correct={correct} />)
      }
     
    </div>
  );
}

export default App;
