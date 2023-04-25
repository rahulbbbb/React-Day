import ProductCard from './components/productcard';
import './components/productcard.css'


function App() {
  return (
    <div className="card-container">
     <ProductCard
         productId ="1"
         image="https://m.media-amazon.com/images/I/6156upwZ+XL._UY695_.jpg"
         productName ="Shoes"
         Brand ="Mico"
         productDescription ="The new sneakers are comfortable and stylish."
         Price ="$50"
         
      />
      <ProductCard
         productId ="2"
         image="https://m.media-amazon.com/images/I/71On2XSPuRL._AC_UL600_FMwebp_QL65_.jpg"
         productName ="Shirt"
         Brand ="Lymio"
         productDescription ="The cotton T-shirt, soft and breathable."
         Price ="$30"
         AddToCart ="AddToCart"
      />
      <ProductCard
         productId ="3"
         image="https://m.media-amazon.com/images/I/61NiR2F2uML._AC_UY327_FMwebp_QL65_.jpg"
         productName ="Cycle"
         Brand ="MTB"
         productDescription ="Experience the thrill of the ride - cycle"
         
        
         Price ="$20"
      />
      <ProductCard
         productId ="4"
         image="https://m.media-amazon.com/images/I/4163hMQXsQL._AC_UL600_FMwebp_QL65_.jpg"
         productName ="Dumbell"
         Brand ="Strauss"
         productDescription ="Build strength and transform your physique - dumbbells!"
         Price ="$5"
         AddToCart ="AddToCart"
      />
      <ProductCard
         productId ="5"
         image="https://m.media-amazon.com/images/I/61gC+iHYruL._AC_UL600_FMwebp_QL65_.jpg"
         productName ="Football"
         Brand ="Adidas"
         productDescription ="Unleash your inner champion - play football"
         Price ="$10"
         AddToCart="AddToCart"
      />

    </div>
  );
}

export default App;
