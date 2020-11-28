// var dataset = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//
// var svg = d3.select("side-vis")
//             .append("svg")
//             .attr("width", 5000)
//             .attr("height", 1000);
//
// var circles = svg.selectAll("circle")
//                  .data(dataset)
//                  .enter()
//                  .append("circle");
//
//  circles.attr("cx", function(d, i) { return i*5 + 50 ;})
//         .attr("cy", function(d, i) { return ((i%5)*25 + 100);})
//         .attr("r", 10)
//         .attr("fill", 'steelblue'
//           );


//
//
// const container = d3.select('#scrolly-side');
// const stepSel = container.selectAll('.step');
//
// function updateChart(index) {
//   const sel = container.select(`[data-index='${index}']`);
//   const width = sel.attr('data-width');
//   stepSel.classed('is-active', (d, i) => i === index);
//   container.select('.bar-inner').style('width', width);
// }
//
// function init() {
//   Stickyfill.add(d3.select('.sticky').node());
//
//   enterView({
//     selector: stepSel.nodes(),
//     offset: 0.5,
//     enter: el => {
//       const index = +d3.select(el).attr('data-index');
//       updateChart(index);
//     },
//     exit: el => {
//       let index = +d3.select(el).attr('data-index');
//       index = Math.max(0, index - 1);
//       updateChart(index);
//     } });
//
// }
//
// init();
