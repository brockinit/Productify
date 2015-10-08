Template.profileLayout.rendered = function() {

}

Template.profileLayout.created = function() {

}

Template.profileLayout.destroyed = function() {

}

Template.profileLayout.events({
  'click .cancel' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/:username');
  }
});