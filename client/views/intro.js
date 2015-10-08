Template.introLayout.rendered = function() {

}

Template.introLayout.created = function() {

}

Template.introLayout.destroyed = function() {

}

Template.introLayout.events({
  'click #login-buttons-password' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/:username');
  }
});