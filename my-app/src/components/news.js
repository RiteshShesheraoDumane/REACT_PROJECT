import React, { Component } from 'react';
import NewsItem from './newsitem';  // Ensure correct capitalization

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Novanews Top Headlines</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <NewsItem title="mytitle" description="this is my desc"/>
          </div>
          <div className="col-md-4 mb-4">
            <NewsItem title="mytitle" description="this is my desc"/>
          </div>
          <div className="col-md-4 mb-4">
            <NewsItem title="mytitle" description="this is my desc"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <NewsItem title="mytitle" description="this is my desc"/>
          </div>
          <div className="col-md-4 mb-4">
            <NewsItem title="mytitle" description="this is my desc"/>
          </div>
          <div className="col-md-4 mb-4">
            <NewsItem title="mytitle" description="this is my desc"/>
          </div>
        </div>
      </div>
    );
  }
}
