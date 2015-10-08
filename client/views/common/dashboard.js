Template.dashboardLayout.rendered = function() {

}

Template.dashboardLayout.created = function() {

}

Template.dashboardLayout.destroyed = function() {

}

Template.dashboardLayout.events({
  'click #user-profile' : function(event, template) {
    event.preventDefault();
    console.log('profile!!!');
    Router.go('/profile/edit/:username');
  },
  'click #new-task' : function(event, template) {
    event.preventDefault();
    Router.go('/newtask');
  }
});