import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import CommonHeading from "../common/CommonHeading";
import { Venn } from "@ant-design/plots";
export default function Internship({ title }) {
  const config = {
    chart: {
      type: "venn",
    },
    data: [
      {
        sets: ["Pharma"],
        size: 12,
        label: "Pharma",
      },
      {
        sets: ["Agriculture"],
        size: 15,
        label: "B",
      },
      {
        sets: ["IT"],
        size: 8,
        label: "C",
      },
      {
        sets: ["Services"],
        size: 9,
        label: "D",
      },
      {
        sets: ["Arts"],
        size: 8,
        label: "E",
      },
      {
        sets: ["Manufacturing"],
        size: 14,
        label: "F",
      },
      
    ],
    setsField: "sets",
    sizeField: "size",
    pointStyle: {
      fillOpacity: 0.85,
    },
    tooltip: {
      enabled: false,
    },
    legend: false,
    label: {
      style: {
        fill: "Black",
        opacity: 0.9,
        fontSize: 18,
        fontWeight: 600,
      },
      rotate: false,
    },
    theme: {
        colors10: [
          '#fc22c5cf',
          '#ff00bf',
          '#fa84dccf',
          '#ff6fdb',
          '#f25eff',
          '#ffa9eaef',
          
        ],
      }
  };

  return (
    <Card sx={{ minWidth: 250, borderRadius: 3 }}>
      <CommonHeading Title={title} />
      <Divider />
      <CardContent>
        <Venn {...config} />
      </CardContent>
    </Card>
  );
}
