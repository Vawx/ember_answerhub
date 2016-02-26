import Ember from 'ember';

export default Ember.Component.extend({
  showEditAnswer: false,
  currentAnswerID: -1,
  actions: {
    saveEditAnswer( ) {
      var params = {
        content: this.get("answerEditDetails"),
        answer: this.get("currentAnswerID"),
        question: this.get("question"),
      };
      this.sendAction('submitEditAnswer', params);
      this.set("showEditAnswer", false);
      this.set("answerEditDetails", "");
      this.set("editAnswerID", "");
    },
    editAnswer( answer ) {
      this.set("showEditAnswer", true);
      this.set("answerEditDetails", answer.get("content"));
      this.set("currentAnswerID", answer.get("id"));
    },
    clearFieldsAndReset( ) {
      this.set("showEditAnswer", false);
      this.set("answerEditDetails", "");
      this.set("editAnswerID", "");
    }
  }
});
