class Machine extends React.Component {
  render() {
    const props = this.props
    let msg = ""
    if (props.x == props.y && props.y == props.z && props.x == props.z) {
      msg = <p>congrats yor are a lucky winner</p>
    } else {
      msg = <p>sorry please try again!!!!</p>
    }
    return(
      <div>
        <h1>{props.x}-{props.y}-{props.z}</h1>
        {msg}
      </div>
    )
  }
}