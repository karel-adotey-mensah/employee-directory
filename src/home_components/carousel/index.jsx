import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Box from "@material-ui/core/box";
import Paper from "@material-ui/core/paper";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

const HomeCarousel = () => {
  const turnOff = () => false;

  return (
    <Box width={768} height={512} mx="auto" mt={7} mb={2}>
      <Paper variant="outlined">
        <Box p={0}>
          <Carousel
            autoPlay
            infiniteLoop={true}
            renderThumbs={turnOff}
            renderIndicator={turnOff}
            showStatus={false}
            showArrows={false}
          >
            <div>
              <img src={img1} alt="1" />
            </div>
            <div>
              <img src={img2} alt="2" />
            </div>
            <div>
              <img src={img3} alt="3" />
            </div>
            <div>
              <img src={img4} alt="4" />
            </div>
            <div>
              <img src={img5} alt="5" />
            </div>
          </Carousel>
        </Box>
      </Paper>
    </Box>
  );
};

export default HomeCarousel;
