import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    // const { children } = this.props;  for children
    const { render } = this.props; // for props
    const { count } = this.state;
    // return children(count, this.incrementCount);   for children
    return render(count, this.incrementCount); //  for props
  }
}

export default Counter;
