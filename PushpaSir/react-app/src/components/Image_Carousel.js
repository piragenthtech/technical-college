import Carousel from "react-bootstrap/Carousel";
import porshce_2023_911 from "./images/2023-porsche-911-gt3-rs.jpg";
import porshce_911_gt3rs_1 from "./images/porsche-911-gt3-rs-2022.jpg";
import porshce_911_gt3rs_2 from "./images/porsche-911-gt3-rs-2022-2.jpg";
export default function Image_Carousel() {
  return (
    <div
      style={{
        display: "block",
        margin: "auto",
        // border: "3px solid black",
        justifyContent: "center",
        width: "100%",
        padding: 30,
      }}
    >
      <h4></h4>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="" src={porshce_2023_911} />
          <Carousel.Caption>
            <h3>Porsche </h3>
            <p>GT3 Rs 2023</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="" src={porshce_911_gt3rs_1} />
          <Carousel.Caption>
            <h3>Porsche </h3>
            <p>GT3 Rs 2022</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="" src={porshce_911_gt3rs_2} />
          <Carousel.Caption>
            <h3>Porsche </h3>
            <p>GT3 Rs 2022</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
