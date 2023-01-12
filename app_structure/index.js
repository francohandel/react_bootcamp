class App extends React.Component {
  render() {
    return(
      <div>
        <Hello
          to="WORLD"
          from="FRANCIS"
          bangs= {14}
          />
          <Hello
          to="WORLD"
          />
        <Guess/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))