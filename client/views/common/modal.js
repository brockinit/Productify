Template.modal.rendered = function() {

}

Template.modal.created = function() {

}

Template.modal.destroyed = function() {

}

Template.modal.events({
  'click #new-task' : function(event, template) {
    event.preventDefault();
    $('.ui.task.modal').modal('attach events', '#new-task', '#save-task', 'show');
    console.log('heyy');
  },
  'click #save-task' : function(event, template) {
    event.preventDefault();
    console.log('heyyy');
    var titleInput = $('#title-input').val();
    var descriptionInput = $('#description-input').val();
    Tasks.insert({ title : titleInput, description : descriptionInput, loc : 1 });
  }
});


// Template.newTaskLayout.events({
//   'click .cancel' : function(event, template) {
//     event.preventDefault();
//     Router.go('/dashboard');
//   },
//   'click #save-task' : function(event, template) {
//     event.preventDefault();
//     var titleInput = $('#title-input').val();
//     var descriptionInput = $('#description-input').val();
//     Tasks.insert({ title : titleInput, description : descriptionInput, loc : 1 });
//   }
// });