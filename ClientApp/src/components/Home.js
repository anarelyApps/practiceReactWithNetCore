import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome to Trips Manager</h1>
        <p>Use this to manage your trips by</p>
        <ul>
          <li>Add a Trip</li>
          <li>Update a Trip</li>
          <li>Delete a Trip</li>
          <li>Show all trips</li>
        </ul>
      </div>
    );
  }
}
