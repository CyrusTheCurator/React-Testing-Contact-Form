import React, { useState } from "react";
import { useForm } from "react-hook-form";
export let testData = {};
const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });

  const onSubmit = data => {
    console.log(data);
    setData(data);
    testData = data;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 3 })}
            data-testid="firstName"
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
            data-testid="lastName"
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input
            name="email"
            ref={register({ required: true })}
            data-testid="email"
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            ref={register({ required: false })}
            data-testid="message"
          />
        </div>
        {data && (
          <pre
            data-testid="JSON data element"
            style={{ textAlign: "left", color: "white" }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid="submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
