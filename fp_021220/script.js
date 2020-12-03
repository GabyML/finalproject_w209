var answer = 0;
var i;

var dataset = []

for (i = 0; i < 100; i++) {
	if(i < answer) { var group = 1;}
	else {var group = 2;}
	dataset.push({r: 10, group: group})}


const svg = d3.select("#side-vis")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%");

var circles = svg.selectAll("circle")
                 .data(dataset)
                 .enter()
                 .append("circle");

 circles.attr("cx", function(d, i) { return i*5 + 50 ;})
        .attr("cy", function(d, i) { return ((i%5)*25 + 100);})
        .attr("r", 10)
        .attr("fill", function(d, i) {
					if(i < answer) { return '#808080'}
					else {return '#00BFFF'}});


var stepColor

function update(answer, stepColor){

	dataset = []

	for (i = 0; i < 100; i++) {
		if(i < answer) { var group = 1;}
		else {var group = 2;}
		dataset.push({r: 10, group: group})}

	const people = svg.selectAll("circle").data(dataset);

	if (stepColor==0){
		people.enter().append('circle')
		.attr("fill", '#00BFFF');

		people.transition()
		.attr("fill", '#00BFFF');

		people.exit()
		.remove()
	}

	if (stepColor==1){
		people.enter().append('circle')
		.attr("fill", function(d, i) {
			if(i < answer) { return '#808080'}
			else {return '#00BFFF'}});

		people.transition()
		.attr("fill", function(d, i) {
			if(i < answer) { return '#808080'}
			else {return '#00BFFF'}});

		people.exit()
		.remove()
	}

	if (stepColor==2){
		people.enter().append('circle')
		.attr("fill", '#3CB371');

		people.transition()
		.attr("fill", '#3CB371');

		people.exit()
		.remove()
	}

	if (stepColor==3){
		people.enter().append('circle')
		.attr("fill", function(d, i) {
			if(i < answer) { return '#DC143C'}
			else {return '#3CB371'}});

		people.transition()
		.attr("fill", function(d, i) {
			if(i < answer) { return '#DC143C'}
			else {return '#3CB371'}});

		people.exit()
		.remove()
	}

	if (stepColor==4){
		people.enter().append('circle')
		.attr("fill", '#DAA520');

		people.transition()
		.attr("fill", '#DAA520');

		people.exit()
		.remove()
	}

	if (stepColor==5){
		people.enter().append('circle')
		.attr("fill", function(d, i) {
			if(i < answer) { return '#CD5C5C'}
			else {return '#DAA520'}});

		people.transition()
		.attr("fill", function(d, i) {
			if(i < answer) { return '#CD5C5C'}
			else {return '#DAA520'}});

		people.exit()
		.remove()
	}


}

// using d3 for convenience
		var container = d3.select('#scroll');
		var graphic = container.select('.scroll__graphic');
		var text = container.select('.scroll__text');
		var step = text.selectAll('.step');

		// initialize the scrollama
		var scroller = scrollama();

		// generic window resize listener event
		function handleResize() {


			// 1. update height of step elements
			var stepHeight = Math.floor(window.innerHeight * 0.75);
			step.style('height', stepHeight + 'px');

			// 2. update width/height of graphic element
			var bodyWidth = d3.select('body').node().offsetWidth;

			var graphicMargin = 16 * 4;
			var textWidth = text.node().offsetWidth;
			var graphicWidth = container.node().offsetWidth - textWidth - graphicMargin;
			var graphicHeight = Math.floor(window.innerHeight /2)
			var graphicMarginTop = Math.floor(graphicHeight / 2)

			graphic
				.style('width', graphicWidth + 'px')
				.style('height', graphicHeight + 'px')
				.style('top', graphicMarginTop + 'px');


			// 3. tell scrollama to update new element dimensions
			scroller.resize();
		}

		// scrollama event handlers
		function handleStepEnter(response) {
			// response = { element, direction, index }

			// add color to current step only
			step.classed('is-active', function (d, i) {

				if(response.index == 0) {
					answer = 0;
				}
				if(response.index == 1) {
					answer = 18;
				}
				if(response.index == 2) {
					answer = 0;
				}
				if(response.index == 3) {
					answer = 9;
				}
				if(response.index == 4) {
					answer = 0;
				}
				if(response.index == 5) {
					answer = 13;
				}

				update(answer, response.index)

				return i === response.index;
			})

			console.log(answer)

			// update graphic based on step
			graphic.select('p').text(response.index + 1);


		}

		function handleContainerEnter(response) {
			// response = { direction }

		}

		function handleContainerExit(response) {
			// response = { direction }
		}

		function setupStickyfill() {
			d3.selectAll('.sticky').each(function () {
				Stickyfill.add(this);
			});
		}

		function init() {
			setupStickyfill();

			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
			handleResize();

			// 2. setup the scroller passing options
			// this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller.setup({
				container: '#scroll',
				graphic: '.scroll__graphic',
				text: '.scroll__text',
				step: '.scroll__text .step',
				debug: false,
				offset: 0.33,
			})

				.onStepEnter(handleStepEnter)
				.onContainerEnter(handleContainerEnter)
				.onContainerExit(handleContainerExit);

			// setup resize event
			window.addEventListener('resize', handleResize);
		}

		// kick things off
		init();
