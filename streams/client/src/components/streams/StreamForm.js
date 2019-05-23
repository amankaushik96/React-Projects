import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
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
            <button className="ui button primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
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
