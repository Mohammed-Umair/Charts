import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Divider, IconButton } from "@mui/material";

import CommonHeading from "../common/CommonHeading";
import { styled } from "@mui/material/styles";
import Person3Icon from "@mui/icons-material/Person3";
import Person2Icon from "@mui/icons-material/Person2";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const BorderLinearProgressGirl = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "white" ? "#fd06b3" : "#fd06b3",
  },
}));

export default function GenderRatio({ title }) {
  return (
    <Card sx={{ minWidth: 250, borderRadius: 3, MaxHeight: 275 }}>
      <CommonHeading Title={title} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            width: "230px",
            lineHeight: 1,
          }}
        >
          <Typography variant="h3" color="primary.dark">
            Total Students
          </Typography>
          <label>25K</label>

          <BorderLinearProgress variant="determinate" value={100} />

          <IconButton
            sx={{
              position: "relative",
              left: "230px",
              top: "-25px",
              color: "blue",
            }}
          >
            <Person3Icon />
            <Typography variant="h6" color="primary.dark">39.11%</Typography>
          </IconButton>
          <label
            style={{
              position: "relative",
              left: "-83px",
              top: "15px",
            }}
          >
            12K
          </label>

          <BorderLinearProgressGirl
            variant="determinate"
            value={80}
            sx={{
              "& .css-1f78966-MuiLinearProgress-root.MuiLinearProgress-colorPrimary":
                {
                  backgroundColor: "#fff !important",
                },
            }}
          />
          <IconButton
            sx={{
              position: "relative",
              left: "230px",
              top: "-25px",
              color: "#fd06b3",
            }}
          >
            <Person2Icon />
            <Typography variant="h6" color="primary.dark">28.02%</Typography>
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "230px",
            lineHeight: 1,
          }}
        >
          <Typography variant="h3" color="primary.dark">
            Onboarded Students
          </Typography>
          <label>2.5M</label>

          <BorderLinearProgress variant="determinate" value={100} />

          <IconButton
            sx={{
              position: "relative",
              left: "230px",
              top: "-25px",
              color: "blue",
            }}
          >
            <Person3Icon />
            <Typography variant="h6" color="primary.dark">39.11%</Typography>
          </IconButton>

          <label
            style={{
              position: "relative",
              left: "-83px",
              top: "15px",
            }}
          >
            1.2M
          </label>

          <BorderLinearProgressGirl
            variant="determinate"
            value={80}
            sx={{
              "& .css-1f78966-MuiLinearProgress-root.MuiLinearProgress-colorPrimary":
                {
                  backgroundColor: "#fff !important",
                },
            }}
          />
          <IconButton
            sx={{
              position: "relative",
              left: "230px",
              top: "-25px",
              color: "#fd06b3",
            }}
          >
            <Person2Icon />
            <Typography variant="h6" color="primary.dark">28.02%</Typography>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
