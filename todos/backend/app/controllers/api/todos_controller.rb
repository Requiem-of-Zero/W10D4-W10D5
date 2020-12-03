class Api::TodosController < ApplicationController
  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    # TODO build update
  end

  def destroy
    @todo = Todo.find_by(id: params[:id])
    @todo.destroy if @todo
    render json: {"message": "successfully deleted"}
  end
  
  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
