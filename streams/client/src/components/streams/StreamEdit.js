import React, { useEffect, useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
//import history from "../../history";

const StreamEdit = props => {
  const id = props.match.params.id;
  const [update, setUpdate] = useState("test");
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    console.log("useEffect");
    setUpdate("success");
    return () => {
      console.log("unmounted");
    };
  }, [id]);

  const onSubmit = formValues => {
    props.editStream(props.match.params.id, formValues);
  };

  if (!props.stream) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <h3>Stream Edit</h3>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={_.pick(props.stream, "title", "description")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
