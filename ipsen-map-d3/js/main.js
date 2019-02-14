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


//<=======JQUERY START =========>
jQuery(function($) {
  
});
//D3
d3.select("#searchMap").append("svg")
	.attr("width", 500)
  .attr("height", 500)
  .style("background-color","yellow");

