class UsersCoursesController < ApplicationController
  before_action :set_users_course, only: [:show, :edit, :update, :destroy]

  # GET /users_courses
  # GET /users_courses.json
  def index
    @users_courses = UsersCourse.all
  end

  # GET /users_courses/1
  # GET /users_courses/1.json
  def show
  end

  # GET /users_courses/new
  def new
    @users_course = UsersCourse.new
  end

  # GET /users_courses/1/edit
  def edit
  end

  # POST /users_courses
  # POST /users_courses.json
  def create
    @users_course = UsersCourse.new(users_course_params)

    respond_to do |format|
      if @users_course.save
        format.html { redirect_to @users_course, notice: 'Users course was successfully created.' }
        format.json { render :show, status: :created, location: @users_course }
      else
        format.html { render :new }
        format.json { render json: @users_course.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users_courses/1
  # PATCH/PUT /users_courses/1.json
  def update
    respond_to do |format|
      if @users_course.update(users_course_params)
        format.html { redirect_to @users_course, notice: 'Users course was successfully updated.' }
        format.json { render :show, status: :ok, location: @users_course }
      else
        format.html { render :edit }
        format.json { render json: @users_course.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users_courses/1
  # DELETE /users_courses/1.json
  def destroy
    @users_course.destroy
    respond_to do |format|
      format.html { redirect_to users_courses_url, notice: 'Users course was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_course
      @users_course = UsersCourse.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def users_course_params
      params.require(:users_course).permit(:user_id, :course_id, :buffer)
    end
end
