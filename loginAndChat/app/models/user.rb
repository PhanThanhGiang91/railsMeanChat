class User < ActiveRecord::Base
  has_secure_password

  validates :name, presence: true, uniqueness: true, length: { in: 2..25 }
  validates :password, presence: true, length: { in: 4..25 }

  before_save do
  	self.name.capitalize!
  end
end