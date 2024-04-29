import "./CartCard.css"
export const CartCard = ({product}) => {
  const{image,name,price}=product;
  return (
  
    <div className="cartCard">
      
      
            <img src={image} alt="" />
            <p>{name}</p>
            <p>${price}</p>
            <button> Remove</button>
   
    </div>

  )
}
