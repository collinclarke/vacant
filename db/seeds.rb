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
  title: "My first spot",
  address: "5360 Queen Ann Lane",
  price: "User",
  kind: "office",
  host_id: a.id
});

Spot.create({
  title: "Another spot",
  address: "205 Washington Avenue",
  price: "User",
  kind: "office",
  host_id: a.id
});
