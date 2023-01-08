class App extends React.Component {
  render() {
    return(
      <div>
        <h1>SLOT MACHINE!!!</h1>
        <Machine
          x="x"
          y="y"
          z= "z"
          />
          <Machine
          x="x"
          y="x"
          z= "z"
          />
          <Machine
          x="x"
          y="x"
          z= "x"
          />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))