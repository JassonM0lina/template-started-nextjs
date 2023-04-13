import React from "react";
import { Card, CardContent, Typography, Button, Grid, Divider, Box } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import user1 from "../../../assets/images/backgrounds/u6.png";
import user2 from "../../../assets/images/backgrounds/u8.jpg";
import user3 from "../../../assets/images/backgrounds/u7.jpg";
import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";
import img3 from "../../../assets/images/users/3.jpg";


const blogs = [
  {
    img: user1,
    title: "Alfresco Software",
    subtitle:
      " Accedido ultima vez el 10 de abril del 2023.",
    btncolor: "primary",
  },
  {
    img: user2,
    title: "Vista Integral 360°",
    subtitle:
      " Accedido ultimavez vez el 5 de abril del 2023.",
    btncolor: "primary",
  },
  {
    img: user3,
    title: "Zona Franca Software",
    subtitle:
      " Accedido ultima vez el 8 de abril del 2023.",
    btncolor: "primary",
  },
];

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image src={blog.img} alt="img" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h2.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                <FeatherIcon icon="clock" width="20" height="20" />
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Acceder
              </Button>
              <Box
                  gap={1}
                  sx={{
                    mt: 3,
                  }}
                >
              </Box>
              <Divider />
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                sx={{
                  mt: 3,
                }}
              >
                <Image
                  src={img1}
                  alt="blog"
                  width="40"
                  height="40"
                  className="roundedCircle"
                />

                <Image
                  src={img2}
                  alt="blog"
                  width="40"
                  height="40"
                  className="roundedCircle"
                />

                <Image
                  src={img3}
                  alt="blog"
                  width="40"
                  height="40"
                  className="roundedCircle"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
