require 'test_helper'

class SpotsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get spots_index_url
    assert_response :success
  end

  test "should get show" do
    get spots_show_url
    assert_response :success
  end

end
