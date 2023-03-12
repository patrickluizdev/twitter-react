export function Tweet(props){
  return(
    <div> 
      <strong>
      {props.user}
      </strong>
      <a>  {props.content}  </a>
      <button>Like</button>
    </div>
  )
}