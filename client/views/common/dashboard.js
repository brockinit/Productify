Template.dashboardLayout.rendered = function() {

}

Template.dashboardLayout.created = function() {

}

Template.dashboardLayout.destroyed = function() {

}

Template.todotasks.helpers({
  dash : function () {
    return Tasks.find({ loc : 1 });
  }
});

Template.inprogresstasks.helpers({
  dash : function () {
    return Tasks.find({ loc : 2 });
  }
});

Template.donetasks.helpers({
  dash : function () {
    return Tasks.find({ loc : 3 });
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
  ,
  'click #up' : function(event, template) {
    event.preventDefault();
    var thingy = Tasks.findOne({ title : 'thirty' });
    Tasks.update({ _id : thingy._id }, { $set : { loc : 2 } });
  }
});