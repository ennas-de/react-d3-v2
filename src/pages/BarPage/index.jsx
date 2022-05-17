import React, { useEffect } from "react";
import BarChart from "../../components/BarComponent";
import axios from "axios";
import "./BarPage.scss";

// For STATIC DATA
// const data = [
//   { year: 1980, efficiency: 24.3, sales: 8949000 },
//   { year: 1985, efficiency: 27.6, sales: 10979000 },
//   { year: 1990, efficiency: 28, sales: 9303000 },
//   { year: 1991, efficiency: 28.4, sales: 8185000 },
//   { year: 1992, efficiency: 27.9, sales: 8213000 },
//   { year: 1993, efficiency: 28.4, sales: 8518000 },
//   { year: 1994, efficiency: 28.3, sales: 8991000 },
//   { year: 1995, efficiency: 28.6, sales: 8620000 },
//   { year: 1996, efficiency: 28.5, sales: 8479000 },
//   { year: 1997, efficiency: 28.7, sales: 8217000 },
//   { year: 1998, efficiency: 28.8, sales: 8085000 },
//   { year: 1999, efficiency: 28.3, sales: 8638000 },
//   { year: 2000, efficiency: 28.5, sales: 8778000 },
//   { year: 2001, efficiency: 28.8, sales: 8352000 },
//   { year: 2002, efficiency: 29, sales: 8042000 },
//   { year: 2003, efficiency: 29.5, sales: 7556000 },
//   { year: 2004, efficiency: 29.5, sales: 7483000 },
//   { year: 2005, efficiency: 30.3, sales: 7660000 },
//   { year: 2006, efficiency: 30.1, sales: 7762000 },
//   { year: 2007, efficiency: 31.2, sales: 7562000 },
//   { year: 2008, efficiency: 31.5, sales: 6769000 },
//   { year: 2009, efficiency: 32.9, sales: 5402000 },
//   { year: 2010, efficiency: 33.9, sales: 5636000 },
//   { year: 2011, efficiency: 33.1, sales: 6093000 },
//   { year: 2012, efficiency: 35.3, sales: 7245000 },
//   { year: 2013, efficiency: 36.4, sales: 7586000 },
//   { year: 2014, efficiency: 36.5, sales: 7708000 },
//   { year: 2015, efficiency: 37.2, sales: 7517000 },
//   { year: 2016, efficiency: 37.7, sales: 6873000 },
//   { year: 2017, efficiency: 39.4, sales: 6081000 },
// ];

const data = [
  { year: 1980, efficiency: 24.3, sales: 3949000 },
  { year: 1985, efficiency: 27.6, sales: 1979000 },
  { year: 1990, efficiency: 28, sales: 7303000 },
  { year: 1991, efficiency: 28.4, sales: 11979000 },
  { year: 1992, efficiency: 27.9, sales: 8213000 },
  { year: 1993, efficiency: 28.4, sales: 3518000 },
  { year: 1994, efficiency: 28.3, sales: 7991000 },
  { year: 1995, efficiency: 28.6, sales: 9620000 },
  { year: 1996, efficiency: 28.5, sales: 8479000 },
  { year: 1997, efficiency: 28.7, sales: 8017000 },
  { year: 1998, efficiency: 28.8, sales: 8985000 },
  { year: 1999, efficiency: 28.3, sales: 4138000 },
  { year: 2000, efficiency: 28.5, sales: 2078000 },
  { year: 2001, efficiency: 28.8, sales: 6352000 },
  { year: 2002, efficiency: 29, sales: 1042000 },
  { year: 2003, efficiency: 29.5, sales: 9556000 },
  { year: 2004, efficiency: 29.5, sales: 5483000 },
  { year: 2005, efficiency: 30.3, sales: 9660000 },
  { year: 2006, efficiency: 30.1, sales: 4762000 },
  { year: 2007, efficiency: 31.2, sales: 2562000 },
  { year: 2008, efficiency: 31.5, sales: 2769000 },
  { year: 2009, efficiency: 32.9, sales: 5402000 },
  { year: 2010, efficiency: 33.9, sales: 5636000 },
  { year: 2011, efficiency: 33.1, sales: 6093000 },
  { year: 2012, efficiency: 35.3, sales: 7245000 },
  { year: 2013, efficiency: 36.4, sales: 3586000 },
  { year: 2014, efficiency: 36.5, sales: 7708000 },
  { year: 2015, efficiency: 37.2, sales: 7517000 },
  { year: 2016, efficiency: 37.7, sales: 6873000 },
  { year: 2017, efficiency: 39.4, sales: 1081000 },
];

// for DYNAMIC DATA
// let data;
// const fetchData = async () => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/todos/37");
//   console.log(res.data);
//   data = res.data;
// };

const BarPage = () => {
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  return (
    <>
      <section className="container">
        <div className="d3">
          <div className="d3__heading">
            <h2>D3 JS Data</h2>
            <hr />
          </div>
          <div className="d3__chart">
            <BarChart data={data} className="d3__chart-svg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BarPage;
