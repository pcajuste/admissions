var TestingTest = React.createClass ({
  render: function() {
    var userNodes = this.props.users.map(function(user){
      return(
        <h1>Hello, {user.first_name}</h1>
      )
    });
    return (
      <h1>{userNodes}</h1>
    )
  }
});
