Template.newTaskLayout.rendered = function() {

}

Template.newTaskLayout.created = function() {

}

Template.newTaskLayout.destroyed = function() {

}

Template.newTaskLayout.events({
  'click .cancel' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/:username');
  }
});