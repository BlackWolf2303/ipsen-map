//finderjs
var treeMap = document.getElementById("treeMap");
var data = [
  {
    label: "Thearapeutic Area",
    children: [
      {
        label: "Rare Disease",
        children: [
          {
            label: "Publication"
          },
          {
            label: "Key Guidelines & Others"
          },
          {
            label: "Training"
          },
          {
            label: "Clinical Trials"
          },
          {
            label: "Congress Hightlights"
          },
          {
            label: "Core content"
          },
          {
            label: "Contact"
          },
          {
            label: "Rare Diseases SharePoint"
          }
        ]
      },
      {
        label: "Item 1B",
        children: [
          {
            label: "Item 1B1"
          },
        ]
      }
    ]
  },

  {
    label: "GMAS",
    children: [ ]
  },
  {
    label: "Useful SharePoint Links",
    children: [ ]
  },
];
var options = {};
var f = finder(treeMap, data, options);
f.on("leaf-selected", function(item) {
  console.log("Leaf selected", item);
  //Print out data which contain in lv3
});

//<=======JQUERY START =========>
jQuery(function($) {
  //hidden tree level 1,2 for mobile
  var screenMobile = $(window).width();
  if((screenMobile < 992)) {
    $("#treeMap").on('click',".fjs-item",function(e){
      $(this).parents(".fjs-col").addClass("display-none");
    });

  }
    //The back button

    //modal component

});
