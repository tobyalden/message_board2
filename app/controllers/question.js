import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  showAnswerButton: true,

    actions: {

      editDescription: function() {
        this.set('isEditing', true);
      },

      finishEditing: function() {
        this.set('isEditing', false);
        var question = this.get('model');
        question.set('description', this.get('description'));
        question.save();
      },

      deleteQuestion: function () {
       var question = this.get('model');
       question.deleteRecord();
       question.save();
       this.transitionToRoute('questions');
     },

     addAnswer: function() {
       this.set('showAnswerButton', false);
       this.transitionToRoute('question.answers');
     },

     deleteAnswer: function(answer) {
       var question = this.get('model');
       question.get('answers').removeObject(answer);
       question.save();

       answer.deleteRecord();
       answer.save();
       this.transitionToRoute('question', this.get('id'));
     },

     backToQuestions: function() {
       this.set('showAnswerButton', true);
       this.transitionToRoute('questions');
     }

    }

});
