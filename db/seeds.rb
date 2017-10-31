# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

d = User.create({
  email: "collinclarke@gmail.com",
  first_name: "Collin",
  last_name: "Demo",
  password: "starwars",
  birth_date: "1980-01-01"
});

a = User.create({
  email: "mrhost@gmail.com",
  first_name: "Hoster",
  last_name: "Demo",
  password: "starwars",
  birth_date: "1980-01-01"
});

c = Spot.create({
  title: "A beautiful studio with views of the water",
  address: "36 Waverly Avenue, Brooklyn NY",
  price: "75",
  kind: "Studio",
  host_id: a.id
});

Spot.create({
  title: "My house",
  address: "205 Washington Avenue, Brooklyn NY",
  price: "224",
  kind: "office",
  host_id: a.id
});
Spot.create({
  title: "My old house",
  address: "5360 Queen Ann Lane, Santa Barbara CA",
  price: "300",
  kind: "office",
  host_id: a.id
});

Review.create!({
  user_id: b.id,
  spot_id: c.id,
  overall: 5,
  user_impression: 5,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  check_in: 5,
  value: 5,
  location: 5,
  public_review: "So fun to work in this studio, Hoster was a great host!"
})

Review.create!({
  user_id: d.id,
  spot_id: c.id,
  overall: 2,
  user_impression: 1,
  cleanliness: 4,
  accuracy: 1,
  communication: 4,
  check_in: 4,
  value: 1,
  location: 1,
  public_review: "Wow this studio is terrible, what a terrible place!"
})
