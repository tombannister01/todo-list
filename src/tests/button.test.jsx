import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "../components/Button";

describe("Button", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <Button navigateTo="/example" />
      </BrowserRouter>
    );

    screen.debug();
  });
});
