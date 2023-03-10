import { useContext } from "react";
import { user } from "./App";
import { allproducts } from "./data";
import { Product } from "./product_pages/Product";

export function Home() {
    const [logIn, setlogIn] = useContext(user)
    if (localStorage.getItem("token")) {
        setlogIn(true)
    } else {
        setlogIn(false)

    }

    return (
        <div className="products_page">
            <div className="products_page_banner">
                <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1060&t=st=1674137913~exp=1674138513~hmac=028ec04cdb6d486e737ec105983f149d6bc3728a4d0dc50b6cecb881470bfaec" alt="banner" />

            </div>
            <div className="products_page_text">
                <div className="products_page_text-topic">
                    <p>rental site</p>
                    <h2>WE HAVE  DIFFRENT PRODUCTS TO RENT</h2>
                </div>


            </div>

            <div className="products_page_products">
                {allproducts.map((val, index) => <Product name={val.name} image={val.image} key={`allproduct_${index}`} />)}


            </div>
            <footer>

            </footer>
        </div>
    );
}
