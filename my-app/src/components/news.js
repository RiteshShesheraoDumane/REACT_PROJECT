import React, { Component } from "react";
import NewsItem from "./newsitem"; // Ensure correct capitalization
import Spinner from "./spinner"; // Ensure correct import for Spinner component

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagsize: 10,
  };

  constructor(props) {
    super(props);
    console.log("I am the constructor");
    
    // State initialization
    this.state = {
      articles: [], // Holds the fetched articles from the API
      loading: false, // Tracks whether data is being fetched
      page: 1, // Current page of news articles
      pageSize: 12, // Number of articles per page (this could be passed as a prop for flexibility)
      totalResults: 0, // Total number of articles returned by the API
    };
  }
  
   
  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { page, pageSize } = this.state;

    // Set loading to true before fetching data
    this.setState({ loading: true });

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95564f4da2254849a7c07a66445ae3e6&page=${page}&pageSize=${pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        articles: parsedData.articles || [], // Ensure articles is always an array
        totalResults: parsedData.totalResults,
        loading: false, // Set loading to false after data is fetched
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false }); // Ensure loading is false even if fetch fails
    }
  };

  handlenextclick = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
      this.setState({ page: this.state.page + 1 }, this.fetchNews); // Call fetchNews after state update
    }
  };

  handleprevclick = async () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, this.fetchNews); // Call fetchNews after state update
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Novanews Top Headlines</h2>

        {/* Display Spinner when loading is true */}
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.length > 0 &&
            this.state.articles.map((element) => (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.slice(0, 46) + "..."
                      : "No Title"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88) + "..."
                      : "No Description"
                  }
                  imageUrl={element.urlToImage || "default-image-url.jpg"}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  // Pass the source here
                  source={element.source.name}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between align-items-center">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handleprevclick}
          >
            &larr; Prev
          </button>

          <span
            className="page-number"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Page {this.state.page}
          </span>

          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
