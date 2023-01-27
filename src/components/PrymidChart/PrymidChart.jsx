import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import CommonHeading from "../common/CommonHeading";
// import CanvasJSReact from './canvasjs.react';
import {CanvasJSChart} from 'canvasjs-react-charts'
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasChart = CanvasJSReact.CanvasJSChart;
export default function PrymidChart({title}) {
    var dataPoint;
		var total;
  const  options = {
        animationEnabled: true,
        title: {
            text: ""
        },
        legend: {
            horizontalAlign: "right",
            verticalAlign: "center",
            reversed: true,
            color:"#fd06b3"
        },
        data: [{
            type: "pyramid",
            // showInLegend: true,
            legendText: "{label}",
            
            indexLabel: "{label} - {y}",
            toolTipContent: "<b >{label}</b>: {y} <b>({percentage}%)</b>",
            
            dataPoints: [
                { label: "Apply For Internship", y: 2850},
                { label: "Secured Internship", y: 2150},
                { label: "Pending Internship", y: 1900},
                { label: "Completed Internship", y: 950},
               
            ]
        }],
        color:["#fd06b3"],
    }
    //calculate percentage
    dataPoint = options.data[0].dataPoints;
    total = dataPoint[0].y;
    for(var i = 0; i < dataPoint.length; i++) {
        if(i == 0) {
            options.data[0].dataPoints[i].percentage = 100;
        } else {
            options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
        }
    }
  return (
    <Card sx={{ minWidth: 250, borderRadius: 3 }}>
      <CommonHeading Title={title} />
      <Divider />
      <CardContent>
      <CanvasJSChart options = {options}/>
      </CardContent>
    </Card>
  );
}
