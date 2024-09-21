import React, { Component } from "react";
import NewsItem from "./newsitem"; // Ensure correct capitalization
import Spinner from "./spinner"; // Ensure correct import for Spinner component
import InfiniteScroll from "react-infinite-scroll-component"; // Assuming you're using InfiniteScroll

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
  };

  constructor(props) {
    super(props);

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

    // Set loading to true before fetching data and update loading progress
    this.setState({ loading: true });
    this.props.setProgress(10); // Initial progress

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=95564f4da2254849a7c07a66445ae3e6&page=${page}&pageSize=${pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(50); // Progress after fetching the data

      let parsedData = await data.json();
      this.props.setProgress(80); // Progress after parsing the data

      this.setState({
        articles: parsedData.articles || [], // Ensure articles is always an array
        totalResults: parsedData.totalResults,
        loading: false, // Set loading to false after data is fetched
      });

      this.props.setProgress(100); // Progress complete
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
      this.props.setProgress(100); // Ensure progress completes even in case of failure
    }
  };

  fetchMoreData = async () => {
    const { page, pageSize } = this.state;

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=95564f4da2254849a7c07a66445ae3e6&page=${page + 1}&pageSize=${pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parsedData.articles || []), // Append new articles to existing ones
        totalResults: parsedData.totalResults,
        page: this.state.page + 1,
      });
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Novanews Top Headlines</h2>

        {/* InfiniteScroll component */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
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
                      source={element.source.name} // Pass the source here
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
