import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stations } = this.props;
    return (
      <ul>
        {stations.map((station) =>
          <div key={station._id}>
            <Link to={`/station/${station._id}`}>
              <li>{station.title}</li>
            </Link>
          </div>
        )}
      </ul>
    )
  }
}

export default Stations;