function barchart_depth (data) {

    var margin = {top: 30, right: 40, bottom: 40, left: 40},
        width = 660 - margin.left - margin.right,
        height = 260 - margin.top - margin.bottom;
    
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .2, .15);

    var y = d3.scale.linear()
            .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var barchart = d3.select("#barchart_depth").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var json = data;
    var label = json[0].station;
    // console.log(label);
    // console.log("The data is in the barchart function: " + json);
    x.domain(json.map(function(d) { return d['date'] }));
    // x.domain([0, d3.max(json, function(d) { return d['date']; })])
    y.domain([0, d3.max(json, function(d) { return d.depth; })]).nice();

    barchart.append("text")
        .text("Snow Depth Trend for the " + label + " Station (in.)")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("class", "title")
        .attr("text-anchor", "middle");

    barchart.append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    barchart.append("g")
        .attr("class", "yAxis")
        .call(yAxis)
      // ` .append("text"); for axis label
        // .append("text")
        // .attr("transform", "rotate(-90)")
        // .attr("y", -40)
        // .attr("dy", ".71em")
        // .style("text-anchor", "end")
        // .text("Inches");
    
    barchart.selectAll(".bar")
        .data(json)
        .enter().append("rect")
        .attr("class", function (d) {
            //var date = d.date.replace(/\s+/g, '-').toLowerCase();
            var date = date
            return "bar " + date   
        })
        .attr("x", function(d) { return x(d.date); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.depth); })
        .attr("height", function (d) { return height - y(d.depth); });

}

function barchart_density (data) {
    // d3.select("#barchart_density")
    //    .remove();

    var margin = {top: 30, right: 40, bottom: 40, left: 40},
        width = 635 - margin.left - margin.right,
        height = 255 - margin.top - margin.bottom;
    
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .2, .15);

    var y = d3.scale.linear()
            .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var barchart = d3.select("#barchart_density").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var json = data;
    var label = json[0].station;
    // console.log(label);
    // console.log("The data is in the barchart function: " + json[0]['date'], json[1]['date'], json[2]['date'], json[3]['date'], json[4]['date'], json[5]['date'], json[6]['date']);
    x.domain(json.map(function(d) { return d['date'] }));
    // x.domain([0, d3.max(json, function(d) { return d['date']; })])
    // y.domain([0, d3.max(json, function(d) { return d.density; })]).nice();
    y.domain([0, 100]).nice();

    barchart.append("text")
        .text("Snow Density Trend for the " + label + " Station (% water)")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("class", "title")
        .attr("text-anchor", "middle");

    barchart.append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    barchart.append("g")
        .attr("class", "yAxis")
        .call(yAxis);
      // ` .append("text");
    
    barchart.selectAll(".bar")
        .data(json)
        .enter().append("rect")
        .attr("class", function (d) {
            //var date = d.date.replace(/\s+/g, '-').toLowerCase();
            var date = date
            return "bar " + date   
        })
        .attr("x", function(d) { return x(d.date); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.density); })
        .attr("height", function (d) { return height - y(d.density); });

}