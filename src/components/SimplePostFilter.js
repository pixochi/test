import React, { Component, PropTypes } from 'react';
import { countries } from '../constants/countries';

class SimplePostFilter extends Component {
  render() {
    return (
      <div>
        <select>
            {countries.map((country,index) => 
                <option key={index} value={country}>{country}</option>
            )}
        </select>
        <select>
            {countries.map((country,index) => 
                <option key={index} value={country}>{country}</option>
            )}
        </select>
        <select>
            <option value="work">Work</option>
            <option value="accommodation">Accommodation</option>
            <option value="trade">Trade</option>
            <option value="events">Events</option>
            <option value="transport">Transport</option>
            <option value="groups">Groups</option>
            <option value="qa">Q & A</option>
        </select>
        <button>Find it!</button>
      </div>
    )
  }
}

export default SimplePostFilter;