import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerArea: false,
  showAnswerButton: true,
  actions: {
    answerButtonClicked( ) {
      this.set("showAnswerArea", true);
      this.set("showAnswerButton", false);
    },
    closeAnswerArea( ) {
      this.set("answer", ""),
      this.set("content", ""),
      this.set("showAnswerArea", false);
      this.set("showAnswerButton", true);
    },
    submitAnswer( ) {
      var params = {
        content: this.get("answer"),
        author: this.get("content"),
      };
      this.sendAction('submitAnswer', params);
      this.set("showAnswerArea", false);
      this.set("showAnswerButton", true);
    },
  }
});
