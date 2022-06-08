import React, { PropsWithRef, SyntheticEvent, useState } from "react";
import { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Product } from "../interfaces/product";
import Products from "./Products";
import Wrapper from "./Wrapper";

const ProductsEdit = (props: PropsWithRef<any>) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();


  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(title, image);

    await fetch(`http://localhost:8000/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        image,
      }),
    });

    setRedirect(true);
  };

  React.useEffect(() => {

    if (redirect) {
      navigate('/admin/products');
      setRedirect(false);
    }


    (
      async () => {
        const response = await fetch(`http://localhost:8000/api/products/${id}`);

        const product: Product = await response.json();

        setImage(product.image);
        setTitle(product.title);
      }
    )();

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
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            defaultValue={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsEdit;
