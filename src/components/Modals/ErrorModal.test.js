import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ErrorModal from "./ErrorModal";

const middlewares = [];
const mockStore = configureStore(middlewares);

test("Modal rendered when errorModalShowing is true", () => {
  const initialState = {
    editor: {
      errorModalShowing: true,
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <div id="app">
        <ErrorModal />
      </div>
    </Provider>,
  );

  expect(screen.queryByText("modal.error.heading")).toBeInTheDocument();
  expect(
    screen.queryByText("modal.error.null.message"),
  ).not.toBeInTheDocument();
});

test("Modal not rendered when errorModalShowing is false", () => {
  const initialState = {
    editor: {
      errorModalShowing: false,
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <div id="app">
        <ErrorModal />
      </div>
    </Provider>,
  );

  expect(screen.queryByText("modal.error.heading")).not.toBeInTheDocument();
});

test("Clicking close dispatches close modal action", () => {
  const initialState = {
    editor: {
      errorModalShowing: true,
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <div id="app">
        <ErrorModal />
      </div>
    </Provider>,
  );

  const closeButton = screen.queryByText("modal.close");
  fireEvent.click(closeButton);
  expect(store.getActions()).toEqual([{ type: "editor/closeErrorModal" }]);
});

test("Error message shown", () => {
  const initialState = {
    editor: {
      errorModalShowing: true,
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <div id="app">
        <ErrorModal errorType="someTestError" />
      </div>
    </Provider>,
  );

  expect(
    screen.queryByText("modal.error.someTestError.message"),
  ).toBeInTheDocument();
});

test("Additional closeModal function fired", () => {
  const initialState = {
    editor: {
      errorModalShowing: true,
    },
  };
  const store = mockStore(initialState);
  const testOnClose = jest.fn();

  render(
    <Provider store={store}>
      <div id="app">
        <ErrorModal additionalOnClose={testOnClose} />
      </div>
    </Provider>,
  );

  const closeButton = screen.queryByText("modal.close");
  fireEvent.click(closeButton);
  expect(testOnClose).toHaveBeenCalledTimes(1);
});
