import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './SecondsCounter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <SecondsCounter seconds={this.state.seconds} />
      </div>
    );
  }
}

export default Home;
