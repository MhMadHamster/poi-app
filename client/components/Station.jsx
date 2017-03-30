import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

class Station extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stationId: this.props.match.params.stationId,
    }
  }

  handleRemoveStation = () => {
    const { history } = this.props;

    fetch(`/api/stations/${this.state.stationId}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveStation}>Remove</button>
      </div>
    )
  }
}

export default withRouter(Station);