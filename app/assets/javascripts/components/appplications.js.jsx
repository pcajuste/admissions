var NewApp = React.createClass({
  getInitialState: function() {
    return {user_id: '', course_id:'', resume: '', status: '', stage: '', notes: '', education: '', experience: '', skils: '', motive: '', hear: '', additional: '', submit: 'false', data:{}}
  },

  handleUserIDChange: function(e) {
    this.setState({user_id:e.target.value})
  },
  handleCourseIDChange: function(e) {
    this.setState({course_id:e.target.value})
  },
  handleResumeChange: function(e) {
    this.setState({resume:e.target.value})
  },
  handleStatusChange: function(e) {
    this.setState({status:e.target.value})
  },
  handleStageChange: function(e) {
    this.setState({stage:e.target.value})
  },
  handleNotesChange: function(e) {
    this.setState({notes:e.target.value})
  },
  handleEducationChange: function(e) {
    this.setState({education:e.target.value})
  },
  handleExperienceChange: function(e) {
    this.setState({experience:e.target.value})
  },
  handleSkilsChange: function(e) {
    this.setState({skils:e.target.value})
  },
  handleMotiveChange: function(e) {
    this.setState({motive:e.target.value})
  },
  handleHearChange: function(e) {
    this.setState({hear:e.target.value})
  },
  handleAdditionalChange: function(e) {
    this.setState({additional:e.target.value})
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var that = this
    $.ajax({
      url: '/applications',
      method: 'POST',
      data: {
        user_id: that.state.user_id,
        course_id: that.state.course_id,
        resume: that.state.resume,
        status: that.state.status,
        stage: that.state.stage,
        notes: that.state.notes,
        education: that.state.education,
        experience: that.state.experience,
        skils: that.state.skils,
        motive: that.state.motive,
        hear: that.state.hear,
        additional: that.state.additional

      },
      success: function(data, success, xhr) {
        console.log(data)
        that.setState({submit: 'true'})
        that.setState({data: data})

      }
    })
  },
  render: function() {
    if(this.state.submit == "false") {
    return(
      <div className="container">
      <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>

        <div className="form-group">
        <h1>New Application</h1>

          User_id: <input type="text" className="form-control" placeholder="user_id" value={this.state.user_id} onChange={this.handleUserIDChange}></input>
          <br/>
          Course_id: <input type="text" className="form-control" placeholder="course_id" value={this.state.course_id} onChange={this.handleCourseIDChange}></input>
          <br/>
          Resume: <input type="text" className="form-control" placeholder="resume" value={this.state.resume} onChange={this.handleResumeChange}></input>
          <br/>
          Status: <input type="text" className="form-control" placeholder="status" value={this.state.status} onChange={this.handleStatusChange}></input>
          <br/>
          Stage: <input type="text" className="form-control" placeholder="Stage" value={this.state.stage} onChange={this.handleStageChange}></input>
          <br/>
          Notes: <input type="text" className="form-control" placeholder="Notes" value={this.state.notes} onChange={this.handleNotesChange}></input>
          <br/>
          Education: <input type="text" className="form-control" placeholder="Education" value={this.state.education} onChange={this.handleEducationChange}></input>
          <br/>
          Experience: <input type="text" className="form-control" placeholder="Experience" value={this.state.experience} onChange={this.handleExperienceChange}></input>
          <br/>
          Skills: <input type="text" className="form-control" placeholder="Skills" value={this.state.skils} onChange={this.handleSkilsChange}></input>
          <br/>
          Motive: <input type="text" className="form-control" placeholder="Motive" value={this.state.motive} onChange={this.handleMotiveChange}></input>
          <br/>
          Hear: <input type="text" className="form-control" placeholder="Hear" value={this.state.hear} onChange={this.handleHearChange}></input>
          <br/>
          Additional: <input type="text" className="form-control" placeholder="Additional" value={this.state.additional} onChange={this.handleAdditionalChange}></input>
          <br/>
          <input type="submit" className="btn btn-default"/>
        </div>
      </form>
      </div>
          )
} else {
    console.log(this.props.app.id);
    return(
      <div>
        <ShowApp />
        <h1>Thank you for submitting. View your application:</h1>
      </div>
    )
  }

}
});

var ShowApp = React.createClass({
  render: function() {
      console.log(this.props.app)
      return(
        <h1>{this.props.app}</h1>
      )
  }
});
