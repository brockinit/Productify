Template.profileLayout.rendered = function() {

}

Template.profileLayout.created = function() {

}

Template.profileLayout.destroyed = function() {

}

Template.profileLayout.events({
  'click .cancel' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/username');
  },
  'click #save-changes' : function(event, template) {
    event.preventDefault();
    var userInput = $('#username').val();
    Meteor.users.update({ _id : Meteor.userId() }, { $set : { username : userInput } });
    //Accounts.setUsername(Meteor.userId(), userInput);
    //console.log(Accounts.setUsername(Meteor.user()._id, userInput));
    //console.log(Meteor.user().username);
  }
});