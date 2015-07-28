require 'rubygems'
require 'sinatra'
require 'active_record'
require 'json'

ActiveRecord::establish_connection(
    :adapter => 'sqlite3',
    :database => 'todo.sqlite3.db'
)

class Task < ActiveRecord::Base
end

