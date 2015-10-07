var UsersIndex = React.createClass({
  render: function() {
      return(
        
        {this.props.users[0]}

          <UserNames last_name={UserNames.last_name}/>
        </div>
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
