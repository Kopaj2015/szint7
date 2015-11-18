KopajEventCategories = new Mongo.Collection('kopajEventCategories');

/*KopajEventCategories.allow(
  insert: function(){
  return true;
});*/
Meteor.methods({
  'checkIfCategoryExists': function(categoryName) {
    if (KopajEventCategories.find({name: categoryName}).count()>0){
      return true
    }
    return false
  },
  'addKopajEventCategory': function(categoryName) {
    console.log("called hehe")
    KopajEventCategories.insert({'name': categoryName})
  },
});
Meteor.startup(function() {
  if (Meteor.isServer && KopajEventCategories.find().count() === 0) {
    KopajEventCategories.insert({ name: "teszt"});
  }
});
