<p align="center">
</p>

## `Users`

Column Name | Data Type | Details
----------- | --------- | -------
`id` | integer | not null, primary key
`username` | string | not null, unique
`email` | string | not null, unique
`hashed_password` | string | not null
`image_url` | string | null
`created_at` | string | not null, default = CURRENT_TIMESTAMP

* Users have a One to Many relationship with Topics
* Users have a Many to Many relationship with Topics through Comments
* Users have a One to Many relationship with Comments
* Users have a One to Many relationship with Meetups

## `Topics`

Column Name | Data Type | Details
----------- | --------- | -------
`id` | integer | not null, primary key
`user_id` | integer | not null, foreign key
`category_id` | integer | not null, foreign key
`title` | string | not null
`body` | text | nullable
`image_url` | string | null
`created_at` | timestamp | not null, default = CURRENT_TIMESTAMP
`updated_at` | timestamp | not null, default = CURRENT_TIMESTAMP

* Column `user_id` references Users table
* Column `category_id` references Categories table
* Topics have a Many to One relationship with Users
* Topics have a Many to Many relationship with Users through Comments
* Topics have a One to Many relationship with Comments

## `Topic_Images`

Column Name | Data Type | Details
----------- | --------- | -------
`id` | integer | not null, primary key
`topic_id` | integer | not null, foreign key
`image_url` | string | null
`created_at` | timestamp | not null, default = CURRENT_TIMESTAMP
`updated_at` | timestamp | not null, default = CURRENT_TIMESTAMP

* Column `topic_id` references Topics table
* Topics have a Many to One relationship with Topics


# `Comments`

Column Name | Data Type | Details
----------- | --------- | -------
`id` | integer | not null, primary key
`user_id` | integer | not null, foreign key
`category_id` | integer | not null, foreign key
`content` | text | not null
`created_at` | timestamp | not null, default = CURRENT_TIMESTAMP
`updated_at` | timestamp | not null, default = CURRENT_TIMESTAMP

* Column `user_id` references Users table
* Column `topic_id` references Posts table
* Comments have a Many to One relationship with Users
* Comments have a Many to One relationship with Posts

## `Meetups`

Column Name | Data Type | Details
----------- | --------- | -------
`id` | integer | not null, primary key
`user_id` | integer | not null, foreign key
`name` | string | not null
`description` | text | not null
`city` | string | not null
`state` | string | not null
`address` | string | not null
`zipcode` | integer | not null
`date` | datetime | not null
`created_at` | timestamp | not null, default = CURRENT_TIMESTAMP
`updated_at` | timestamp | not null, default = CURRENT_TIMESTAMP

* Column `user_id` references Users table
* Meetups have a Many to One relationship with Users
