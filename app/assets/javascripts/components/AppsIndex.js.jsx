var AppsIndex = React.createClass({
  render: function() {
    var appNodes = this.props.applications.map(function(app){
          return (
            <div className="container">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Education</th>
                    <th>Experience</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{app.education}</td>
                    <td>{app.experience}</td>
                    <td>{app.status}</td>
                  </tr>
                </tbody>
              </table>
              <h2><LikeButton/></h2>
            </div>
          )
    });
      return(
        <div>{appNodes}</div>
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
// var IndexTable = React.createClass({
//   render: function(){
//     return(
//
//     )
//   }
// });
