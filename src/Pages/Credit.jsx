import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../Context/ThemeProvider";

const Credit = () => {
  const { theme, favorites } = useContext(ThemeContext);

  return (
    <Container className="py-4 mt-5">
      <h1
        className={`${
          theme ? "text-light " : "text-light-primary "
        }my-5 text-center`}
      >
        {favorites.length == 0
          ? "Sepetiniz Boş"
          : `TOPLAM: ${favorites
              .reduce((acc, item) => acc + item.sale_price * item.adet, 0)
              .toFixed(2)} TL GÜLE GÜLE KULLANIN 🤑`}
      </h1>
    </Container>
  );
};
export default Credit;
