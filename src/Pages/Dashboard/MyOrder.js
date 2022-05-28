import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { serverUrl } from "../../helper";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`${serverUrl}myorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    console.log(id);
    fetch(`${serverUrl}order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.deletedCount);
        if (data.deletedCount === 1) {
            console.log(data.deletedCount);
 
          const newMyOrders = myOrders.filter((order) => order._id !== id);
          setMyOrders(newMyOrders);
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl my-16 font-bold text-primary"> All Order </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Qunatity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <tr class="hover">
                <th>{index + 1}</th>
                <td>{myOrder.productName}</td>
                <td>{myOrder.orderQuantity}</td>
                <td>{myOrder?.totalPrice}</td>
                <td>
                  <button class="btn btn-outline btn-primary">Pay</button>
                  <button
                    onClick={() => handleDelete(myOrder._id)}
                    class="btn btn-outline btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
