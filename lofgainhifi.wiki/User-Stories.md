# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to the Homepage.
      * So that I can easily log out to keep my information secure.

## LoGainHifi

### Topics

* As a logged in or logged out user, I want to be able to browse all topics
  * When I'm on the Homepage:
    * I can see a list of clickable topics.
      * So that I can open that specific topic.

  * When I'm on an individual topic page:
    * I can see the whole thread including the topic's content itself and the associated comments.

* As a logged in, I want to be able to create topics
  * When I'm on the Homepage:
    * I am able to click a new topic button
     * So that I am prompted a modal form to fill out about a new topic.


### Comments

* As a logged in or logged out user I can view "Scratches" associated with individual cats posted by myself or anyone else.
  * When I'm on the individual cat page:
    * I can view previously written 'Scratches' (comments) posted by myself or other users.
      * So that I can see what users have posted.

* As a logged in user, I want to be able to create 'Scratches' (comments) about the cat by clicking a 'Scratch Post' button on the cat's page located below an empty text-field box.
  * When I'm on the individual cat page:
    * I can enter a comment in a text-field box and click a "Scratch Post" button to post my comment.
      * So that I can make a comment about a particular cat.

* As a logged in user, I want to be able to edit my 'Scratches' (comments) about the cat by clicking an 'Edit' button associated with an individual Scratch that I made.
  * When I'm on the individual cat page:
    * I can click "Edit" to make changes to Scratches I have previously posted.
      * So that I can fix any errors I make in my Scratch.

* As a logged in user, I want to be able to delete my 'Scratches' (comments) about the cat by clicking a 'Delete' button associated with the Scratch that I made.
  * When I'm on the individual cat page:
    * I can click "Delete" to make changes to Scratches I have previously posted.
      * So that I can remove a Scratch I no longer want displayed.

