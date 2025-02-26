import React, { Component } from "react";
import NewsItem from "./newsitem";
import Spinner from "./spinner";

import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "us", // Default to United States
    pageSize: 10,
    category: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      error: null, // State for error handling
    };
  }

  // Fetch news when the component mounts
  async componentDidMount() {
    this.fetchNews();
  }

  // Re-fetch news when the country or category changes
  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country || prevProps.category !== this.props.category) {
      this.setState({ page: 1, articles: [] }, () => {
        this.fetchNews();
      });
    }
  }

  // Fetch news function
  fetchNews = async () => {
    const { page, pageSize } = this.state;
    const { category, country } = this.props; // Get country from props

    this.setState({ loading: true, error: null }); // Reset loading state
    this.props.setProgress(10);

    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      console.log("API Key:", API_KEY);
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(50);

      let parsedData = await data.json();
      this.props.setProgress(80);

      if (parsedData.status !== "ok") {
        throw new Error(parsedData.message);
      }

      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults,
        loading: false,
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false, error: "Failed to load news. Please try again." });
      this.props.setProgress(100);
    }
  };

  // Fetch more news when scrolling
  fetchMoreData = async () => {
    const { page, pageSize } = this.state;
    const { category, country } = this.props; // Get country from props

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=95564f4da2254849a7c07a66445ae3e6&page=${page + 1}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles || []),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  };

  render() {
    const { error, loading } = this.state; // Destructure error and loading

    return (
      <div className="container my-3">
        <h2 className="text-center">
          Novanews - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines
        </h2>

        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}

        {/* Infinite Scroll */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {!loading &&
                this.state.articles.map((element) => (
                  <div className="col-md-4 mb-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 46) + "..." : "No Title"}
                      description={element.description ? element.description.slice(0, 88) + "..." : "No Description"}
                      imageUrl={element.urlToImage || "default-image-url.jpg"}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
