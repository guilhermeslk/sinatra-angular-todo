require 'rubygems'
require 'sinatra'
require 'active_record'
require 'json'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'todo.sqlite3.db'
)

class Task < ActiveRecord::Base
end

get '/' do
    erb :index
end

get '/tasks' do
    Task.all().to_json
end

get '/tasks/:id' do
    Task.find(params[:id]).to_json
end
