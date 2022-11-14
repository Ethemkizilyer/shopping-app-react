import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ThemeContext } from "../Context/ThemeProvider";
import { Button } from "react-bootstrap";

const Desc = () => {
  const { state } = useLocation();

  const { setFavorites } = useContext(ThemeContext);

  const ekleCart = (data) => {
    setFavorites((item) => {
      const nam = item.some((im) => im.id === data.id);

      if (nam) {
        return item.map((ite) =>
          ite.id === data.id ? { ...ite, adet: ite.adet + 1 } : ite
        );
      }
      return [...item, { ...data, adet: 1 }];
    });
  };
  return (
    <div className="w-100 mx-auto text-center d-flex align-items-center justify-content-center h-100">
      <Card
        style={{
          width: "48rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div className="w-50">
          <Card.Img className="border" variant="top" src={state.image_url} />
        </div>
        <div className="w-50 d-flex flex-column">
          <Card.Body>
            <Card.Title className="fw-bolder text-capitalize mb-2">
              {state.name}
            </Card.Title>
            <Card.Text
              style={{ overflow: "auto", height: "10rem", text: "center" }}
            >
              {state.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Marka: {state.brand}</ListGroup.Item>
            <ListGroup.Item>
              Ürün değerlendirmesi :{state.average_product_rating}
            </ListGroup.Item>
            <ListGroup.Item>Yorum sayısı: {state.num_reviews}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link className="btn btn-warning me-2" to="/">
              Geri
            </Link>
            <Button onClick={() => ekleCart(state)}>Sepete Ekle</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Desc;
