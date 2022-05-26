import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
import { serverUrl } from "../../helper";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  console.log(id);
  const { isLoading, data: product } = useQuery("product", () =>
    fetch(`${serverUrl}product/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
      const minimumOrderQuantity = parseInt(product.minimumOrderQuantity)
      const orderQuantity = parseInt(data.orderQuantity)
      const quantity = parseInt(product.quantity)
      console.log(minimumOrderQuantity,orderQuantity,quantity)
      if(orderQuantity >= minimumOrderQuantity){
          if(orderQuantity < quantity){

            // save to order to database
            
          }
          else{
              toast.error('out of stoke')
          }
      }
      else{
          toast.error('please order minimum quantity')
      }
  };

  return (
    <div>
      <h1 className="text-4xl my-16 font-bold text-primary">
        Please Fill This
      </h1>
      <form className="w-48 lg:w-80 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              readOnly
              value={user.displayName}
              className="input input-bordered w-full"
              defaultValue="test"
              {...register("userName")}
            />
          </label>
        </div>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              readOnly
              value={user.email}
              className="input input-bordered w-full"
              defaultValue="test"
              {...register("email")}
            />
          </label>
        </div>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              readOnly
              value={product.name}
              className="input input-bordered w-full"
              defaultValue="test"
              {...register("productName")}
            />
          </label>
        </div>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Order Quantity</span>
          </label>
          <label className="input-group">
            <input
              type="number"
              className="input input-bordered w-full"
              defaultValue={product.minimumOrderQuantity}
              {...register("orderQuantity")}
            />
          </label>
        </div>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Your Address</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              className="input input-bordered w-full"
              defaultValue="Address"
              {...register("address")}
            />
          </label>
        </div>
        <div className="form-control  mx-auto">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              className="input input-bordered w-full"
              defaultValue="Phone Number"
              {...register("phoneNumber")}
            />
          </label>
        </div>

        <div className="form-control py-2 my-10">
          <label className="input-group">
            <input
              type="submit"
              value="Place Order"
              className="btn btn-lg w-full"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Purchase;
