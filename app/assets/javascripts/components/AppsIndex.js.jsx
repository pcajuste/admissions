var AppsIndex = React.createClass({
  render: function() {
    var appNodes = this.props.applications.map(function(app){
        return (
          <div className="row">
            <div className="col-md-1">{app.user_id}</div>
            <div className="col-md-1">{app.course_id}</div>
            <div className="col-md-1">{app.resume}</div>
            <div className="col-md-1">{app.education}</div>
            <div className="col-md-1">{app.experience}</div>
            <div className="col-md-1">{app.skils}</div>
            <div className="col-md-1">{app.notes}</div>
          </div>
        )

    });

      return(
        <div>
        <div className="row">
          <strong><div className="col-md-1">User ID</div></strong>
          <strong><div className="col-md-1">Course ID</div></strong>
          <strong><div className="col-md-1">Resume</div></strong>
          <strong><div className="col-md-1">Education</div></strong>
          <strong><div className="col-md-1">Experience</div></strong>
          <strong><div className="col-md-1">Skills</div></strong>
          <strong><div className="col-md-1">Comments</div></strong>
        </div>
      <div>{appNodes}</div>
      </div>
    )
  }
});








var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'Please submit your application' : 'Cancel you application';
    return (
      <h3 onClick={this.handleClick}>
        {text}. Click here!
      </h3>
    );
  }
});
