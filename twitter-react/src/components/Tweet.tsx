interface TweetProps{
  user: string
  children: string
  likes?: number
}
const tweetStyles = {
  borderRadius: 10 
}

export function Tweet(props: TweetProps){
  return(
    <div className="tweet" style={tweetStyles}> 
      <p> 
        <p>
            <strong>
              {props.user}
            </strong>    
        </p>
        <p>
          {props.children}   
        </p> 
        <button>Like {props.likes ?? 0}</button>
      </p>
    </div>
  )
}