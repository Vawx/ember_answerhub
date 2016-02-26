import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitQuestion( ) {
      var params = {
        author: this.get("author"),
        content: this.get("content"),
        notes: this.get("notes"),
        votes: 0,
      };
      this.sendAction('submitQuestion', params);
    },
    upvote( question ) {
      this.sendAction('upvote', question);
    },
    downvote( question ) {
      this.sendAction('downvote', question);
    }
  }
});
