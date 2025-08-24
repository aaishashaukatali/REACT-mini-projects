import "./Comments.css";
import { useState } from "react";
import CommentForm from "./CommentForm";

function Comments() {
  let [comments, setComments] = useState([
    {
      username: "@john doe",
      remarks: "Good Code!",
      rating: 5,
    },
  ]);

  function addComments(comment) {
    setComments((currComment) => [...currComment, comment]);
  }
  return (
    <div>
      <h3>All Comments</h3>
      {comments.map((comment, idx) => {
        return (
          <div className="comments" key={idx}>
            <span>
              <i>Comments: </i>
             {comment.remarks}
            </span><br></br>
            <span>
              <i>Rating: </i>
              {comment.rating}
            </span><br></br>
            <span>
              <i>Username: </i>
              {comment.username}
            </span>
          </div>
        );
      })}
     <CommentForm addComments={addComments} />

    </div>
  );
}
export default Comments;
