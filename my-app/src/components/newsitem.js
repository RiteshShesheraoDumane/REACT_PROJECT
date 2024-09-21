import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsurl, author, date, source } = this.props;

    return (
      <div className="position-relative">
        {/* Badge for Source as a notification */}
        <span 
          className="badge-custom"
          style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            zIndex: 1,
            padding: '8px 12px',
            fontSize: '0.9rem',
          }}
        >
          {source || 'Unknown'}
        </span>

        <div className="card" style={{ width: '18rem' }}>
          <img src={imageUrl} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title || 'No Title'}</h5>
            <p className="card-text">{description || 'No Description'}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : 'Unknown'} on {date ? new Date(date).toGMTString() : 'Unknown Date'}
              </small>
            </p>
            <a 
              href={newsurl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-dark btn-sm my-3"
            >
              Show more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
