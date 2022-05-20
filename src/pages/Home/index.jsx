import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

import "./Home.scss";

const generateDataset = () =>
  Array(10)
    .fill(0)
    .map(() => [Math.random() * 20 + 10, Math.random() * 30 + 10]);

const Home = () => {
  const width = 500;
  const height = 400;
  const padding = 20;

  const [data, setData] = useState(generateDataset());

  const ref = useRef();

  useEffect(() => {
    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d[0]))
      .range([0 + padding, width - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[1])])
      .range([height - padding, 0 + padding]);

    const d3Line = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));

    d3.select(ref.current)
      .select("path")
      .attr("d", (value) => d3Line(data))
      .attr("fill", "none")
      .attr("stroke", "black");

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    d3.select("#xaxis").remove();
    d3.select(ref.current)
      .append("g")
      .attr("transform", `translate(0, ${height - padding})`)
      .attr("id", "xaxis")
      .call(xAxis);

    d3.select("#yaxis").remove();
    d3.select(ref.current)
      .append("g")
      .attr("transform", `translate(${padding}, 0)`)
      .attr("id", "yaxis")
      .call(yAxis);

    //
  }, [data]);

  console.log(data);
  return (
    <section id="d3" className="container">
      <div className="d3">
        <div className="d3__chart">
          <svg ref={ref} id="chart" viewBox="0 0 500 800">
            <path d="" fill="none" stroke="black" strokeWidth="5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
