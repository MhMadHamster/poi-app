import React, { Component } from 'react';

class Stations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stations } = this.props;
    return (
      <ul>
        {stations.map((station) =>
          <li key={station._id}>{station.title}</li>
        )}
      </ul>
    )
  }
}

export default Stations;