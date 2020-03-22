import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import { testData } from "./components/ContactForm";
import { act } from "react-dom/test-utils";

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

test("tests submit functionality", async () => {
  const container = render(<App />);

  const firstNameField = container.getByTestId("firstName");
  const lastNameField = container.getByTestId("lastName");
  const emailField = container.getByTestId("email");
  const messageField = container.getByTestId("message");

  const submitButton = container.getByTestId("submit");

  act(() => {
    fireEvent.focus(firstNameField);
    //fireEvent.keyPress(firstNameField, { key: "A", code: 65, charCode: 65 });
    fireEvent.change(firstNameField, { target: { value: "TST" } });

    fireEvent.blur(firstNameField);

    fireEvent.focus(lastNameField);
    //fireEvent.keyPress(lastNameField, { key: "A", code: 65, charCode: 65 });
    fireEvent.change(lastNameField, { target: { value: "HELLO!" } });

    fireEvent.blur(lastNameField);

    fireEvent.focus(emailField);
    //fireEvent.keyPress(emailField, { key: "A", code: 65, charCode: 65 });
    fireEvent.change(emailField, { target: { value: "HELLO!" } });

    fireEvent.blur(emailField);

    fireEvent.focus(messageField);
    //fireEvent.keyPress(messageField, { key: "A", code: 65, charCode: 65 });
    fireEvent.change(messageField, { target: { value: "HELLO!" } });

    fireEvent.blur(messageField);
    console.log(messageField);
    fireEvent.focus(submitButton);
    fireEvent.submit(submitButton);
  });
  // const submitData = await waitForElement(() => {
  //   container.getByTestId("submitData");
  // });

  // expect(submitData).toHaveTextContent(/firstname: A/i);
});
