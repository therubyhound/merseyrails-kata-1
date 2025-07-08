class EmailsController < ApplicationController
  def index
  end

  def show
    @email = Email.find params[:id]
  end
end
