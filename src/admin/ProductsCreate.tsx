import React, { SyntheticEvent, useState } from "react";
import { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./Products";
import Wrapper from "./Wrapper";

const ProductsCreate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(title, image);

    await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        image,
      }),
    });

    setRedirect(true);
  };

  // if (redirect) {


  //   return (
  //     <Routes>
  //     <Route path=":/admin/products" element={<Products />} />

  //     </Routes>
  //   );
  // }

  React.useEffect(() => {
    if (redirect) {
      navigate('/admin/products');
      setRedirect(false);
    }
  },[redirect]);

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsCreate;
