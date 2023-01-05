class Hello extends React.Component {
  render() {
    const props = this.props
    return(
      <div>
        <h1>HELLO {props.to} from {props.from}</h1>
      </div>
    )
  }
}