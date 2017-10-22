const sampleState = {
  entities: {
    spots: {
      1: {
        id: 1,
        title: "Downtown location with high foot traffic",
        type: 'entire_property',
        host_id: 10, //foreign key
        watcher_ids: [1, 4, 5], //array of foreign keys user_ids
        review_ids: [13, 18, 112], //array of foreign keys review_ids
        info: { //object with rating info
          base_rating: 8,
          location: { lat: -34.397, lng: 150.644 },
          base_price: 88, //cost per night
          //next spot related numerical or dataset
        }
      },
      2: {
        id: 2,
        title: "Commercial office space for tear down",
        type: 'unit',
        host_id: 15,
        watcher_ids: [32, 1, 89],
        review_ids: [15, 124, 230],
        info: {
          base_rating: 5,
          location: { lat: 78.891, lng: -123.331 },
          base_price: 36,
          //next spot related numerical or dataset
        }
      }
    },
    users: {
      11: {
        id: 11,
        name: "Dennis",
        path: `/images/${id}`,
        hostings_ids: [1, 4, 3], //foreign key array / properties hosted
        review_ids: [4, 77, 165] //foreign key array / reviews authored
      },
      16: {
        id: 16,
        name: "Sharon",
        path: `/images/${id}`,
        hostings_ids: [6],
        review_ids: [1, 15, 24]
      },
      25: {
        id: 25,
        name: "Louise",
        path: `/images/${id}`, // confused what to use here <-- This OR
        // this img_url: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg"
        hostings_ids: [],
        review_ids: [7, 34, 125]
      }
    },
    reviews: {
      22: {
        id: 22,
        author_id: 25, //foreign key user_id
        spot_id: 1, //foreign key spot_id
        body: "We were able to have a two day typography popup school " +
         "and the storefront location provided tons of light. Sharon was" +
         "helpful but came to close the storefront closer to 9:00 then 10:00pm" +
         "as posted",
        response: {
          body: "I only came before in case you had already locked up..." +
           " I am sorry that was an inconvenience",
          date_created: "September 2017"
        }
      },
      47: {
        id: 47,
        author_id: 16, //foreign key user_id
        spot_id: 1, //foreign key spot_id
        body: "The storefront is the ideal spot with lots of foot traffic " +
         "the light in the empty storefront is gorgeous. Sharon was" +
         "very proffesional and accomodating",
        response: {}
      }
    }
  },
  ui: {
    modal: [ sessionForm ],
    loading: true/false //??
  },
  session: {
    id: 54,
    name: "Janette",
    path: `/images/${id}`
  }
};
