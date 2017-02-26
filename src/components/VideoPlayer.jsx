// class VideoPlayer extends App {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className='video-player'>
//         <div className='embed-responsive embed-responsive-16by9'>
//           <iframe className='embed-responsive-item' src={this.props.currentVideo ? 'https://www.youtube.com/embed/' + this.props.currentVideo.id.videoId : ''} allowFullScreen></iframe>
//         </div>
//         <div className='video-player-details'>
//           <h3>{this.props.currentVideo ? this.currentVideo.snippet.title : 'No current video'}</h3>
//           <div>{this.props.currentVideo ? this.currentVideo.snippet.description 'Select video'}</div>
//         </div>
//       </div>
//     );
//   }
// }

var VideoPlayer = ({video}) => (
  <div className='video-player'>
    <div className='embed-responsive embed-responsive-16by9'>
      <iframe className='embed-responsive-item' src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className='video-player-details'>
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
