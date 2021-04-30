import ProductCard from "../ProductCard";
import {useState,useEffect} from 'react';


const ProductList = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  
  return (
    <>
      <div className="container mb-5">
        <div className="mb-5">
          <p className={"text-center text-uppercase display-4"}>{props.name}</p>
        </div>
        <div className={" row  ml-4"}>
          {products.map((item, i) => (
            <div
              key={i}
              style={{ textAlign: "center" }}
              className={"col-sm-4 mb-5"}
            >
              <ProductCard
                item={item}
                getProduct={props.getProduct}
                getcartItems={props.getcartItems}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
