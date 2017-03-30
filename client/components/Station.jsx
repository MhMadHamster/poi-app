import React from 'react';

const Station = props => (
  <div>{props.match.params.stationId}</div>
)

export default Station;