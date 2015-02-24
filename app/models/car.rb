class Car < ActiveRecord::Base
	has_one :ad
	validate :reg, presence: true
	validates_uniqueness_of :reg
	has_many :posts, :dependent => :destroy
	
	def self.search(search)
	 search_condition =search + "%"
	 find(:all,:conditions =>['make LIKE ?',search_condition])
	 end
	 
	 geocoded_by :description
	after_validation :geocode, :if => :description_changed?
end
