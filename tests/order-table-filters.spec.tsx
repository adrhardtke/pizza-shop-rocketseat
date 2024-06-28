import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createBrowserHistory, createMemoryHistory } from "history";
import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import {
  createMemoryRouter,
  MemoryRouter,
  Router,
  RouterProps,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { OrderTableFilters } from "@/pages/app/orders/order-table-filters";
import { Orders } from "@/pages/app/orders/orders";
const history = createBrowserHistory({ window });

vi.mock("react-router-dom");

describe.skip("Order Table Filters", () => {
  it("should mount url with corrects filters", async () => {
    // const router = createMemoryRouter(
    //   [
    //     {
    //       path: "/orders",
    //       element: <Orders />,
    //     },
    //   ],
    //   {
    //     initialEntries: ["/orders"],
    //   },
    // );
    // const history = createMemoryHistory();
    // history.push("/orders");
    const user = userEvent.setup();
    // const wrapper = render(
    //   <Router location={"/orders"} navigator={history}>
    //     <OrderTableFilters />
    //   </Router>,
    // );
    // const wrapper = render(<RouterProvider router={router} />);
    // const url = history.location.pathname;
    // const url = window.location.href;
    // const url = router.state.location.pathname;
    // history.push("/orders");
    // const wrapper = render(
    //   <Router>
    //     <OrderTableFilters />
    //   </Router>,
    // );
    // const url = useSearchParams();
    // const wrapper = render(<OrderTableFilters />, {
    //   wrapper: ({ children }) => {
    //     return (
    //       <MemoryRouter initialEntries={["/orders"]}>{children}</MemoryRouter>
    //     );
    //   },
    // });
    const history = createMemoryHistory({
      initialEntries: ["/orders"],
    });
    const wrapper = render(
      <Router location={history.location} navigator={history}>
        <OrderTableFilters />
      </Router>,
    );
    const orderId = 1;
    const customerName = "john";
    const status = "canceled";

    const filterButton = wrapper.getByRole("button", {
      name: "Filtrar resultados",
    });
    const customerNameInput = wrapper.getByPlaceholderText("Nome do cliente");
    await userEvent.type(customerNameInput, customerName);
    await user.click(filterButton);
    // const url = window.location.pathname;
    const url = history.location.pathname;
    // await waitFor(() => screen.getByTestId("location"));

    // Agora você pode buscar o elemento que contém a URL atual e testá-lo
    // const locationElement = screen.getByTestId("location");
    // console.log(locationElement);
    // const url = history.location.pathname;
    // const url = window.location.pathname;
    expect(url).toEqual(
      `http://localhost:3000/orders?orderId=${orderId}&customerName=${customerName}&status=${status}`,
    );
  });
});
