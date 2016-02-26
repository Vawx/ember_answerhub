import Ember from 'ember';

export default Ember.Route.extend({
  model( ) {
    return this.store.findAll('question');
  },
  actions: {
    upvote( question ) {
      question.set("votes", question.get("votes") + 1 );
      question.save( );
    },
    downvote( question ) {
      question.set("votes", question.get("votes") - 1 );
      question.save( );
    }
  }
});
