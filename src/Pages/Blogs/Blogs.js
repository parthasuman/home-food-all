import React from "react";

const Blogs = () => {
  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold text-center">This is blogs pages</h2>
      <h2 className="text-2xl font-semibold">
        Difference between sql and nosql ?
      </h2>
      <p>
        SQL databases are relational, NoSQL databases are non-relational.
        <br></br>
        SQL databases use structured query language and have a predefined
        schema. NoSQL databases have dynamic schemas for unstructured data.
        <br></br>
        SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable.<br></br>
        SQL databases are table-based, while NoSQL databases are document,
        key-value, graph, or wide-column stores.<br></br>
        SQL databases are better for multi-row transactions, while NoSQL is
        better for unstructured data like documents or JSON.
      </p>
    </div>
  );
};

export default Blogs;
