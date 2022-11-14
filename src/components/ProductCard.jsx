import { Button, Card } from "react-bootstrap";
import React, { useContext} from "react";
import { ThemeContext } from "../Context/ThemeProvider";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ data }) => {
  let { image_url, sale_price, name,id } = data;
  // const [yut, setYut] = useState([]);
  // const [yu, setYu] = useState([]);
const navigate= useNavigate()

  // console.log(props);
  // const {theme}= useThemeHook()
  const { theme, favorites, setFavorites } = useContext(ThemeContext);

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
    localStorage.setItem("item", JSON.stringify(favorites));

    // let dg = favorites?.filter((item)=> item.id != data.id)
    // dg= (dg.length ==1 && dg.push(data) )
    // console.log(dg)
    // if(favorites.length==0){
    //   setFavorites([data])

    // }else{console.log("2");
    // setFavorites([...favorites,data])
    // setFavorites([...favorites,data])

    //  }
    //  console.log(favorites);
  };

  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-light text-black"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <div
        style={{
          background: "white",
          height: "15rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "inherit",
        }}
      >
        <div
          onClick={() =>
            navigate(`/detail/${id}/${name.split(" ").join("-")}`, {
              state: data,
            })
          }
          style={{ width: "15rem" }}
        >
          <Card.Img variant="top" className="img-fluid" src={image_url} />
        </div>
      </div>

      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Card.Title>
        <Card.Title>
          <span className="h3">{sale_price}</span> TL
        </Card.Title>

        <Button
          variant="primary"
          onClick={() => ekleCart(data)}
          className={`${
            theme ? "bg-dark-primary text-black" : "bg-light-primary"
          }d-flex align-items-center m-auto border-0`}
        >
          <BsCartPlus size="1.8rem" />
          Sepete Ekle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
