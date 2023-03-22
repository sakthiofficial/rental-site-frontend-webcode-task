import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

export function Stripe({ amount1 }) {
    const navigate = useNavigate()

    const gettoken = (token) => {
        if (token.id) {
            navigate("/rental")

        }

    }
    return (
        <StripeCheckout amount={amount1} token={gettoken} currency="USD" stripeKey='pk_test_51MoVXzSCgHuD2SefSJeprYC4sFbZRu6bVDz9WI63jEnfoxOcu6yN0Ll3J9ifk9GSXXyn13ew0pvQyJ1XJYEPBMN600amHqZEqH' shippingAddress >
            <Button style={{ backgroundColor: "#ffc623" }}>Pay now</Button>
        </StripeCheckout>

    )
}