class App extends React.Component {
  render() {
    return(
      <div>
        <Hello/>
        <Guess/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))