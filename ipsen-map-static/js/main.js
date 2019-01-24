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

  if(screenMobile < 992) {
    $("#treeMap").on('click',".fjs-item",function(){
      $(this).parents(".fjs-col").addClass("hidden");
      //change text of back-button 
      var textBackButton = $(this).text();
      $('#category-title').text(textBackButton);
      //display icon back button only 
      if($('#category-title').text()!=='Select a category'){       
          $('.back-icon').removeClass('hidden');
        }else {
          $('.back-icon').addClass('hidden');
        }
    });
  }

    //modal component

});
