import { Grid } from "@mui/material";
import BlogCard from "../src/components/dashboard/BlogCard";


export default function Index() {
  return (
     <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
  );
}
