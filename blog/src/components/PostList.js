import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import Userheader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <Userheader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div
        className="ui relaxed divided list"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostAndUsers }
)(PostList);
