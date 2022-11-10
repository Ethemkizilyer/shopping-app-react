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

const Home = () => {
  const { theme, favorites } = useContext(ThemeContext);
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  // const [categor, setCategor] = useState([]);
  // const [mye,setMy]=useState([])

  const ethem = async () => {
    const res = await fetch(
      "https://example-data.draftbit.com/products?_limit=50"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res = res.map((item) => (item = { ...item, adet: 1 }));
        // res?.map((item)=>mye?.includes(item?.category) || setMy([...mye,item?.category]) );
        return setProductData(res);
      });
  };

  // console.log(categor)
  // [...favorites,data]
  //  console.log(productData);
  useEffect(() => {
    ethem();
  }, []);
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Bakarlar
          </h1>
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
              placeholder="Search"
              value={searchInput}
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
