require 'open-uri'
require 'nokogiri'

class Post < ActiveRecord::Base
	belongs_to :user
	has_many :comments
	before_save :add_title

	def as_json(options = {})
    super(options.merge(include: [:user, comments: {include: :user}]))
  end

	private

	def add_title
		page = Nokogiri::HTML(open(self.link))
		self.title = page.css('title').text
	end

end
