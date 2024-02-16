import React, { useEffect, useState } from "react";

const TableView = () => {
  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  function sortByDate() {
    data.sort((a, b) => {
        if(a.date == b.data){
            return a.views - b.views;
        }
        const numA = a.date.split("-").join("");
        const numb = b.date.split("-").join("");
        return numb - numA;
    });
    setTableData(data);
  }

  function sortByViews(){
    data.sort((a,b) => {
        if(a.views == b.views){
            const numA = a.date.split("-").join("");
            const numb = b.date.split("-").join("");
            return numb - numA;
        }
        return b.views - a.views;

    });
    setTableData(data);
  }

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
