import {fireEvent, render, screen} from "@testing-library/react"
import Body from "../componentList/Body"
import mockData from "../utils/mockData.json"
import {act} from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(mockData);

        }})
});


it("should render the body component with search buttom", async () =>{

await act(async() => render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
));


const searchbtn = screen.getByRole("button", {name : "Search"});

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, {target: {value:"pizza"}})
fireEvent.click(searchbtn);

const searchCards = screen.getAllByTestId("resCard");
expect(searchCards.length).toBe(4);





});
