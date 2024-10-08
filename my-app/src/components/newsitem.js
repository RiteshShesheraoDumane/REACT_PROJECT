import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsurl, author, date, source } = this.props;

    const badgeStyle = {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#ff5a5f', // Bright red color for the badge
      color: 'white',
      padding: '5px 10px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold',
      zIndex: 1,
    };

    const cardStyle = {
      width: '100%', // Full width for responsiveness
      maxWidth: '18rem', // Ensures it doesn't exceed a certain width
      margin: 'auto', // Center the card horizontally
      position: 'relative',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a modern look
      borderRadius: '8px', // Slight rounding for the card corners
    };

    const imgStyle = {
      borderRadius: '8px 8px 0 0', // Top corners rounded to match the card
      height: '180px', // Fixed height for the image
      objectFit: 'cover', // Ensures the image fills the space without distortion
    };

    const cardBodyStyle = {
      padding: '15px',
      textAlign: 'left',
    };

    const titleStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    };

    const descriptionStyle = {
      fontSize: '14px',
      color: '#555',
      marginBottom: '10px',
    };

    const dateStyle = {
      fontSize: '12px',
      color: '#777',
    };

    const buttonStyle = {
      backgroundColor: '#333',
      color: 'white',
      fontSize: '14px',
      padding: '8px 12px',
      borderRadius: '5px',
      textDecoration: 'none',
    };

    return (
      <div className="position-relative" style={{ marginBottom: '20px' }}>
        {/* Badge for Source */}
        <span className="badge-custom" style={badgeStyle}>
          {source || 'Unknown'}
        </span>

        <div className="card" style={cardStyle}>
          <img 
            src={imageUrl} 
            className="card-img-top" 
            alt="News" 
            style={imgStyle} 
          />
          <div className="card-body" style={cardBodyStyle}>
            <h5 className="card-title" style={titleStyle}>{title || 'No Title'}</h5>
            <p className="card-text" style={descriptionStyle}>{description || 'No Description'}</p>
            <p className="card-text">
              <small className="text-muted" style={dateStyle}>
                By {author ? author : 'Unknown'} on {date ? new Date(date).toGMTString() : 'Unknown Date'}
              </small>
            </p>
            <a 
              href={newsurl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={buttonStyle}
            >
              Show more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
