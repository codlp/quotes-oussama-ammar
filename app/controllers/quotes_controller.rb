class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
  end

  def show
    @quote = Quote.find(params[:id])
  end

  def new
    @quote = Quote.new
  end

  def create
    @quote = Quote.new(quote_params)
    @quote.save
  end

  def edit
    @quote = Quote.find(params[:id])
  end

  def update
    @quote = quote.find(params[:id])
    @quote.update(quote_params)
  end

  def destroy
    @quote = Quote.find(params[:id])
    @quote.destroy
  end

  private

  def quote_params
    params.require(:quote).permit(:description, :author, :year, :source)
  end
end
