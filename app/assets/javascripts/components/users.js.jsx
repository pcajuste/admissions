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
    console.log(this.props.users)
      return(
        <div>
          Hello

        </div>

      )
  }
  });
