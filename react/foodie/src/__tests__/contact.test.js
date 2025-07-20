import ContactUs from "../componentList/Contactus"
import {render, screen} from "@testing-library/react";


describe("Contact us page tc", () =>{

    test("Should load contact us component", () =>{

    render(<ContactUs/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load button inside contact us component", () =>{

    render(<ContactUs/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("Should load name inside contact us component", () =>{

    render(<ContactUs/>);
    const name = screen.getByPlaceholderText("name")
    expect(name).toBeInTheDocument();
})

test("Should load all 2 input in contact component", () =>{

    render(<ContactUs/>);
    const inputBoxes = screen.getAllByRole("textbox")
    expect(inputBoxes.length).not.toBe(4);
})

})
