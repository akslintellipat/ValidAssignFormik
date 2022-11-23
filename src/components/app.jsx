import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

class App extends Component {
  cities = ["mumbai", "pune", "nashik", "nagpur"];

  render() {
    return (
      <div className="container">
        <h1>User Registeration Form</h1>

        <Formik
          initialValues={{
            username: "",
            userage: 0,
            usermail: "",
            usercity: "Select here",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.username) {
              errors.username = "Required";
            }

            if (typeof values.userage !== "number") {
              errors.userage = "please enter a number";
            } else if (values.userage > 90) {
              errors.userage = "you are too old";
            } else if (values.userage < 18) {
              errors.userage = "you are too young";
            }

            if (!values.usermail) {
              errors.usermail = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.usermail)
            ) {
              errors.usermail = "Invalid email address";
            }

            if (!this.cities.includes(values.usercity)) {
              errors.usercity = "Select city from dropdown";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Your Name
                </label>
                <Field type="text" name="username" className="form-control" />

                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="userage" className="form-label">
                  Your Age
                </label>

                <Field type="number" name="userage" className="form-control" />

                <ErrorMessage
                  name="userage"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="usermail" className="form-label">
                  Your Email Address
                </label>

                <Field type="email" name="usermail" className="form-control" />

                <ErrorMessage
                  name="usermail"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="usercity" className="form-label">
                  Your City
                </label>

                <Field name="usercity" as="select" className="form-control">
                  <option value="Select here">Select here</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="nashik">Nashik</option>
                  <option value="nagpur">Nagpur</option>
                </Field>

                <ErrorMessage
                  name="usercity"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;
