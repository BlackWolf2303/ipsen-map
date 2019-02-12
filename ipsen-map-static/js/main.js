//finderjs
//<=======JQUERY START =========>
jQuery(function($) {
  
 
  $.ajax({
    async: false,
    global: false,
    url: "/data/data.json",
    dataType: "json",
    success: initSearchMapUI
  });
  function initSearchMap(data) {
    var searchMap = "";
    searchMap += '<ul class="fjs-list">';
    $.each(data, function(index, item) {
      searchMap +=
        '<li class="fjs-item fjs-has-children" id="' +
        item.id +
        '"><a><div class="fjs-item-prepend"></div><div class="fjs-item-content">' +
        item.label +
        '</div><div class="fjs-item-append"></div></a>';
      if (item.children) {
        searchMap += initSearchMap(item.children);
      }
      searchMap += "</li>";
    });
    searchMap += "</ul> ";
    return searchMap;
  }
  //innit Search Map
  function initSearchMapUI(data) {
    let CategoryIdStorage = [];
    let ButtonValue = $("#category-title");
    let dislayScreen = $(window).width();


    $("#searchMap").append(initSearchMap(data));
    //add rootLayer id for categories
    $("#searchMap>ul").each(function(index) {
      if (dislayScreen >= 992) {
        $(this)
          .find("ul")
          .addClass("hidden");
      }
      $(this).addClass("SearchMapLv1"); //.attr("id","rootLayer"+(index+1))

      $(".SearchMapLv1>li>ul").each(function() {
        $(this).addClass("SearchMapLv2"); //.attr("id","rootLayer"+(index+1)+"-"+(i+1))
        $(".SearchMapLv2>li>ul").each(function() {
          $(this).addClass("SearchMapLv3");
        });
      });
    });

    $(".fjs-item").on("click", function(e) {
      e.stopPropagation();
      //active clicked button
      $("#searchMap>ul .active").removeClass("active");
      $(this).addClass("active");
      $(this)
        .parents("li")
        .addClass("active");

      //====HANDLE CATEGORY STORAGE=====
      // let categoryId = $(this).attr('id');

      let categoryId = $("#searchMap")
        .find(".active")
        .map(function() {
          return this.id;
        })
        .get();

      //reset Id storage and add new ID
      CategoryIdStorage = [];
      CategoryIdStorage = categoryId;

      console.log(CategoryIdStorage);

      if (dislayScreen >= 992) {
        $(this)
          .parent()
          .children()
          .each(function() {
            // $(this).toggleClass('hidden',$(this).hasClass('active'));
            if ($(this).hasClass("active")) {
              $(this)
                .siblings()
                .children("ul")
                .addClass("hidden");
              $(this)
                .children("ul")
                .toggleClass("hidden");
            }
          });
      }

      //====MOBILE=====
      if (dislayScreen < 992) {
        //transform each category table
        if ($(this).parent().hasClass("SearchMapLv1")) {
          $(this).siblings().children("ul").addClass("hidden");
          $(this).children("ul").removeClass("hidden");
          $("#searchMap").css("transform", "translateX(-155%)");
        }
        if ($(this).parent().hasClass("SearchMapLv2")) {
          $(this).siblings().children("ul").addClass("hidden");
          $(this).children("ul").removeClass("hidden");
          $("#searchMap").css("transform", "translateX(-262%)");
        }
        //change text of back button when click on Map

        let ValueFromId = getValueFromId(data);

        if (ValueFromId != "") {
          ButtonValue.text(ValueFromId);
        }
        //add arrow of back-icon
        if (ButtonValue !== "Select a category") {
          $(".back-icon").removeClass("hidden");
        }
      }
    });

    if (dislayScreen < 992) { 
      
        $("#wrap-category-title").on("click", function(e) {
          if(ButtonValue.text()!="Select a category"){
            let previousCategoryName = getBackButtonNameFromId(data);
            CategoryIdStorage.pop();
            ButtonValue.text(previousCategoryName);
            $("#searchMap").css("transform", "translateX(-155%)");
            
          }
        });
    }



    //======METHOD=========
    function getValueFromId(data) {
      let ValueFromId = "";
      $.each(data, function(index, item) {
        let lastItemCategoryId = CategoryIdStorage[CategoryIdStorage.length - 1];
        if (item.id === lastItemCategoryId) {
          ValueFromId = item.label;
        }
        $.each(item.children, function(indexChild, itemChild) {
          if (itemChild.id === lastItemCategoryId) {
            ValueFromId = itemChild.label;
          }
        });
      });
      return ValueFromId;
    }
    function getBackButtonNameFromId(data) {
      let ValueFromId = "";
      $.each(data, function(index, item) {
        let lastItemCategoryId = CategoryIdStorage[0];
        if (item.id === lastItemCategoryId) {
          ValueFromId = item.label;
        }
        $.each(item.children, function(indexChild, itemChild) {
          if (itemChild.id === lastItemCategoryId) {
            ValueFromId = itemChild.label;
          }
        });
      });
      return ValueFromId;
    }
  }
});

//Hints
// History: {
//   "akjsdaksjd": ["item1", "item1.2", "item1.2.1"]
// }

// <li id="akjsdaksjd"><a></a> <ul /></li>
