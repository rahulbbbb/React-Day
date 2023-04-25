
import ProductCard from "./component/productdetail";
import './component/productdetail.css'

function App() {

  const productDetails = [
    {
        productId :"1",
         image:"https://m.media-amazon.com/images/I/6156upwZ+XL._UY695_.jpg",
         productName :"Shoes",
         Brand :"Mico",
         productDescription :"The new sneakers are comfortable and stylish.",
         Price :"$50"
    },
    {
      productId :"2",
      image:"https://m.media-amazon.com/images/I/71On2XSPuRL._AC_UL600_FMwebp_QL65_.jpg",
      productName :"Shirt",
      Brand :"Lymio",
      productDescription :"The cotton T-shirt, soft and breathable.",
      Price :"$30",
      AddToCart :"AddToCart"
    },
    {
      productId:"3",
      image:"https://m.media-amazon.com/images/I/61NiR2F2uML._AC_UY327_FMwebp_QL65_.jpg",
      productName:"Cycle",
      Brand :"MTB",
      productDescription:"Experience the thrill of the ride - cycle",
      Price :"$20"
    }
  ];
  

  return (
    <div className="card-container">
      {productDetails.map(productDetail => (
        <ProductCard key={productDetail.productId} productDetail={productDetail} />
      ))}
    </div>
  );
}

export default App;
