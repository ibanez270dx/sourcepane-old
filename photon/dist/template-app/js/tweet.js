// Generated by CoffeeScript 1.10.0
(function() {
  var Tweet;

  Tweet = (function() {
    function Tweet(details) {
      this.details = details;
    }

    Tweet.prototype.injectHTML = function() {
      return "<img class=\"img-circle media-object pull-left\" src=\"" + this.details.thumbnail + "\" width=\"32\" height=\"32\">\n<div class=\"media-body\">\n  <p>" + this.details.text + "</p>\n</div>";
    };

    return Tweet;

  })();

  module.exports = Tweet;

}).call(this);

//# sourceMappingURL=tweet.js.map