import {render, screen} from "@testing-library/react"
import Floors from "./page"

test("renders Enter No. of Floors in the Building", () => {
  render(<Floors />);
  const Floors_in_the_building = screen.getByText(/Enter No. of Floors in the Building/i) as HTMLElement ;
  expect(Floors_in_the_building).toBeTruthy();
})