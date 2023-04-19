function load () {
Create SVG canvas
const svgWidth = 500;
const svgHeight = 500;
const svg = d3.select('body')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// Generate 100 random points
const numPoints = 100;
const randomPoints = Array.from({length: numPoints}, () => ({
  x: Math.random() * svgWidth,
  y: Math.random() * svgHeight
}));

// Create scatter plot
svg.selectAll('circle')
  .data(randomPoints)
  .join('circle')
  .attr('cx', d => d.x)
  .attr('cy', d => d.y)
  .attr('r', 3)
  .attr('fill', 'blue');
   


  //2nd part 
  const ageGroups = {
    "0-9": 0,
    "10-19": 0,
    "20-29": 0,
    "30-39": 0,
    "40-49": 0,
    "50-59": 0,
    "60-69": 0,
    "70+": 0
};
  d3.csv('titanic.csv').then(function(data) {
    // Process and prepare the data
    console.log (data)
    data.forEach(function(d) {
        const age = parseInt(d.Age);
        console.log (d)
        if (age < 10) ageGroups["0-9"]++;
        else if (age < 20) ageGroups["10-19"]++;
        else if (age < 30) ageGroups["20-29"]++;
        else if (age < 40) ageGroups["30-39"]++;
        else if (age < 50) ageGroups["40-49"]++;
        else if (age < 60) ageGroups["50-59"]++;
        else if (age < 70) ageGroups["60-69"]++;
        else ageGroups["70+"]++;
    });
    console.log (ageGroups)
    const pieChartData = Object.entries(ageGroups).map(([key, value]) => {
        return { ageGroup: key, count: value };
    });
    generatePieChart(pieChartData);
});
}
function generatePieChart(data) {
  const width = 500;
  const height = 500;
  const radius = Math.min(width, height) / 2;

  const svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const color = d3.scaleOrdinal()
      .domain(data.map(d => d.ageGroup))
      .range(d3.schemeCategory10);

  const pie = d3.pie()
      .value(d => d.count);

  const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

  const arcs = svg.selectAll(".arc") // Corrected class name
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");
  
  arcs.append("path")
      .attr("fill", d => color(d.data.ageGroup))
      .attr("d", arc);

  arcs.append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text(d => d.data.ageGroup);
}

