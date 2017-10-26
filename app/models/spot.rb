# == Schema Information
#
# Table name: spots
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  address    :string           not null
#  price      :string           not null
#  type       :string           not null
#  host_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Spot < ApplicationRecord
  validates :title, :address, :price, :type, :host_id, presence: true

  
end
