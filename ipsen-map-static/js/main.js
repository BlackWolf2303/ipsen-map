//finderjs
//<=======JQUERY START =========>
jQuery(function($) {
  let CategoryNameStorage = [];
  let dislayScreen = $(window).width();
  $.ajax({
    async: false,
    global: false,
    url: "/data/data.json",
    dataType: "json",
    success: initSearchMapUI,
  });
  function initSearchMap(data) {
    var searchMap='';
    searchMap += "<ul class=\"fjs-list\">";   
    $.each(data,function(index,item){
      searchMap+= "<li class=\"fjs-item fjs-has-children\" id=\""+item.id+"\"><a><div class=\"fjs-item-prepend\"></div><div class=\"fjs-item-content\">"+item.label+"</div><div class=\"fjs-item-append\"></div></a>" ; 
      if(item.children) {
        searchMap += initSearchMap(item.children);
      }
      searchMap+="</li>";
    })
    searchMap+="</ul> ";
    return searchMap;
  }
  //innit Search Map
  function initSearchMapUI(data) {
    $("#searchMap").append(initSearchMap(data));
      //add rootLayer id for categories
    $("#searchMap>ul").each(function(index){
      if (dislayScreen >= 992) {
        $(this).find("ul").addClass('hidden');
      }      
    $(this).attr("id","rootLayer"+(index+1)).addClass("SearchMapLv1"); 
    $("#rootLayer"+(index+1)+">li>ul").each(function(i){
      $(this).attr("id","rootLayer"+(index+1)+"-"+(i+1)).addClass("SearchMapLv2");
    });
    })

    $(".fjs-item").on("click", function(e) {
      e.stopPropagation();
      //active clicked button
      $("#searchMap>ul .active").removeClass('active');
      $(this).addClass('active');
      $(this).parents('li').addClass('active');


      var textBackButton = $(this).attr('id');
      CategoryNameStorage.push(textBackButton);

      //open child categories
      $(this).parent().children().each(function() {
        // $(this).toggleClass('hidden',$(this).hasClass('active'));
        if($(this).hasClass('active')){
          $(this).children('ul').removeClass('hidden');
        }else {
          $(this).children('ul').addClass('hidden');
        }
      });
      
      //====MOBILE=====
      if (dislayScreen < 992) {
        if($(this).parent().hasClass('SearchMapLv1')){
          $('#searchMap').css()
        }
    });

  }

  

  // $("#searchMap>ul>li").each(function(){
  //   $(this).addClass("SearchMapLv1"); 
  //   $(".SearchMapLv1>ul>li").each(function(){
  //     $(this).addClass("SearchMapLv2");
  //   });
  // })
  // function initFinderUI(data) {
  //   var treeMap = $("#treeMap");
  //   var screenMobile = $(window).width();
  //   var CategoryNameStorage = ["Select a category"];

  //   var f = finder(treeMap.get(0), data, {});
  //   f.on("leaf-selected", function(item) {
  //     console.log("Leaf selected", item); //Print out data which contain in lv3
  //   });

  //   if (screenMobile < 992) {
  //     $("#treeMap").on("click", ".fjs-item", function() {
  //       var textBackButton = $(this).text();

  //       //only execute under 3 level categories
  //       if(CategoryNameStorage.length <3){ 
  //         $(this).parents(".fjs-col").addClass("hidden");
  //         CategoryNameStorage.push(textBackButton);
  //         console.log(CategoryNameStorage);
  //         console.log(CategoryNameStorage.length);
  //         $("#category-title").text(CategoryNameStorage[CategoryNameStorage.length - 1]);
  //       }

  //       //change text of back-button       
  //       $(".back-icon").toggleClass(
  //         "hidden",
  //         textBackButton === "Select a category"
  //       );
  //     });

  //     //backing treeMap button
  //     $("#wrap-category-title").on("click", "#category-title", function() {
  //       var categoryLv1 = $(".fjs-col").eq(0);
  //       var categoryLv2 = $(".fjs-col").eq(1);
  //       var categoryLv3 = $(".fjs-col").eq(2);
  //       if (categoryLv2.length && !categoryLv2.hasClass("hidden")) {
  //         CategoryNameStorage.pop();
  //         console.log(CategoryNameStorage);

  //         categoryLv2.addClass("hidden");
  //         categoryLv1.removeClass("hidden");
  //         $("#category-title").text(
  //           CategoryNameStorage[CategoryNameStorage.length - 1]
  //         );
  //         $(".back-icon").addClass("hidden");
  //       }
  //       if (categoryLv3.length && !categoryLv3.hasClass("hidden")) {
  //         CategoryNameStorage.pop();
  //         console.log(CategoryNameStorage);

  //         categoryLv3.addClass("hidden");
  //         categoryLv2.removeClass("hidden");
  //         $("#category-title").text(
  //           CategoryNameStorage[CategoryNameStorage.length - 1]
  //         );
  //       }
  //     });
  //     //Modal has been removed when screen is mobile (<992px)
  //     $("button,#suggestion-button").removeAttr("data-toggle");

  //   } else {
  //     //change position of "content suggestions" component on Desktop view
  //     $("#treeMap").on("click", ".fjs-item", function() {
  //       var colNumber = $(".fjs-col").length;
  //       switch (colNumber) {
  //         case 2:
  //           $(".missing-content").addClass("missing-content-position-1");
  //           break;
  //         case 3:
  //           $(".missing-content").addClass("missing-content-position-2");
  //           break;
  //       }
  //     });
  //   }
  // }

});


//Hints
// History: {
//   "akjsdaksjd": ["item1", "item1.2", "item1.2.1"]
// }

// <li id="akjsdaksjd"><a></a> <ul /></li>