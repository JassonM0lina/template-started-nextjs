import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © 2023 Derechos reservados para {" "}
        <Link href="https://darnelgroup.com/">
          <a>darnelgroup.com</a>
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
