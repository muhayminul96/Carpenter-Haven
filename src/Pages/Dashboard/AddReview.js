import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { serverUrl } from "../../helper";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }



  const handleReview = (event) => {
    event.preventDefault();
    const reviewText = event.target.reviewText.value;
    const rating = event.target.rating.value;
    const picture =
      "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png";
    const name = user.displayName;
    const review = { reviewText, rating, name, picture };
    console.log(review);

    fetch(`${serverUrl}review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("thanks for review");
      });
  };
  return (
    <div className="mb-24 w-64 lg:w-96 mx-auto  overflow-hidden">
      <h2 className="text-xl my-6 font-bold text-primary">Add review</h2>
      <form onSubmit={handleReview} className="">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Review</span>
          </label>
          <label className="input-group">
            <span>Review</span>
            <input
              type="text"
              name="reviewText"
              placeholder="Your Review"
              required
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Rating </span>
          </label>
          <label className="input-group">
            <span>Rating</span>
            <select
              class="select select-bordered w-full max-w-xs"
              name="rating"
            >
              <option selected value={5}>
                {" "}
                5 Star{" "}
              </option>
              <option value={4}>4 Star</option>
              <option value={3}>3 Star</option>
              <option value={2}>2 Star</option>
              <option value={1}>1 Star</option>
            </select>
          </label>
        </div>
        <div className="form-control py-2 my-10">
          <label className="input-group">
            <input
              type="submit"
              value="Submit Review"
              className="btn btn-lg w-full"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
