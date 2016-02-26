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
      var author = this.get("author");
      if( author === "" || author == undefined ) { author = "Annonymous" };
      var params = {
        content: this.get("content"),
        author: author,
        question: this.get('question'),
      };
      this.sendAction('submitAnswer', params);
      this.set("content", ""),
      this.set("author", ""),
      this.set("showAnswerArea", false);
      this.set("showAnswerButton", true);
    },
    clearFieldsAndReset( ) {
      this.set("content", ""),
      this.set("author", ""),
      this.set("showAnswerArea", false);
      this.set("showAnswerButton", true);
    }
  }
});
