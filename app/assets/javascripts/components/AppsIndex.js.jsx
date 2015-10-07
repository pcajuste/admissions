var AppsIndex = React.createClass({
  render: function() {
      var that=this;
    var appNodes = this.props.applications.map(function(app){
      var userNodes = that.props.users.map(function(user){
          console.log("user name = " + user.email + "-- app.user_id = "+ app.user_id);
        if (user.id == app.user_id){
          return (
            <div className="row">
              <div className="col-md-1">{user.first_name}</div>

            </div>
          )
        }


      })

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
