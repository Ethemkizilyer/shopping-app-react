import React, { useContext } from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { ThemeContext } from "../Context/ThemeProvider";
import { BsCartCheck, BsCartX } from "react-icons/bs";

const Cart = () => {
  const { theme, setFavorites, favorites } = useContext(ThemeContext);

  const ekleCart = (data) => {
    setFavorites((item) => {
      const nam = item.find((im) => im.id === data.id);

      if (nam) {
        return item.map((ite) =>
          ite.id === data.id ? { ...ite, adet: ite.adet + 1 } : ite
        );
      }
      return [...item, { ...data, adet: 1 }];
    });
  };
  const silCart = (data) => {
    setFavorites((item) => {
      return item.reduce((cal, ite) => {
        if (ite.id === data.id) {
          if (ite.adet === 1) return cal;

          return [...cal, { ...ite, adet: ite.adet - 1 }];
        }

        return [...cal, { ...ite }];
      }, []);
    });
  };
  const komple = (data) => {
    setFavorites((item) => {
      return item.filter((ite) => ite.id !== data.id);
    });
  };
  return (
    <Container className="py-4 mt-5">
      <h1
        className={`${
          theme ? "text-light " : "text-light-primary "
        }my-5 text-center`}
      >
        {favorites.length == 0
          ? "Sepetiniz Boş"
          : `Sepetinizde ${favorites.length} Ürün Alınmayı Bekliyor !!!`}
      </h1>
      <Row className="justify-content-center">
        <Table
          responsive="sm"
          striped
          bordered
          hover
          variant={theme ? "dark" : "light"}
          className="mb-5"
        >
          <tbody>
            {favorites.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div
                      style={{
                        background: "white",
                        height: "8rem",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ padding: "0.5rem" }}>
                        <img
                          src={item.image_url}
                          style={{ width: "8rem" }}
                          alt={item.name}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6
                      style={{
                        whiteSpace: "nowrap",
                        width: "14rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </h6>
                  </td>
                  <td>{(item.sale_price * item.adet).toFixed(2)} TL</td>
                  <td>Adet : {item.adet}</td>
                  <td>
                    <Button className="ms-2" onClick={() => silCart(item)}>
                      -
                    </Button>
                    <Button className="ms-2" onClick={() => ekleCart(item)}>
                      +
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => komple(item)}
                      className="ms-2"
                    >
                      Kaldır
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {favorites?.length !== 0 && (
          <Row
            style={{ position: "fixed", bottom: 0 }}
            className={`${
              theme ? "bg-light-black text-light" : "bg-light text-black"
            } justify-content-center w-100`}
          >
            <Col className="py-2">
              <h4>
                Toplam Fiyat:
                {favorites
                  .reduce((acc, item) => acc + item.sale_price * item.adet, 0)
                  .toFixed(2)}{" "}
                TL
              </h4>
            </Col>
            <Col className="p-0 " mf={4}>
              <Button
                variant="danger"
                className="m-2"
                onClick={() => setFavorites([])}
              >
                <BsCartX size="1.7rem" /> Tümünü Sil
              </Button>
              <Button variant="success" className="m-2">
                <BsCartCheck size="1.7rem" />
                Satın Al
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
