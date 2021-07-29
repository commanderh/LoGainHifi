# API Documentation

LoGainHifi's API is organized around ReST. Our API has predictable resource oriented URLs, accepts JSON-encoded request bodies, return JSON-encoded responses, and uses standard HTTP response codes and verbs.

API routes are not user-facing and should only be used by developers.

## Session Routes

#### `GET /api/auth`

Returns the user object if the user ID stored in the session is valid. Otherwise, it returns a 401 with a message of "Unauthorized."

#### `POST /api/auth/login`

Returns the user object if the user provided credentials that match a user in the database.

#### `GET /api/auth/logout`

Returns a message of `"User logged out"` on successful logout.

#### `POST /api/auth/signup`

Returns the new user object if the user provided all the required information to create a new user account.

## Topics Routes

#### `GET /api/topics`

Returns either the some amount of topics on the page specified in the query string.


#### `POST /api/topics`

Returns the newly created topic object if the form was successfully validated.

#### `GET /api/topics/<int:topic_id>`

Returns the single topic.

#### `PUT /api/topics/<int:topic_id>`

Returns the updated topic if the form was successfully validated.

#### `DELETE /api/topics/<int:topic_id>`

Returns the some amount of topics if the specified topic was successfully deleted.

#### `DELETE /api/post_images/<int:post_images_id>`

Returns the updated topic if the image was successfully removed from the database.

## Comments Routes

#### `POST /api/topics/<int:topic_id>/comments`

Returns the updated topic object that contains the new comment if the comment passed validation.

#### `PUT /api/comments/<int:comment_id>`

Returns the updated topic object that contains the updated comment if the comment passed validation.

#### `DELETE /api/comments/<int:comment_id>`

Returns the updated topic object that contained the old comment if the comment was successfully deleted.

## Search Routes

## Meetups Routes



