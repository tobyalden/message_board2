import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    backToQuestions: function() {
      this.set('showAnswerButton', true);
      this.transitionToRoute('questions');
    }

  }
});
