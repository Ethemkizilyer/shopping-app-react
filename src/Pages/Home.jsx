import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { ThemeContext } from "../Context/ThemeProvider";
import ProductCard from "../components/ProductCard";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { items } from "../data";
const Home = () => {
  const { theme, favorites } = useContext(ThemeContext);
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);

  const [inter, setInter] = useState(1000);
  const navigate = useNavigate();
  // console.log(items);
  const ethem = () => {
    return setProductData(items?.map((item) => (item = { ...item, adet: 1 })));
    // const res = await fetch(
    //   "https://example-data.draftbit.com/products?_limit=100"
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     res = res.map((item) => (item = { ...item, adet: 1 }));
    //     // res?.map((item)=>mye?.includes(item?.category) || setMy([...mye,item?.category]) );
    //     return setProductData(res);
    //   });
  };

  useEffect(() => {
    ethem();
  }, []);
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <Carousel
            variant="dark"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className={theme ? " text-light mt-5 mb-3" : "text-black mt-5 mb-3"}
          >
            {productData.map((item, index) => (
              <Carousel.Item
                key={index}
                className="position-relative"
                interval={inter}
                onClick={() =>
                  navigate(
                    `/detail/${item.id}/${item.name.split(" ").join("-")}`,
                    {
                      state: item,
                    }
                  )
                }
              >
                <img
                  style={{ height: "13rem" }}
                  className="d-block w-100 mx-auto"
                  src={item.image_url}
                  alt="Third slide"
                />
                <Carousel.Caption
                  style={{ background: "#ffcdd278" }}
                  className="position-absolute bottom-0 text-danger text-justify h-50 d-flex flex-column pb-0 rounded"
                >
                  <h6 className="fw-bolder">{item.brand}</h6>
                  <p style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                    {item.name}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* <select name="" id="">
            {mye && mye?.map((item)=><option>{item}</option>)}
          </select> */}
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme ? "bg-light text-light-primary" : "bg-dark text-light"
              }
            >
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <FormControl
              className={
                theme ? "bg-light text-light-primary" : "bg-dark text-light"
              }
              placeholder="Search..."
              value={searchInput}
              style={{ boxShadow: "none" }}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Row className="justify-content-center">
          {productData
            ?.filter((item) =>
              item.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((item, i) => (
              <ProductCard searchInput={searchInput} data={item} key={i} />
            ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
