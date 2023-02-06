import CatalogList from "./CatalogList";
import contactImg from "../assets/catalog-imgs/contact-img.png"

const catalog_details = [
    {
        image: "https://img.freepik.com/free-photo/woman-wearing-sexy-bunny-costume_329181-12859.jpg?t=st=1675668864~exp=1675669464~hmac=126acf37951db451663a6b1f18eee8474cdd5c90e6aa4cf957417534ef3dc3f5",
        text: "Simplify your life and avoid the hassle of maintenance and storage with rental, Experience the best of both worlds with the convenience of ownership and the flexibility of rental.",
        navigate: "/",
        direction: "row",
        btn: "",

    },
    {
        image: "https://img.freepik.com/free-vector/modern-devices-isometric-icons-collection-with-sixteen-isolated-images-computers-periphereals-various-consumer-electronics-illustration_1284-29118.jpg?w=740&t=st=1675680465~exp=1675681065~hmac=89fb297d19d19c7d68b1e511f0d1a32c33deaaf0d5854db96c8b50d9af83a27f",
        text: "Save money by renting the latest models at a fraction of the cost of buying, Discover the latest and greatest products at the the click of a button.",
        navigate: "/items",
        direction: "row-reverse",
        btn: "Purchase"
    },
    {
        image: "https://img.freepik.com/free-photo/young-woman-working-office-with-laptop-headphones-white-wall-customer-service-call-center_231208-8602.jpg?w=996&t=st=1675681825~exp=1675682425~hmac=2da6171e0944e865fe9f796829ef4796e3befefe76e2883e1e37472ee4123f1c",
        text: "Don't hesitate to reach out if you have any questions or need assistance We're always happy to hear from our valued customers. Contact us today!",
        navigate: "/contact",
        direction: "row",
        btn: "Contact us"
    }, {
        image: "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?w=996&t=st=1675683654~exp=1675684254~hmac=c48905d7e6c21592cfeef6f03d3ad3032a1ad565b8839d300271723a9f5870ae",
        text: "Sign up now and discover the joys of shopping with our user-friendly platform Join our community of satisfied customers  ",
        navigate: "/items",
        direction: "column",
        btn: "Join now"
    }
]

export default function Catalog() {
    return (
        <div className="catalog">
            <div className="catalog_title">
                <h2>Enjoy the flexibility of trying new products without committing to a permanent purchase
                </h2>
            </div>
            <div className="catalog_contant">
                {catalog_details.map(val => <CatalogList image={val.image} text={val.text} direction={val.direction} navigate={val.navigate} btn={val.btn} />)}


            </div>
        </div>
    )
};