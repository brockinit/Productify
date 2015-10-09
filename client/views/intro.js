Template.introLayout.rendered = function() {

}

Template.introLayout.created = function() {

}

Template.introLayout.destroyed = function() {

}



// Accounts.ui.config({
//   passwordSignupFields : 'USERNAME_ONLY'
// });


Template.introLayout.events({
  'click #at-btn' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/:username');
  }
});