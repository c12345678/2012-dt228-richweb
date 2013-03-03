Tweets = new Meteor.Collection("tweets");

if (Meteor.isClient) {
  var MAX_CHARS = 140;

  Template.compose.events({
    'submit form': function (event) {
      var $body = $('#tweet-body');
      event.preventDefault();

      Tweets.insert({
        body: $body.val(),
        created_at: Date()
      });
      $body.val('');
      $('#remaining').html(MAX_CHARS);
    },

    'keyup #tweet-body': function() {
      $('#remaining').html(MAX_CHARS - $('#tweet-body').val().length);
    }
  });

  Template.list.events({
    'click .tweet-remove': function(event) {
      Tweets.remove(this);
    }
  });

  Template.list.tweets = Tweets.find({}, {sort: {created_at: -1}});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
