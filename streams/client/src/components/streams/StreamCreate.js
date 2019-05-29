import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
import { getStreamingType, Keywords } from "../../analytics/chartData";

class StreamCreate extends React.Component {
  onSubmit = async formValues => {
    const result = await getStreamingType(formValues);
    this.props.createStream(result);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          formValues={{ title: "", description: "" }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
