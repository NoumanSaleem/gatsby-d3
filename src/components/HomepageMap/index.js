import React from 'react';
import './styles.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  componentDidMount() {
    const Datamap = require('datamaps');
    new Datamap({
      element: this.mapRef.current,
      scope: 'usa'
    });
  }
  render() {
    return <div className="homepage-map" ref={this.mapRef} />;
  }
}


