// https://observablehq.com/@d3/collision-detection/2@95

const container = d3.select('#scrolly-side');
const stepSel = container.selectAll('.step');


function updateChart(index) {
    export default function define(runtime, observer) {
      const main = runtime.module();
    //   main.variable(observer()).define(["md"], function(md){return(
    // md`# Collision Detection
    //
    // This example uses [d3.forceCollide](https://github.com/d3/d3-force/blob/master/README.md#collision) to prevent circles from overlapping.`
    // )});
      main.variable(observer("chart")).define("chart", ["DOM","width","height","data","d3","invalidation","color"], function(DOM,width,height,data,d3,invalidation,color)
    {
      const context = DOM.context2d(width, height);
      const nodes = data.map(Object.create);

      const simulation = d3.forceSimulation(nodes)
          .alphaTarget(0.3) // stay hot
          .velocityDecay(0.1) // low friction
          .force("x", d3.forceX().strength(0.03))
          .force("y", d3.forceY().strength(0.03))
          .force("collide", d3.forceCollide().radius(d => d.r + 1).iterations(3))
          .force("charge", d3.forceManyBody().strength((d, i) => i ? 0 : -width * 2 / 3))
          .on("tick", ticked);

      d3.select(context.canvas)
          .on("touchmove", event => event.preventDefault())
          .on("pointermove", pointed);

      invalidation.then(() => simulation.stop());

      function pointed(event) {
        const [x, y] = d3.pointer(event);
        nodes[0].fx = x - width / 2;
        nodes[0].fy = y - height / 2;
      }

      function ticked() {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        for (const d of nodes) {
          context.beginPath();
          context.moveTo(d.x + d.r, d.y);
          context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
          context.fillStyle = color(d.group);
          context.fill();
        }
        context.restore();
      }

      return context.canvas;
    }
    );
      main.variable(observer("data")).define("data", ["width","d3","n"], function(width,d3,n)
    {
      // n = 2
      // const k = width / 200;
      // // const r = d3.randomUniform(k, k * 4);
      // console.log(Array.from({length: 100}, (_, i) => ({r: 21, group: i && (i % n + 5)})))
      // return Array.from({length: 100}, (_, i) => ({r: 21, group: i && (i % n + 5)})); // i && (i % n + 5)

      // var data = [{r: 21, group: 1}, {r: 21, group: 2}, {r: 21, group: 2}, {r: 21, group: 1}, {r: 21, group: 2}, {r: 21, group: 2}];
      var data = []
      var i;
      for (i = 0; i < 100; i++) {

        if(i < index) { var group = 1;}
        else {var group = 2;}
        // const k = width / 200;
        // const r = d3.randomUniform(k, k * 4);
        data.push({r: 10, group: group}) // r()
      }

      console.log(data);

      return data
    }
    );
      main.variable(observer("n")).define("n", function(){return(
    4
    )});
      main.variable(observer("color")).define("color", ["d3","n"], function(d3,n){return(
    d3.scaleOrdinal(d3.range(n), ["transparent"].concat("#c30771", "#005f87"))
    )});
      main.variable(observer("height")).define("height", ["width"], function(width){return(
    width
    )});
      main.variable(observer("d3")).define("d3", ["require"], function(require){return(
    require("d3@6")
    )});
      return main;
    }
  }

  function init() {
    Stickyfill.add(d3.select('.sticky').node());

    enterView({
      selector: stepSel.nodes(),
      offset: 0.5,
      enter: el => {
        const index = +d3.select(el).attr('data-index');
        updateChart(index);
      },
      exit: el => {
        let index = +d3.select(el).attr('data-index');
        index = Math.max(0, index - 1);
        updateChart(index);
      } });

  }

  init();
