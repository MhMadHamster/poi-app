import React from 'react';
import Stations from './Stations';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStations();
  }

  render() {
    const { stations } = this.props.store;
    return <div>
      <Stations stations={stations} />
    </div>
  }
}

export default App;
