import React from "react";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import image from "./brand.jpg";

const Brand = () => {
  const brandImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };
  return (
    <Box py={2} style={brandImage}>
      <Typography variant="h1" align="center">
        PEOPLE AND CULTURE
      </Typography>
      <Typography variant="h6" align="center">
        <b>
          <Box component="span" mr={2}>
            E C H O
          </Box>
          <Box component="span" mr={2}>
            H O U S E
          </Box>
          <Box component="span" mr={2}>
            G H A N A
          </Box>
          <Box component="span" mr={2}>
            L I M I T E D
          </Box>
          <Box component="span" mr={2}>
            H R
          </Box>
          <Box component="span">P O R T A L</Box>
        </b>
      </Typography>
    </Box>
  );
};

export default Brand;
