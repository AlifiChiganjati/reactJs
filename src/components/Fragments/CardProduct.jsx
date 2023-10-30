import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="flex flex-col justify-between m-3 w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = ({ images }) => {
  return (
    <a href="">
      <img src={images} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = ({ name, children }) => {
  return (
    <div className="h-full px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-sm text-white">{children} </p>
      </a>
    </div>
  );
};

const Footer = ({ price, addToCart, id }) => {
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <span className="text-xl font-bold text-white">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button onClick={() => addToCart(id)} className="bg-blue-600">
        add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
