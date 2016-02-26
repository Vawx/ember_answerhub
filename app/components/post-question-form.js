import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitQuestion( ) {
      var params = {
        author: this.get("author"),
        content: this.get("content"),
        notes: this.get("notes"),
      };
      this.sendAction('submitQuestion', params);
    },
  }
});
