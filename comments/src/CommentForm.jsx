import { useState } from "react";
import "./CommentForm.css";
function CommentForm({addComments}) {
  let [formData, setFormData] = useState(
    {
      username: "",
      remarks: "",
      rating: "",
    },
  );

  function handleInput(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
     console.log("Submitting:", formData);
    addComments(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: "",
    });
  }

  return (
    <div>
      <br></br>
      <hr></hr>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          placeholder="username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInput}
        />
        <br></br>
        <br></br>
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          placeholder="Add Comments"
          type="text"
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleInput}
        ></textarea>
        <br></br>
        <br></br>
        <label htmlFor="rating">Rating: </label>
        <input
          placeholder="rating"
          type="number"
          id="rating"
          min={1}
          max={5}
          name="rating"
          value={formData.rating}
          onChange={handleInput}
        />
        <br></br>
        <br></br>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CommentForm;
