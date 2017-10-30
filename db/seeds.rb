# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all

User.create({
  email: "demovacantuser@gmail.com",
  first_name: "Demo",
  last_name: "User",
  password: "starwars",
  birth_date: "1980-01-01"
});

a = User.create({
  email: "mrhost@gmail.com",
  first_name: "Demo",
  last_name: "Host",
  password: "starwars",
  birth_date: "1980-01-01"
});

Spot.create({
  title: "A beautiful studio with views of the water",
  address: "36 Waverly Avenue, Brooklyn NY",
  price: "75",
  kind: "Studio",
  host_id: a.id
});

Spot.create({
  title: "My house",
  address: "205 Washington Avenue",
  price: "224",
  kind: "office",
  host_id: a.id
});
Spot.create({
  title: "My old house",
  address: "5360 Queen Ann Lane",
  price: "300",
  kind: "office",
  host_id: a.id
});
