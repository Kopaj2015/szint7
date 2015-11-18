Meteor.publish('kopajCategories', function() {
  return KopajEventCategories.find();
});
