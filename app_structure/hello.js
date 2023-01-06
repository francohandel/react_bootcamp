class Hello extends React.Component {
  render() {
    const props = this.props
    const bangs = "!".repeat(this.props.bangs)
    return(
      <div>
        <h1>HELLO {props.to} from {props.from}{bangs}</h1>
      </div>
    )
  }
}