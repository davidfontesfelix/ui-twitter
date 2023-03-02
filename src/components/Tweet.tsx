import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.scss'
import { Link } from 'react-router-dom'

interface TweetProps{
  content: string
}

export default function Tweet(props: TweetProps) {
  return(
    <Link to='/status' className="tweet">
      <img src="https://avatars.githubusercontent.com/u/101073933?v=4" alt="David Fontes" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>David Fontes</strong>
          <span>@haxizi</span>
        </div>

        <p>
          {props.content}
        </p>
        <div className="tweet-content-footer">
          <button type='button' className='chat'>
            <ChatCircle/>
            20
          </button>
          <button type='button' className='repost'>
            <ArrowClockwise/>
            20
          </button>

          <button type='button' className='like'>
            <Heart/>
            20
          </button>
        </div>
      </div>
    </Link>
  )

}