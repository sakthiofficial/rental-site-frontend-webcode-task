import Catalog from "./catalog/Catalog";
import { Greet } from "./Greetings/Greet";
import { Stripe } from "./payments/stripe";
import MaterialUIPickers from "./product_pages/DatePicker";

export function About() {
    return (
        // <div className="about_page" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        //     <h4>Sorry This Page Is Currently Not Avalable</h4>


        // </div>
        <div>
            <Catalog />
        </div>
    );
}
