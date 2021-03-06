import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByTestId } = render(<CheckoutForm />)
    getByTestId('header');
});

test("form shows success message on submit with form details", () => {

    const { getByTestId } = render(<CheckoutForm />)

    const checkoutButton = getByTestId('checkout-btn')

    fireEvent.click(checkoutButton)
    getByTestId('successMessage')
});
