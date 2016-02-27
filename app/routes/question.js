import Ember from 'ember';

export default Ember.Route.extend({
  model( params ) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    submitAnswer( params ) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save( ).then( function( ) {
        return question.save( );
      });
      this.transitionTo('question', params.question);
    },
    saveEditQuestion( params ) {
      this.store.findRecord('question', params.question).then( function( question ) {
        question.set("author", question.get("author"));
        question.set("content", params.content);
        question.set("notes", params.notes);
        return question.save( );
      });
      this.transitionTo('question', params.question);
    },
    submitEditAnswer( params ) {
      this.store.findRecord('answer', params.answer).then( function( answer ) {
        answer.set("content", params.content);
        return answer.save( );
      });
      this.transitionTo('question', params.question);
    },
    upvote( question ) {
      question.set("votes", question.get("votes") + 1 );
      question.save( );
    },
    downvote( question ) {
      question.set("votes", question.get("votes") - 1 );
      question.save( );
    },
    answerUpvote( answer ) {
      answer.set("votes", answer.get("votes") + 1 );
      answer.save( );
    },
    answerDownvote( answer ) {
      answer.set("votes", answer.get("votes") - 1 );
      answer.save( );
    }
  }
});
