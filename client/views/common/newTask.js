Template.newTaskLayout.rendered = function() {

}

Template.newTaskLayout.created = function() {

}

Template.newTaskLayout.destroyed = function() {

}

Template.newTaskLayout.events({
  'click .cancel' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard/:username');
  },
  'click #save-task' : function(event, template) {
    event.preventDefault();
    var titleInput = $('#title-input').val();
    var descriptionInput = $('#description-input').val();
    Tasks.insert({ title : titleInput, description : descriptionInput, loc : 1 });
  }
});