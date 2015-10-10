/*
* To be Implemented...
*/

Tasks.allow({
  'insert' : function (userId,doc) {
    return true;
  },
  'update' : function (userId,doc) {
    return true;
  },
  'remove' : function(userId, doc) {

    return true;
  }
});

Meteor.users.allow({
  'update' : function (userId, doc) {
    return true;
  }
});