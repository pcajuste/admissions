var UsersIndex = React.createClass({
  render: function() {
    var userNodes = this.props.users.map(function(user){
      return (
        <h1>{user.first_name}</h1>
      );
    })
      return(
        <div>
        {userNodes}
        </div>

    )
}
});

var UserNames = React.createClass({
  render: function() {
      return(
        <div>
          Hello

        </div>

      )
  }
  });
  var ShowApp = React.createClass({
    render: function() {
        return(
          <div className="progress">
            <div className="bar" style="width: 60%;"></div>
          </div>
        )
    }
  });
