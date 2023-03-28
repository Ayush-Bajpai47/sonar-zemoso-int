import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/table";
import { TableName,TableAdjudication,TableStatus, TableLocation, TableDate,tableData } from "../../Assets/Data";
import { makeStyles } from "@material-ui/core/styles";
import "./Maintable.css";
interface Inputprops {
  query: string;
}
const useStyles = makeStyles({
  root: {
    background: "#F2FCFB",
    color: "#17A076",
    border: "1px solid #F2FCFB",
    borderRadius: "4px",
    fontWeight: 500,
    fontSize: "12px",
  },
  yellow: {
    color: "#A08817",
    fontFamily: "Inter",
    background: "#FAF8EB",

    border: "1px solid #FAF8EB",
    borderRadius: "4px",

    fontWeight: 500,
    fontSize: "12px",
  },
});
const Maintable = (props: Inputprops) => {
  const classes = useStyles();
  
  const [data, setdata] = useState(tableData);
  //    const[query,setquery]=useState("")
  let filterdata = data;
  const query = props.query;
  console.log(query);
  if (query) {
    const querystring=query.toString()
    filterdata = tableData.filter((x) =>
      x.name.toLowerCase().includes(querystring.trim().toLowerCase())
    );
  }
  function handleEngageClick(index: number) {
    const newdata = [...data];

    if (newdata[index].adjudication === "-") {
      newdata[index].adjudication = "ENGAGE";
      setdata(newdata);
    } else {
      newdata[index].adjudication = "-";
      setdata(newdata);
    }
  }
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) {
    const newthing = [...data];

    if (newthing[index].status === "CLEAR") {
      newthing[index].status = "CONSIDER";
      e.currentTarget.classList.toggle(classes.yellow);

      setdata(newthing);
    } else {
      newthing[index].status = "CLEAR";
      e.currentTarget.classList.remove(classes.yellow);
      e.currentTarget.classList.add(classes.root);
      setdata(newthing);
    }
  }
  return (
    <Table>
      <thead>
        <tr className="tablehead">
          <th>{TableName}</th>
          <th>{TableAdjudication}</th>
          <th>{TableStatus}</th>
          <th>{TableLocation}</th>
          <th>{TableDate}</th>
        </tr>
      </thead>
      <tbody>
        <>
          {filterdata.map((item, index) => (
            <tr>
              <td className="namefield">{item.name}</td>
              <td key={index}>
                <button
                  className={classes.root}
                  onClick={() => {
                    handleEngageClick(index);
                  }}
                >
                  {item.adjudication}
                </button>
              </td>
              <td key={index}>
                <button
                  className={classes.root}
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                >
                  {item.status}
                </button>
              </td>

              <td className="datafield">{item.location}</td>
              <td className="datafield">{item.date}</td>
            </tr>
          ))}
        </>
      </tbody>
    </Table>
  );
};

export default Maintable;
