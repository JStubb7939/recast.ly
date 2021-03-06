class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    this._getYouTubeVideos('cute kittens');
  }

  _getYouTubeVideos(query) {
    let options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  _handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }



  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this._getYouTubeVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handleVideoListEntryTitleClick={this._handleVideoListEntryTitleClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


// We will need to create a _playVideo method to handle the click passed up from the VideoList (after we add the state of course)
// We will be able to pass the video details to the VideoPlayer in this method
// To grab from an api, we may need to put the videos in the state as videos: []
// Then create a method to _fetchVideos that will make an ajax request to the server, which will be called on componentWillMount() so that it is called before the object is rendered
// On success, setState with new array of videos
// We can "poll" the API for changes in the componentDidMount() method and set an interval to fech data
// Can remove time with componentWillUnmount() method by setting the timer in the componentWillMount() method as an object property this._timer
// We would call clearInterval(this._timer) in componentWillUnmount() to clear the timer and prevent memory leak