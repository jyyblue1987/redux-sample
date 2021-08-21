import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NotFound from "../test_components/NotFound";
import LoginForm from "../test_components/LoginForm";

describe("<NotFound />", () => {
    it("renders header", () => {
      const { getByText } = render(<NotFound path="/abc" />);
      const header = getByText("Page Not Found");
      expect(header).toBeInTheDocument();
    });

    it("renders paragraph", () => {
        const { getByText } = render(<NotFound path="/abc" />);
        const paragraph = getByText(/^Page1/);
        expect(paragraph).toHaveTextContent("Page1 (/abc) Can not be found.");
    });

    it("renders image", () => {
        const { getByAltText } = render(<NotFound path="/abc" />);
        const image = getByAltText("404");
        expect(image).toHaveAttribute(
            "src",
            "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        );
    });
});

describe("Login Form", () => {
    it("submits form when buttion is clicked", () => {
        const obSubmit = jest.fn(e => e.preventDefault());
        const { getByText, getByLabelText } = render(
            <LoginForm onSubmit={obSubmit} />
        );
      
        const button = getByText("Login Button");
        const email = getByLabelText("Email");
        const password = getByLabelText("Password");
      
        fireEvent.change(email, { target: { value: "user@test.com" } });
        fireEvent.change(password, { target: { value: "Test1234" } });
      
        fireEvent.click(button);
              
        expect(obSubmit).toHaveBeenCalledTimes(1);
    });
});
