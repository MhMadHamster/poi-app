import React from 'react';
import { withRouter } from 'react-router-dom';

const Station = ({ match, history }) => (
  <div>{match.params.stationId}
    <button 
      onClick={() => fetch(`/api/stations/${match.params.stationId}`, 
      { method: 'DELETE'})
      .then(() => {
        history.push('/');
      })}
    >
      Remove
    </button>
  </div>
)

export default withRouter(Station);