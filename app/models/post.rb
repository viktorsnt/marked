require 'open-uri'

class Post < ActiveRecord::Base
	has_many :comments
	before_save :add_title

	def as_json(options = {})
    super(options.merge(include: :comments))
  end

	private

	def add_title
		page = Nokogiri::HTML(open(self.link))
		self.title = page.css('title').text
	end

end
