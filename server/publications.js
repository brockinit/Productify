Meteor.publish( 'users', function() {
  return Users.find();
});

Meteor.publish( 'tasks', function() {
  return Tasks.find();
});