class App extends React.Component {
  render() {
    return(
      <div>
        <Hello to="WORLD" from="FRANCIS"/>
        <Guess/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))