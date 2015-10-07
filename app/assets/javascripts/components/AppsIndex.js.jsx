var AppsIndex = React.createClass({
  render: function() {
    var appNodes = this.props.applications.map(function(app){
          return (
          <div>
          <table>

                <tbody>
                  <tr>
                    <td>{app.education}</td>
                    <td>{app.experience}</td>
                    <td>{app.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
    });

      return(
        <div>
            <div className="container">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Education</th>
                    <th>Experience</th>
                    <th>Status</th>
                  </tr>
                </thead>
                  <td>{appNodes}</td>
                  <td>{appNodes}</td>
                  <td>{appNodes}</td>

              </table>
            </div>
        </div>
    )
    console.log(appNodes);
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
