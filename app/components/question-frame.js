import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote( question ) {
      this.sendAction('upvote', question);
    },
    downvote( question ) {
      this.sendAction('downvote', question);
    }
  }
});
