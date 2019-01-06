class KHMessage extends React.Component {
  render() {
    return <div> Kingdom Hearts {this.props.name}</div>;
  }
}

ReactDOM.render(<KHMessage name="3" />, document.getElementById('hello-example'));
