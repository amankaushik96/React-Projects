import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    console.log("input is ", input);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderGender = ({ input }) => {
    input.type = "radio";
    return (
      <div>
        <input {...input} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <div
          style={{
            top: "0px",
            height: "100%",
            position: "relative",
            border: "1px solid grey",
            padding: "10px 10px 80px 10px",
            borderRadius: "10px"
          }}
        >
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="ui form error"
          >
            <Field
              component={this.renderInput}
              name="title"
              label="Enter Title"
            />
            <Field
              component={this.renderInput}
              name="description"
              label="Enter Description"
            />
            <label
              style={{
                fontSize: "20px",
                paddingBottom: "05px"
              }}
              className="ui field"
            >
              Gender
            </label>
            <div>
              <div>
                <div style={{ float: "left", width: "10%" }}>
                  <label style={{ paddingRight: "10px" }}>Male</label>
                </div>
                <div>
                  <Field
                    style={{ cursor: "pointer" }}
                    component={this.renderGender}
                    type="radio"
                    value="male"
                    name="gender"
                    label="Male"
                  />
                </div>
              </div>
              <div>
                <div style={{ float: "left", width: "10%" }}>
                  <label style={{ paddingRight: "10px" }}>Female</label>
                </div>
                <div>
                  <Field
                    style={{ cursor: "pointer" }}
                    component="select"
                    name="gender"
                    label="Female"
                  >
                    <option value="null" />
                    Select
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                  </Field>
                </div>
              </div>
            </div>
            <button style={{ float: "right" }} className="ui button primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  console.log(formValues);
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a title";
  }
  if (!formValues.description) {
    errors.description = "Please enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
