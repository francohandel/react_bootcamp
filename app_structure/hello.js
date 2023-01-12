class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    bangs: 6
  }
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