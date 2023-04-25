


function ProductCard(props){

    const{productId, image, productName,  Brand,  productDescription, Price}=props

    function handleClick(){
        const message = `Product ${productId} is ${productName} of brand ${Brand} has price ${Price} is added to the cart. Please proceed to pay!`;
          alert(message)
    }
    return(
        
       <>
        
       <div className="card">
       <img src={image} alt={productName}/>
       <div className="card-body">
       <h4 className="card-subtitle">{productName}</h4>
       <h3 className="card-title">{Brand}</h3>
       <p className="card-text">{productDescription}</p>
       <h2 className="price">{Price}</h2>
       
       <button onClick={handleClick}>AddToCart</button>
       </div>
     </div>
     
  </>
       
    );
}

export default ProductCard