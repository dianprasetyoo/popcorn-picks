import { render, screen, fireEvent } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { DetailPage } from "../../detail";
import { useGlobalContext } from "../../../utils";
import { useDetailService } from "../../../middlewares";

jest.mock("../../../utils", () => ({
  useGlobalContext: jest.fn(),
}));

jest.mock("../../../middlewares", () => ({
  useDetailService: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
}));

describe("DetailPage", () => {
  it("renders the component", () => {
    useDetailService.mockReturnValue({
      detail: {
        isLoading: false,
        isError: false,
        data: {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/1/",
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/",
          ],
          species: [],
          vehicles: [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/",
          ],
          starships: [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/",
          ],
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
          url: "https://swapi.dev/api/people/1/",
        },
      },
    });

    useGlobalContext.mockReturnValue({
      state: {
        cart: [],
      },
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      clearCart: jest.fn(),
      checkout: jest.fn(),
    });

    useLocation.mockReturnValue({
      state: {
        characters: [
          "https://swapi.dev/api/people/1/",
          "https://swapi.dev/api/people/2/",
          "https://swapi.dev/api/people/3/",
          "https://swapi.dev/api/people/4/",
          "https://swapi.dev/api/people/404/",
          "https://swapi.dev/api/people/5/",
          "https://swapi.dev/api/people/6/",
          "https://swapi.dev/api/people/7/",
          "https://swapi.dev/api/people/8/",
          "https://swapi.dev/api/people/9/",
          "https://swapi.dev/api/people/10/",
          "https://swapi.dev/api/people/12/",
          "https://swapi.dev/api/people/13/",
          "https://swapi.dev/api/people/14/",
          "https://swapi.dev/api/people/15/",
          "https://swapi.dev/api/people/16/",
          "https://swapi.dev/api/people/18/",
          "https://swapi.dev/api/people/19/",
          "https://swapi.dev/api/people/81/",
        ],
        planets: [
          "https://swapi.dev/api/planets/1/",
          "https://swapi.dev/api/planets/2/",
          "https://swapi.dev/api/planets/3/",
          "https://swapi.dev/api/planets/404/",
        ],
        starships: [
          "https://swapi.dev/api/starships/2/",
          "https://swapi.dev/api/starships/3/",
          "https://swapi.dev/api/starships/5/",
          "https://swapi.dev/api/starships/9/",
          "https://swapi.dev/api/starships/10/",
          "https://swapi.dev/api/starships/11/",
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/13/",
          "https://swapi.dev/api/starships/404/",
        ],
      },
    });

    render(<DetailPage />);
  });

  it("on add to cart", () => {
    useDetailService.mockReturnValue({
      detail: {
        isLoading: false,
        isError: false,
        data: {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/1/",
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/",
          ],
          species: [],
          vehicles: [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/",
          ],
          starships: [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/",
          ],
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
          url: "https://swapi.dev/api/people/1/",
        },
      },
    });

    useGlobalContext.mockReturnValue({
      state: {
        cart: [],
      },
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      clearCart: jest.fn(),
      checkout: jest.fn(),
    });

    useLocation.mockReturnValue({
      state: {
        characters: [
          "https://swapi.dev/api/people/1/",
          "https://swapi.dev/api/people/2/",
          "https://swapi.dev/api/people/3/",
          "https://swapi.dev/api/people/4/",
          "https://swapi.dev/api/people/404/",
          "https://swapi.dev/api/people/5/",
          "https://swapi.dev/api/people/6/",
          "https://swapi.dev/api/people/7/",
          "https://swapi.dev/api/people/8/",
          "https://swapi.dev/api/people/9/",
          "https://swapi.dev/api/people/10/",
          "https://swapi.dev/api/people/12/",
          "https://swapi.dev/api/people/13/",
          "https://swapi.dev/api/people/14/",
          "https://swapi.dev/api/people/15/",
          "https://swapi.dev/api/people/16/",
          "https://swapi.dev/api/people/18/",
          "https://swapi.dev/api/people/19/",
          "https://swapi.dev/api/people/81/",
        ],
        planets: [
          "https://swapi.dev/api/planets/1/",
          "https://swapi.dev/api/planets/2/",
          "https://swapi.dev/api/planets/3/",
          "https://swapi.dev/api/planets/404/",
        ],
        starships: [
          "https://swapi.dev/api/starships/2/",
          "https://swapi.dev/api/starships/3/",
          "https://swapi.dev/api/starships/5/",
          "https://swapi.dev/api/starships/9/",
          "https://swapi.dev/api/starships/10/",
          "https://swapi.dev/api/starships/11/",
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/13/",
          "https://swapi.dev/api/starships/404/",
        ],
      },
    });

    render(<DetailPage />);

    const button = screen.getByTestId("button-rent");

    fireEvent.click(button);
  });
});
