class Machine extends React.Component {
  render() {
    const props = this.props
    let msg = ""
    let status = false
    if (props.x == props.y && props.y == props.z && props.x == props.z) {
      status = true
      msg = "congrats yor are a lucky winner"
    } else {
      msg = "sorry please try again!!!!"
    }
    return(
      <div className="Machine">
        <h1 style= {{backgroundColor: 'purple', fontSize:'20px'}}>{props.x}-{props.y}-{props.z}</h1>
        <p className={ status ? 'Machine-winner' : 'Machine-loser' }> {msg}</p>
      </div>
    )
  }
}