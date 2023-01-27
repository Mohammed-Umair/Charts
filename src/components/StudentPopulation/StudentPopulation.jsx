import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import CommonHeading from "../common/CommonHeading";
import Chart from "react-apexcharts";
export default function StudentPopulation({ title }) {

  const data={
          
    series: [75],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
      
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: '',
       
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Total Student',"1.5M"],
    },
  
  
  };

 
  return (
    <Card sx={{ minWidth: 250, borderRadius: 3, minHeight: 250 }}>
      <CommonHeading Title={title} />
      <Divider />
      <CardContent>
      <Chart
          options={data.options}
          series={data.series}
          type="radialBar"
          height={300}
        />
      </CardContent>
    </Card>
  );
}
