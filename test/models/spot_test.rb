# == Schema Information
#
# Table name: spots
#
#  id                      :integer          not null, primary key
#  title                   :string           not null
#  address                 :string           not null
#  price                   :string           not null
#  kind                    :string           not null
#  host_id                 :integer          not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  main_image_file_name    :string
#  main_image_content_type :string
#  main_image_file_size    :integer
#  main_image_updated_at   :datetime
#  longitude               :float
#  latitude                :float
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
