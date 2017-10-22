### Schema
____
####  Spots Table
| id | title | location | price | type | img_url | info | host_id      |
| :- | :- | :- |
|  integer  |  string  |  jsonb  | integer | string | string | json | integer |

____

####  Watchings Table
| id | user_id | spot_id |
| :- | :- | :- |
|  integer  |  integer  |  integer  |
____

####  Bookings Table
| id | user_id | spot_id | start_date | end_date | status |
| :- | :- | :- |
|  integer  |  integer  |  integer  | date | date | string |
____

#### Reviews Table
| id | user_id | spot_id | overall | user_impression | exceptionals |
| :- | :- | :- |
|  integer  |  integer  |  integer  | integer | integer | json |

| cleanliness | accuracy | communication | check_in | value | location |
| :- | :- | :- |
|  json |  json  |  json  | json | json | json |

| private_note | public_review | response |
| :- | :- | :- |
|  string |  string  | string |
____

#### Users Table

| id | email | first_name | last_name | password_digest |
| :- | :- | :- |
|  integer  |  string  |  string  | string | string |

 | session_token | img_url | birth_date | currency | language |
 | :- | :- |
 |  integer  |  string  | date | string | string |

 | description |
 | :- | :- |
 |  string  | 
