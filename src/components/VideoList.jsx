var VideoList = (props) => ( // should make the contents a method to use elsewhere
  <div className="video-list media">
    {props.videos.map(video =>
      <VideoListEntry video={video} /> //need to add keys here as a prop
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


// this is where we'll create the click event and pass it back to this.props.playVideo