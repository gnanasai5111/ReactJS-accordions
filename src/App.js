import React, { useState } from 'react';
import questions from './data';
import Question from "./Question.js"

function App() {
  return (
    <main>
    <div className="container">
      <h3>Questions and Answers about Login</h3>
    
    <section className="info">
    {
        questions.map((question)=>{
           return <Question key={question.id} title={question.title} info={question.info} />
        })
      }

    </section>
    </div>
      
    </main>
  );
}

export default App;
