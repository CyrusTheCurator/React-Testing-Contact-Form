import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Checks that all input fields are present, properly labeled, and that no duplicates exist", () => {
  const container = render(<App />);

  container.getByTestId("firstName");
  container.getByTestId("lastName");
  container.getByTestId("email");
  container.getByTestId("message");

  container.getByText(/First Name/i);
  container.getByText(/Last Name/i);
  container.getByText(/Email/i);
  container.getByText(/Message/i);
  console.log("All input fields in place and appropriately labeled.");
});

// test("Button Behavior Test", () => {
//   render(<App />);
// });

test("tests submit functionality", () => {
  const container = render(<App />);

  const firstNameField = container.getByTestId("firstName");
  const lastNameField = container.getByTestId("lastName");
  const emailField = container.getByTestId("email");
  const messageField = container.getByTestId("message");

  fireEvent.keyDown(firstNameField, { key: "A", code: 65, charCode: 65 });
  fireEvent.keyDown(lastNameField, { key: "A", code: 65, charCode: 65 });
  fireEvent.keyDown(emailField, { key: "A", code: 65, charCode: 65 });
  fireEvent.keyDown(messageField, { key: "A", code: 65, charCode: 65 });

  const submitButton = container.getByTestId("submit");

  fireEvent.click(submitButton);

  test("tests some THINGS", async () => {
    const JSONdata = await wait(
      () => container.getByTestId("JSON data element"),
      { container }
    );

    expect(JSONdata.innerHTML).tobe({
      firstName: "A",
      lastName: "A",
      email: "A",
      message: "A"
    });
  });
});
