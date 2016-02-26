import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerArea: false,
  showAnswerButton: true,
  actions: {
    answerButtonClicked( ) {
      this.set("showAnswerArea", true);
      this.set("showAnswerButton", false);
    },
    submitAnswer( ) {
      var params = {
        content: this.get("answer"),
        author: this.get("author"),
      };
      this.set("showAnswerArea", false);
      this.set("showAnswerButton", true);
    }
  }
});
