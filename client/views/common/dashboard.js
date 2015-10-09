Template.dashboardLayout.rendered = function() {
  // $('.test.modal')
  // .modal('attach events', '.test.button', 'show');
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
    Router.go('/profile/edit/');
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

Template.task1.events({
  'click .nextStage' : function(event, template) {
    event.preventDefault();
    Tasks.update( { _id : this._id }, { $set : { loc : 2 } });
  }
});

Template.task2.events({
  'click .nextStage' : function(event, template) {
    event.preventDefault();
    Tasks.update( { _id : this._id }, { $set : { loc : 3 }} );
  }
});

Template.task3.events({
  'click .nextStage' : function(event, template) {
    event.preventDefault();
    Tasks.remove( { _id : this._id } );
  }
});



