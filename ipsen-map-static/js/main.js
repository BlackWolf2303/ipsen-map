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
});
//<=======JQUERY START =========>
jQuery(function($) {
  //bootstrap tree view
  $("ul.nav-tabs a").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
