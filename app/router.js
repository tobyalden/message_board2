import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', {path: '/'});
  this.resource('question', {path: '/questions/:question_id'}, function() {
    this.route('answers');
  });
});

export default Router;
