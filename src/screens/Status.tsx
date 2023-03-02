import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import Tweet from '../components/Tweet'
import './Status.scss'

import { FormEvent, KeyboardEvent, useState } from "react";
import { PaperPlaneRight } from 'phosphor-react';


export default function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])
  function createNewAnswer(event: FormEvent) {
    
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return(
    <main className="Status">
        <Header title="Tweet"/>

        
          <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos nemo alias praesentium dicta natus distinctio vitae eaque, expedita nesciunt, odio, iste itaque minima amet. Totam quos excepturi nostrum a?'/>

            <Separator/>

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://avatars.githubusercontent.com/u/101073933?v=4" alt="David Fontes Felix"/>
                <textarea 
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }} 
                id="tweet" 
                placeholder="Tweet your answer"/>
              </label>
              <button type='submit'>
                <PaperPlaneRight/>
                <span>Answer</span>  
              </button>
            </form>
            

            {answers.map(answers => {
              return <Tweet key={answers} content={answers}/>
            })}
    </main>
  )
}