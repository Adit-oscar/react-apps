import Button from "../Elements/Button/Index";

export default function CardProduct({ children }) {
  return (
    <div className="w-full max-w-sm flex flex-col justify-between bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
}

const Header = ({ image, title }) => {
  return (
    <a href="#">
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover rounded-t-md"
      />
    </a>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="h-full px-5 pt-3 pb-4">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)} {title.length > 20 && "..."}
        </h5>
        <p className="text-m text-white">
          {children.substring(0, 50)} {children.length > 50 && "..."}
        </p>
      </a>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex justify-between items-center px-5 pb-4">
      <span className="text-xl font-bold text-white">Rp. {price}</span>
      <Button className="bg-blue-600 font-semibold text-white px-2 py-1 rounded-md">
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
