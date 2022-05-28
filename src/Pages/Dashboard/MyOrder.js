import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { serverUrl } from "../../helper";
import Loading from "../Shared/Loading";

const MyOrder = () => {
    const [user, loading ] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
      fetch(`${serverUrl}myorders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
    }, [user]);
    if (loading) {
        return <Loading></Loading>;
    }
  

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
            {
                myOrders.map((myOrder,index) => 
                    <tr>
              <th>{index+1}</th>
              <td>{myOrder.productName}</td>
              <td>{myOrder.orderQuantity}</td>
              <td>{myOrder?.totalPrice}</td>
              <td>Blue</td>
            </tr>
                    )
            }
            
            
            
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
