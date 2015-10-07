var AppForm = React.createClass({
  render: function() {
    return(
      <div className="container">
      <form className="navbar-form navbar-left" >
        <div className="form-group">
        <h1>New Application</h1>
          User_id: <input type="text" className="form-control" placeholder="user_id"></input>
          <br/>
          Course_id: <input type="text" className="form-control" placeholder="course_id"></input>
          <br/>
          Resume: <input type="text" className="form-control" placeholder="resume"></input>
          <br/>
          Status: <input type="text" className="form-control" placeholder="status"></input>
          <br/>
          Stage: <input type="text" className="form-control" placeholder="Stage"></input>
          <br/>
          Notes: <input type="text" className="form-control" placeholder="Notes"></input>
          <br/>
          Education: <input type="text" className="form-control" placeholder="Education"></input>
          <br/>
          Experience: <input type="text" className="form-control" placeholder="Experience"></input>
          <br/>
          Skills: <input type="text" className="form-control" placeholder="Skills"></input>
          <br/>
          Motive: <input type="text" className="form-control" placeholder="Motive"></input>
          <br/>
          Hear: <input type="text" className="form-control" placeholder="Hear"></input>
          <br/>
          Additional: <input type="text" className="form-control" placeholder="Additional"></input>
          <br/>
          <button type="submit" className="btn btn-default">Submit</button>
        </div>
      </form>
      </div>

    )
  }

});
