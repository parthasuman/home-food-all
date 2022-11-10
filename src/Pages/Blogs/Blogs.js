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
      <h2 className="text-2xl font-semibold">
        what is jwt, and how does it work?
      </h2>
      <p>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued.<br></br>
        JWTs differ from other web tokens in that they contain a set of claims.
        Claims are used to transmit information between two parties. What these
        claims are depends on the use case at hand. For example, a claim may
        assert who issued the token, how long it is valid for, or what
        permissions the client has been granted
      </p>
      <h2 className="text-2xl font-semibold">
        what is the difference between javascript and node.js
      </h2>
      <p>
        JavaScript is a simple programming language that can be used with any
        browser that has the JavaScript Engine installed. Node. js, on the other
        hand, is an interpreter or execution environment for the JavaScript
        programming language.
      </p>
      <h2 className="text-2xl font-semibold">
        how does node js handle multiple requests at the same time
      </h2>
      <p>
        {" "}
        NodeJS event loop is single threaded. The entire server architecture for
        NodeJS is not single threaded. Before getting into the Node server
        architecture, to take a look at typical multithreaded request response
        model, the web server would have multiple threads and when concurrent
        requests get to the webserver, the webserver picks threadOne from the
        threadPool and threadOne processes requestOne and responds to clientOne
        and when the second request comes in, the web server picks up the second
        thread from the threadPool and picks up requestTwo and processes it and
        responds to clientTwo. threadOne is responsible for all kinds of
        operations that requestOne demanded including doing any blocking IO
        operations.
      </p>
    </div>
  );
};

export default Blogs;
