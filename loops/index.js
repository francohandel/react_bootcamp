class App extends React.Component {
  render() {
    return(
      <div>
        <h1>LOOPS</h1>
        <Friend
          name="Francis"
          hobbies = {['piano', 'chess', 'football', 'singing']}
          />
          <Friend
          name="Chinwe"
          hobbies = {['piano', 'chess', 'violin', 'reading', 'cooking', 'singing']}
          />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))