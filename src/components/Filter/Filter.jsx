import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import SelectInput from "../common/SelectInput";
import { filterData } from "../../data/filterData";
import CommonHeading from "../common/CommonHeading";
export default function Filter({title}) {
  return (
    <Card sx={{ minWidth: 250, borderRadius: 3 }}>
      <CommonHeading Title={title} />
      <Divider />
      <CardContent>
        {filterData.map((item, index) => {
          return (
            <SelectInput
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
