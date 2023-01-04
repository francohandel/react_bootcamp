class Guess extends React.Component {
  render() {
    const randNum = Math.floor(Math.random() * 10) + 1
    let msg = <h1>Welcome to Number guessing game</h1>
    return(
      <div>
        {msg}
        <p>number guessed is {randNum}</p>
        <p>{randNum === 7 && <span>congrats!! number guessed correctly</span>}</p>
      </div>
    )
  }
}