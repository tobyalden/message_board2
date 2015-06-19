import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    addQuestion: function() {

      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
      });
      newQuestion.save();

      this.set('title', '');
      this.set('author', '');
      this.set('description', '');
    }

  }
});
