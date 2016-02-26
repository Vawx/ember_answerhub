import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerArea: false,
  showAnswerButton: true,
  showEditQuestion: true,
  showEditQuestionArea: false,
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
      this.set("questionEdit", "");
      this.set('questionEditDetails', "")
      this.set("showEditQuestionArea", false);
      this.set("showEditQuestion", true);
    },
    editQuestion( ) {
      this.set("questionEdit", this.get("question.content"));
      this.set('questionEditDetails', this.get("question.notes"))
      this.set("showEditQuestionArea", true);
      this.set("showEditQuestion", false);
    },
    saveEditQuestion( ) {
      var params = {
        content: this.get("questionEdit"),
        notes: this.get("questionEditDetails"),
        question: this.get("question").get("id"),
      };
      console.log(params);
      this.sendAction('saveEditQuestion', params);
      this.set("questionEdit", "");
      this.set('questionEditDetails', "")
      this.set("showEditQuestionArea", false);
      this.set("showEditQuestion", true);
    }

  }
});
