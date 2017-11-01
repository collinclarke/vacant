# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

imgs = [
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0001.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0002.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0003.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0004.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0005.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0006.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0007.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0008.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0009.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0010.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0011.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0012.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0013.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0014.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0015.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0016.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0017.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0018.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0019.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0020.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0021.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0022.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0023.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0024.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0025.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0026.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0027.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0028.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0029.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0030.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0031.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0032.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0033.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0034.jpeg",
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
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0051.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0052.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0053.jpeg",
  "https://s3.us-east-2.amazonaws.com/vacant-pro/seeds/seed_images/vacant__0054.jpeg",

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

54.times do |i|

  Spot.create({
    title: "My house",
    address: Faker::Address.full_address,
    price: [*(75..250)].sample,
    kind: ["Office", "Studio", "Storefront"].sample,
    host_id: b.id,
    main_image: imgs[i]
  });

end

rating = [1, 2, 3, 4, 5]
25.times do |r|
  spot_offset = rand(Spot.count)
  rand_record = Model.offset(spot_offset).first.id
  num = rating.sample
  Review.create!({
    user_id: b.id,
    spot_id: rand_record,
    overall: num,
    user_impression: num,
    cleanliness: num,
    accuracy: num,
    communication: num,
    check_in: num,
    value: num,
    location: num,
    public_review: Faker::Hipster.sentence
  })
end
