# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
imgs = ["https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0001.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0002.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0003.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0004.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0005.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0006.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0007.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0008.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0009.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0010.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0011.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0012.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0013.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0014.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0015.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0016.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0017.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0018.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0019.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0020.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0021.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0022.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0023.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0024.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0025.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0026.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0027.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0028.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0029.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0030.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0031.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0032.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0033.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0034.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0035.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0036.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0037.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0038.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0039.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0040.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0041.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0042.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0043.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0044.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0045.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0046.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0047.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0048.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0049.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0050.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0051.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0052.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0053.jpg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0054.jpeg"]

  titles = ["Lovely open space", "Great location to get some work done", "Dreamy and wide open",
  "Scheduled for tear down", "Community work space", "Serene terraced space",
  "Unbelievable views and wide open floor space", "Extra large space", "Entire property with many desks",
  "Hunker down and get some work done", "Old derelict space", "Open workspace", "Community oriented",
  "180 degree views, private rooms", "Single room in our office", "Super quiet & best location in town",
  "Epic views", "Open desk in our community workspace", "Views of the water",
  "Super quiet location", "Super productive workspace", "Open desk amongst friends",
  "Awesome coworking space desk", "Gigantic wideopen", "Unbelievable", "Secluded workzone",
  "Exhibition space", "Great performance space", "Wild vacant area", "Incredible view, private desk",
  "Private rooms", "Empty and available", "Weirdly fun workspace", "THIS IS IT", "WORK LIKE NEVER BEFORE",
  "MINDBLOWING WORKSPACE, fun friends", "LOSE YOURSELF in this wide open workspace",
  "Find your productivity", "Join us! Awesome workspace", "Private desk in amazing location",
  "Full floor of this modern era office building", "Incredible Views, private room", "SUPER WARM workspace, good friends",
  "Come work with us! Balcony with views!", "Super team of designers", "Artist collective",
  "Weirdly comfy empty space", "Perfect for music performance", "Musicians Welcome!", "Art shows only",
  "Community Gallery, come have a show!", "Office space turned exhibition zone", "PERFORMANCE ART SPACE",
  "PERFECT EXHIBITION SPACE", "FUN CREW, shared extra large desk", "FULL FLOOR AVAIALABLE",
  "Kick back zone", "Come explore your potential", "Unreal views", "Private workspace", "Super quiet & best location in town",
  "Epic views", "Open desk in our community workspace", "Views of the water",
  "Super quiet location", "Super productive workspace", "Open desk amongst friends",
  "Awesome coworking space desk", "Gigantic wideopen", "Unbelievable", "Secluded workzone",
  "Exhibition space", "Great performance space", "Wild vacant area", "Incredible view, private desk",
  "Private rooms", "Empty and available", "Weirdly fun workspace", "THIS IS IT", "WORK LIKE NEVER BEFORE",
  "MINDBLOWING WORKSPACE, fun friends", "LOSE YOURSELF in this wide open workspace",
  "Find your productivity", "Join us! Awesome workspace", "Private desk in amazing location",
  "Full floor of this modern era office building", "Incredible Views, private room", "SUPER WARM workspace, good friends",
  "Come work with us! Balcony with views!", "Super team of designers", "Artist collective", "Great location to get some work done", "Dreamy and wide open",
  "Scheduled for tear down", "Community work space", "Serene terraced space",
  "Unbelievable views and wide open floor space", "Extra large space", "Entire property with many desks",
  "Hunker down and get some work done", "Old derelict space", "Open workspace", "Community oriented",
  "180 degree views, private rooms", "Single room in our office", "Super quiet & best location in town",
  "Epic views", "Open desk in our community workspace", "Views of the water",
  "Super quiet location", "Super productive workspace", "Open desk amongst friends",
  "Awesome coworking space desk", "Gigantic wideopen",
]

User.destroy_all
Spot.destroy_all
Review.destroy_all


b = User.create({
  email: "demovacantuser@gmail.com",
  first_name: "Resident",
  last_name: "Demo",
  password: "starwars",
  birth_date: "1980-01-01"
});


count = 0
54.times do |i|
  name = Faker::Name.first_name
  user = User.create({
    email: Faker::Internet.free_email(name),
    first_name: name,
    last_name: Faker::Name.last_name,
    password: "starwars",
    birth_date: "1980-01-01"
  })

  p = Random.new

  address = Faker::Address.street_name
  spot = Spot.create({
    title: titles[i],
    address: address + ", " + "New York",
    latitude: p.rand(40.59218006937453..40.8279620),
    longitude: p.rand((-74.01144716406247)..(-73.825550)),
    price: [*(75..250)].sample,
    kind: ["Office", "Studio", "Storefront"].sample,
    host_id: user.id,
    main_image: imgs[i]
  });


  rating = [1, 2, 3, 4, 5]
  numReviews = [*(3..20)].sample
  numReviews.times do |r|
    num = rating.sample
    offset = rand(User.count)
    rand_record = User.offset(offset).first.id
    Review.create!({
      user_id: rand_record,
      spot_id: spot.id,
      overall: num,
      user_impression: num,
      cleanliness: num,
      accuracy: num,
      communication: num,
      check_in: num,
      value: num,
      location: num,
      public_review: Faker::Hipster.paragraph
    })
  end
end
