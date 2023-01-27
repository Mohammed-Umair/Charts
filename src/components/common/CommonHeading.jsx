import { Box, Divider, Typography } from "@mui/material";
import React from "react";

import IconButton from "@mui/material/IconButton";
import IosShareIcon from "@mui/icons-material/IosShare";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
const CommonHeading = (props) => {
  console.log("props", props);
  return (
    <Box
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h3"
        color="primary.dark"
        sx={{ textAlign: "start", p: "5px 0px 5px 10px" }}
      >
        {props.Title}
      </Typography>
      {props.Title.length >= 8 ? (
        <>
          <Divider sx={{ height: 28 ,position:"absolute", right:190 }} orientation="vertical" />
        <Box sx={{
          diaplay:"flex",
          alignSelf:"flex-end",
          justifyContent
          :"space-between"
        }}>

          <IconButton sx={{ p: "5px", color: "#fd06b3"  }}>
            <CollectionsBookmarkIcon />
          </IconButton>
          <IconButton sx={{ p: "5px", color: "#fd06b3" }}>
            <IosShareIcon />
          </IconButton>
      </Box>
        </>
      ) : null}
    </Box>
  );
};

export default CommonHeading;
