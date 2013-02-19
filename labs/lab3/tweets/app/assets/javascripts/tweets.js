(function() {
  // Initialising inside an anonamously called function
  // like this allows us to create locally scoped variables
  // within the page
  $(function() {
    function tweetBody() {
      return $('#tweet_body').val();
    }

    // Update the 'space remaining' counter
    function updateCounter() {
      var charCount = tweetBody().length;
      $('#counter').html(140 - charCount);
    }

    function insertTweet(body) {
      // Add new tweet body to the top of the list
      $('#tweet_list').prepend(
        $('<tr/>').html(
	  $('<td/>').html(body)
	)
      );
    }

    // Listen for changes to the tweet body and update
    // the counter in real time
    $('#tweet_body').bind('keyup', function() {
      updateCounter();
    });

    // Handle tweet creations via AJAX
    $('#new_tweet').bind('submit', function() {
      var body = tweetBody();
      if (body.length === 0)
        return false;
      // The JSON object key format conforms to the Rails model
      // and attribute syntax
      var jqxhr = $.post('/tweets', {'tweet[body]': body}, function() {
      })
      .done(function(response) {
        insertTweet(response['body']);
      })
      .fail(function() {
	alert("Failed!");
      });

      return false;
    });

    // Initialise the counter on page load
    updateCounter();
  });
})();
