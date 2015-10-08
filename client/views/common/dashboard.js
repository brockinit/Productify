Template.dashboardLayout.rendered = function() {

}

Template.dashboardLayout.created = function() {

}

Template.dashboardLayout.destroyed = function() {

}

Template.todotasks.helpers({
  dash : function () {
    console.log('hiiii');
    return Tasks.find();
  }
});

Template.dashboardLayout.events({
  'click #user-profile' : function(event, template) {
    event.preventDefault();
    Router.go('/profile/edit/:username');
  },
  'click #new-task' : function(event, template) {
    event.preventDefault();
    Router.go('/newtask');
  },
  'click #log-out' : function(event, template) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});