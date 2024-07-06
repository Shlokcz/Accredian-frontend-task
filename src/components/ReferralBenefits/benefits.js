import React from "react";
import Styles from "./benefits.module.css";

const Benefits = () => {
  const data2 = [
    {
      column1: "Row 1, Column 1",
      column2: "Row 1, Column 2",
      column3: "Row 1 Column 3",
    },
    {
      column1: "Row 2, Column 1",
      column2: "Row 2, Column 2",
      column3: "Row 2 Column 3",
    },
    {
      column1: "Row 3, Column 1",
      column2: "Row 3, Column 2",
      column3: "Row 3 Column 3",
    },
  ];

  const data1 = [
    { row1: "Product Management",
      row2: "Row 2",
      row3: "Row 3", 
      row4: "Row4" ,
    }
  ];

  return (
    <div className={Styles.benefits}>
      <p>
        What are the <span>Referral Benefits</span>
      </p>
      <div className={Styles.tables}>
        {/* Table1 */}
        <table className={Styles.table1}>
          <thead>
            <tr>
              <th>All Programs</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((column, index) => (
              <tr key={index}>
                <td>{column.row1}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Table 2 */}
        <table className={Styles.table2}>
          <thead>
            <tr>
              <th>Programs</th>
              <th>Referrer Bonus</th>
              <th>Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((row, index) => (
              <tr key={index}>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
                <td>{row.column3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={Styles.benefitsBtn}>
        <button>Refer Now</button>
      </div>
    </div>
  );
};

export default Benefits;
