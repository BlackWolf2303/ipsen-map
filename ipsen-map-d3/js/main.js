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
jQuery(function($) {});


//D3


var w = 1110,
  h = 1000,
  node,
  link,
  root;

 

var force = d3.layout
  .force()
  .on("tick", tick)
  .charge((d) => -radius(d) * 20)
  .friction(0.8)
  .gravity(0.05)
  .linkStrength(0.5)
  .linkDistance(function(d) {
    return d.target._children ? 200 : 150;
  })
  .size([w, h -160])
  
  // .force("box_force", box_force);


var svg = d3
  .select("#searchMap")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

//connect data json file
d3.json("./data/data.json", function(error, data) {
if (error) throw error;
root = data[0]; //set root node
collapseAll(root);
root.fixed = true;
root.x = w / 2 + 180;
root.y = h / 2 - 180; //node position
update();
console.log(root);
});

// root = data[0]; //set root node
// console.log(root);
// root.fixed = true;
// root.x = w / 2;
// root.y = h / 2; //node position
// update();

function update() {
  var nodes = flatten(root),
    links = d3.layout.tree().links(nodes);

  // Restart the force layout.
  force
    .nodes(nodes)
    .links(links)
    .start();

  // Update the links…
  link = svg.selectAll(".link").data(links);

  // Enter any new links.
  link
    .enter()
    .insert("svg:line", ".node")
    .attr("class", "link")
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });

  // Exit any old links.
  link.exit().remove();

  // Update the nodes…

  node = svg.selectAll("circle.node").data(nodes, function(d){
    return d.label;
  })
  
  // .style("fill", color); //change node color after click

  node.transition().attr("r", radius);
  
  // Enter any new nodes.
  node
    .enter().append("svg:circle").attr("class", "node")
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr("r", radius)
    .style("stroke-width", function(d){
      if(d.id=="root"){
        return 2;
      }
    })
    .style("fill", color).on("click", click).call(force.drag);
  // Exit any old nodes.
  node.exit().remove();


  //Title
  title = svg.selectAll("text.title")
  .data(nodes, d => d.label);
  // Enter any new titles.
  title.enter()
  
  .append("text")
  .attr("x", 0)
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .attr("alignment-baseline","middle")
  .attr("class", "title")
  .style("fill","white")

  title.selectAll("tspan.text")
  .data(function(d){
    if(d.id != "root"){
      return d.label.split(" ");
    }
    return d.label.split("\n");
  })
  .enter()
  .append("tspan")
  .attr("class", "text")
  .text(d => d)
  .attr("x", 20)
  .attr("dx", 10)
  .attr("dy", 18);
  
  
  svg.select("text.title").style("fill","black");//fill color at the first node
  // Exit any old titles.
  title.exit().remove();
}


function tick() {
  link
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  node
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    // .attr("cx", function(d) { return d.x = Math.max(radius, Math.min(w - radius, d.x)); })
    // .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(h - radius, d.y)); });
  title.attr("transform", function(d) {
    return "translate(" + (d.x-30) + "," + (d.y-30) + ")";
  });
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
  // if (d._children) {
  //   return d.color;
  // } else {}
    switch (d.color) {
      case "root": //adverb
        return "white";
        break;
      case "lv1": //lightBlue
        return "#003b55";
        break;
      case "lv2": //lightGreen
        return "#26b5c4";
        break;
      case "lv3": //dardOrange
        return "#a2c859";
        break;
      default:
        return "red";
  }
}

function radius(d) {
  switch (d.radius){
    case "root":
      return 70;
      break;
    default:
    return 50;
  }
}

// Toggle children on click.
function click(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.children) {
    collapseAll(d);
} else {
    if (d._parent){
        d._parent.children.forEach(function(e){
            if (e != d){
                collapseAll(e);
            }
        });
    }
  d.children = d._children;
  d._children = null;
}
  update();
}


// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [],
    i = 0;

  function recurse(node) {
    if (node.children)
      node.size = node.children.reduce(function(p, v) {
        return p + recurse(v);
      }, 0);
    if (!node.id) node.id = ++i;
    nodes.push(node);
    return node.size;
  }

  root.size = recurse(root);
  return nodes;
}

function box_force() { 
  for (var i = 0, n = nodes.length; i < n; ++i) {
    curr_node = nodes[i];
    curr_node.x = Math.max(radius, Math.min(w - radius, curr_node.x));
    curr_node.y = Math.max(radius, Math.min(h - radius, curr_node.y));
  }
}
console.log(node);

function collapseAll(d){
    if (d.children ){
        d.children.forEach(collapseAll);
        d._children = d.children;
        d.children = null;
    }
    else if (d._children){
        d._children.forEach(collapseAll);
    }
  }
function setParents(d, p){
  d._parent = p;
if (d.children) {
    d.children.forEach(function(e){ setParents(e,d);});
} else if (d._children) {
    d._children.forEach(function(e){ setParents(e,d);});
}
}