import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import SelectInput from "../common/SelectInput";
import { filterData } from "../../data/filterData";
import CommonHeading from "../common/CommonHeading";
import Prymid from "./Prymid"
export default function Filter({title}) {
  return (
    <Card sx={{ minWidth: 250, borderRadius: 3 }}>
      <CommonHeading Title={title} />
      <Divider />
      <CardContent>
        <Prymid/>
      </CardContent>
    </Card>
  );
}
