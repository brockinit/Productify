Template.profileLayout.rendered = function() {

}

Template.profileLayout.created = function() {

}

Template.profileLayout.destroyed = function() {

}

Template.profileLayout.events({
  'click .cancel' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/');
  },
  'click #save-changes' : function(event, template) {
    event.preventDefault();
    var userInput = $('#username').val();
    if (typeof (userInput) === 'string' && userInput.length > 0) {
      Meteor.users.update({ _id : Meteor.userId() }, { $set : { username : userInput } });
      Router.go('/dashboard/');
    }
    else {
      confirm('Please enter a new username');
    }
  }
});