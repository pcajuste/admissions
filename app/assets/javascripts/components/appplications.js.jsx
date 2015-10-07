var AppForm = React.createClass({
  getInitialState: function() {
    return {user_id: '', course_id:'', resume: '', status: '', stage: '', notes: '', education: '', experience: '', skills: '', motive: '', hear: '', additional: ''}
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
  handleSkillsChange: function(e) {
    this.setState({skills:e.target.value})
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
    var that = This
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
        skills: that.state.skills,
        motive: that.state.motive,
        hear: that.state.hear,
        additional: that.state.additional
      },
      success: function(data, success, xhr) {
        console.log(data)
      }
    })
  },



  render: function() {
    return(
      <div className="container">
      <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>

        <div className="form-group">
        <h1>New Application</h1>

          User_id: <input type="text" value={this.state.user_id} className="form-control" placeholder="user_id"></input>
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
          <input type="submit" className="btn btn-default">Submit</input>
        </div>
      </form>
      </div>

    )
  }

});
