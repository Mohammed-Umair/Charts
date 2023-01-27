import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Grid } from "@mui/material";

import CommonHeading from "../common/CommonHeading";
import Chart from "react-apexcharts";
import { completionratioData } from "../../data/completionData";
export default function CompletionRatio({ title }) {
  // const data={

  //     series: [67],
  //     options: {
  //       chart: {
  //         height: 350,
  //         type: 'radialBar',
  //         offsetY: -10
  //       },
  //       plotOptions: {
  //         radialBar: {
  //           startAngle: -135,
  //           endAngle: 135,
  //           dataLabels: {
  //             name: {
  //               fontSize: '16px',
  //               color: undefined,
  //               offsetY: 120
  //             },
  //             value: {
  //               offsetY: 76,
  //               fontSize: '22px',
  //               color: undefined,
  //               formatter: function (val) {
  //                 return val + "%";
  //               }
  //             }
  //           }
  //         }
  //       },
  //       fill: {
  //         type: 'gradient',
  //         gradient: {
  //             shade: 'dark',
  //             shadeIntensity: 0.15,
  //             inverseColors: false,
  //             opacityFrom: 1,
  //             opacityTo: 1,
  //             stops: [0, 50, 65, 91]
  //         },
  //       },
  //       stroke: {
  //         dashArray: 4
  //       },
  //       labels: ['Median Ratio'],
  //     },

  //   };
  return (
    <Card sx={{ minWidth: 250, borderRadius: 3 }}>
      <CommonHeading Title={title} />
      <Divider />
      <CardContent>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {completionratioData.map((item, index) => {
              return (
                <Chart
                  key={index}
                  options={item.options}
                  series={item.series}
                  type="radialBar"
                  height={300}
                />
              );
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
