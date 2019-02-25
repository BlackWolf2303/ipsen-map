//D3

// d3.selectAll('li:nth-child(5n)')
// .style('color','yellow')
// .html('This is an even number')
// .classed('active',true);

// var numArray = [14,24,35,46,58,75,49,89,99,77,65,24,55];
// var ul = d3.select('ul').selectAll('li').data(numArray).text(function(item){
//   return 'this is '+item;
// });
// //Enter
// ul.enter().append('p').text(function(item){ return "no wayyyyy" + item; });
// ul.exit().remove();
// // d3.selectAll('ul li').data(numArray).style('font-size',function(item){
// //   return item+"px";
// // })

//<=======D3 START =========>

//Collapsible Force Layout D3
var width = 960,
    height = 500

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .gravity(0.05)
    .distance(100)
    .charge(-100)
    .size([width, height]);

d3.json("../data/data.json", function(error, json) {
  if (error) throw error;
console.log(json);


  force
      .nodes(json.nodes)
      .links(json.links)
      .start();

  var link = svg.selectAll(".link")
      .data(json.links)
    .enter().append("line")
      .attr("class", "link");

  var node = svg.selectAll(".node")
      .data(json.nodes)
    .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  node.append("image")
      .attr("xlink:href", "https://github.com/favicon.ico")
      .attr("x", -8)
      .attr("y", -8)
      .attr("width", 16)
      .attr("height", 16);

  node.append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(function(d) { return d.name });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});


//<=======JQUERY START =========>
// jQuery(function($) {
//   $('.btn-selected-modal').on('click', function(){
//     $(this).siblings().removeClass('button-active');
//     $(this).addClass('button-active');
//   })

//   $('#searchMap').on('click','.node', function(){  
//       $(this).toggleClass('active');
//   })
  
// });