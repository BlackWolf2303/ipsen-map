//finderjs

// var data = (function() {
  
//   return json;
//   var options = {};
// })
// ();


//<=======JQUERY START =========>
// jQuery(function($) {
//   var treeMap = $("#treeMap");
//   var screenMobile = $(window).width();
  
//   $.ajax({
//     async: false,
//     global: false,
//     url: "/data/data.json",
//     dataType: "json",
//     success: function(data) {
//       var f = finder(treeMap.get(0), data, {});
//       f.on("leaf-selected", function(item) {
//         console.log("Leaf selected", item);
//         //Print out data which contain in lv3
//       });
//     }
//   });
//   //hidden tree level 1,2 for mobile


//   if (screenMobile < 992) {
//     $("#treeMap").on("click", ".fjs-item", function() {
//       $(this)
//         .parents(".fjs-col")
//         .addClass("hidden");
//       //change text of back-button
//       var textBackButton = $(this).text();
//       $("#category-title").text(textBackButton);
//       $(".back-icon").toggleClass("hidden", textBackButton === "Select a category");
//     });
//   }

//   //modal component
// });
//<=======JQUERY START =========>
jQuery(function($) {
  
  $.ajax({
    async: false,
    global: false,
    url: "/data/data.json",
    dataType: "json",
    success: initFinderUI
  });

  function initFinderUI(data) {
    var treeMap = $("#treeMap");
    var screenMobile = $(window).width();
    var f = finder(treeMap.get(0), data, {});
    f.on("leaf-selected", function(item) {
      console.log("Leaf selected", item);
      //Print out data which contain in lv3
    });
    if (screenMobile < 992) {
      $("#treeMap").on("click", ".fjs-item", function() {
        $(this)
          .parents(".fjs-col")
          .addClass("hidden");
        //change text of back-button
        var textBackButton = $(this).text();
        $("#category-title").text(textBackButton);
        $(".back-icon").toggleClass("hidden", textBackButton === "Select a category");
      });
    }
  }
  //modal component
});