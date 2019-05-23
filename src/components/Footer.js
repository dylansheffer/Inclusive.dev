import React, { Component } from 'react';

import { Navigation } from './Navigation';

export default class Footer extends Component {
  render() {
    const date = new Date();
    return (
      <footer id="footer">
        <Navigation />
        <p>&copy; {date.getFullYear()} Dylan Sheffer. All Rights Reserved.</p>
      </footer>
    )
  }
}
