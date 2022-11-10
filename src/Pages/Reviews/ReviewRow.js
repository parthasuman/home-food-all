import React from "react";

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
  const {
    _id,
    customer,
    email,
    rating,
    photoURL,
    message,
    serviceName,
    status,
  } = review;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{customer}</div>
          </div>
        </div>
      </td>
      <td>
        {message}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{rating}</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default ReviewRow;
