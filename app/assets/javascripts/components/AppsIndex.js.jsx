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
            </div>
          )
    });
      return(
        <div>{appNodes}</div>
    )
  }
});
// var IndexTable = React.createClass({
//   render: function(){
//     return(
//
//     )
//   }
// });
