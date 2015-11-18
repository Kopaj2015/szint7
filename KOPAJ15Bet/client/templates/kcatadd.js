var statusDep = new Tracker.Dependency()
var statusGood = "UPDATEME"
var isItGoodToAdd=false

//Template.kopajCategoriesAdd.
Template.kopajCategoriesAdd.helpers({
  statusGood : function()
  {
    statusDep.depend();
    return statusGood;
  },
});

Template.kopajCategoriesAdd.events({
  'submit #kopajCatAdd': function(event) {
    event.preventDefault()
    if(isItGoodToAdd){
       Meteor.call("addKopajEventCategory",event.target.kopajCategoryName.value);
  }
},
  'input #kopajCategoryName': function(event) {
    var val = event.target.value
    Meteor.call("checkIfCategoryExists",val,function(err,data){
      isItGoodToAdd=false;
      var val = event.target.value
      if (val===""){
        statusGood="Nem lehet üres!"
        statusDep.changed()
        return
      }
      if (data){
        statusGood="Ilyen kategória már van!"
      }else {
        statusGood="Ok!"
        isItGoodToAdd=true
      }
      statusDep.changed()
    });


  }
  ,
})
