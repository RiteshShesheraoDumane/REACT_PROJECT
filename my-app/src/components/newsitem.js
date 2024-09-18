import React, { Component } from 'react';

export default class NewsItem extends Component {
   
  render() {
    let {title,description,imageUrl,newsurl}= this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <a href={newsurl} target="_blank" className="btn btn-primary btn-sm my-3">show more </a>
          </div>
        </div>
      </div>
    );
  }
}
