import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {

    addAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        description: this.get('description'),
      });
      var controller = this;
      newAnswer.save().then(function() {
        controller.set('description', '');
        var question = controller.get('controllers.question.model');
        question.get('answers').pushObject(newAnswer);
        question.save().then(function() {
          controller.get('controllers.question').set('showAnswerButton', true);
          controller.transitionToRoute('question', question.id);
        });
      });
    }

  }
});
