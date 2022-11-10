// import React, { useEffect, useState } from "react";
// import { Button, Card } from "react-bootstrap";




// import { BsCartPlus } from "react-icons/bs";



// const Bakar = () => {
//      const [productData, setProductData] = useState([]);
//      const [inpu,setInpu]= useState("")

//      const ethem = async () => {
//        const res = await fetch("https://fakestoreapi.com/products")
//          .then((res) => res.json())
//          .then((res) => setProductData(res));
//      };
// // console.log(productData);



//   useEffect(()=>{
//  ethem()
  
//   },[])
//   return (
//     <div
//       style={{
//         height: "100vh",
//         background: "white",
//         color: "black",
//         marginTop: "10vh",
//       }}
//     >
//       <div>
//         <input type="text" onChange={(e) => setInpu(e.target.value)} />
//         <button style={{ background: "red" }}>Search</button>
//       </div>
//       <div className="d-flex flex-wrap">
//         {productData
//           ?.filter((item) =>
//             item.title.toLowerCase().includes(inpu.toLowerCase())
//           )
//           .map((item) => (
            
//               <Card key={item.id}
//                 style={{ width: "15rem", height: "auto" }}
//                 className={`${
//                   true ? "bg-light-black text-light" : "bg-light text-black"
//                 } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
//               >
//                 <div
//                   style={{
//                     background: "white",
//                     height: "15rem",
//                     overflow: "hidden",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginBottom: "inherit",
//                   }}
//                 >
//                   <div style={{ width: "9rem" }}>
//                     <Card.Img variant="top" className="img-fluid" src={item.image} />
//                   </div>
//                 </div>

//                 <Card.Body>
//                   <Card.Title
//                     style={{
//                       textOverflow: "ellipsis",
//                       overflow: "hidden",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     {item.title}
//                   </Card.Title>
//                   <Card.Title>
//                     Rs. <span className="h3">{item.price}</span>
//                   </Card.Title>

//                   <Button
//                     variant="primary"
//                     // onClick={() => addToCart()}
//                     className={`${
//                       true ? "bg-dark-primary text-black" : "bg-light-primary"
//                     }d-flex align-items-center m-auto border-0`}
//                   >
//                     <BsCartPlus size="1.8rem" />
//                     Add to Cart
//                   </Button>
//                 </Card.Body>
//               </Card>
          
//           ))}
//       </div>
//     </div>
//   );};

// export default Bakar;
