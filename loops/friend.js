class Friend extends React.Component {
  render() {
    const {name, hobbies} = this.props
    return(
      <div>
        <h3>{name}</h3>
        <ul>{hobbies.map(h => <li>{h}</li> )}</ul>
      </div>
    )
  }
}