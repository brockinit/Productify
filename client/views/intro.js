Template.introLayout.rendered = function() {

}

Template.introLayout.created = function() {

}

Template.introLayout.destroyed = function() {

}

Template.introLayout.events({
  'click submit' : function(event, template) {
    event.preventDefault();
    Users.find(this._id);
  }
});