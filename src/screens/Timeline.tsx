import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import Tweet from "../components/Tweet"

import './Timeline.scss'


export function TimeLine(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Teste',
  ])
  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  return(
    <main className="timeline">
            <Header title="Home"/>

            <form onSubmit={createNewTweet} className="new-tweet-form">
              <label htmlFor="tweet">
                <img src="https://avatars.githubusercontent.com/u/101073933?v=4" alt="David Fontes Felix"/>
                <textarea onChange={(event) => {
                  setNewTweet(event.target.value)
                }} onKeyDown={handleHotKeySubmit} value={newTweet} id="tweet" placeholder="Whats's happening?"/>
              </label>
              <button type='submit'>Tweet</button>
            </form>
            
            <Separator/>

            {tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet}/>
            })}
          </main>
  )
}