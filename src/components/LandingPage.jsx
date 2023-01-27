import {
  Container,
  Grid,
  Box,
  Typography,
  
} from "@mui/material";
import React from "react";
import CompletionRatio from "./CompletionRatio/CompletionRatio";
import Filter from "./Filter/Filter";
import GenderRatio from "./GenderRatio/GenderRatio";
import Internship from "./Internship/Intership";
import PrymidChart from "./PrymidChart/PrymidChart";
import StudentPopulation from "./StudentPopulation/StudentPopulation";
const LandingPage = () => {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ p: 2 }}>
        <Box>
          <Typography
            variant="h3"
            color="primary.dark"
            sx={{ textAlign: "start", p: "5px 0px 5px 10px" }}
          >
            University Malaya
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Filter title="Filters" />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <StudentPopulation title="Student Population" />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <GenderRatio title="Gender Ratio" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <PrymidChart title="Internships " />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Internship title="Internship Industry" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              mt: 2,
            }}
          >
            <CompletionRatio title="Completion Ratio" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
