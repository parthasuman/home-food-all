import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewRow from "./ReviewRow";

const Reviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("home-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((review) => review._id !== id);
          const approving = reviews.find((review) => review._id === id);
          approving.status = "Approved";
          const newReviews = [...remaining, approving];
          setReviews(newReviews);
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl">You Have {reviews.length} reviews</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Message</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
