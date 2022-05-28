import React from "react";

const Contracts = () => {
  return (
      <>
              <h1 className="text-4xl my-16 font-bold text-primary"> Contract Us </h1>

    <div class="hero min-h-screen bg-base-200">

      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left py-28">
          <h1 class="text-5xl font-bold">Contract now!</h1>
          <p class="py-6">
            You can contract us and send opinion and you send text to us
          </p>
        </div>
        <div class="divider hidden lg:block divider-horizontal mx-10"></div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xl font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control my-5">
              <label class="label">
                <span class="label-text text-xl font-bold">Your Text</span>
              </label>
              <textarea
                type="text"
                placeholder="Your Text"
                class="input input-bordered h-48"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Contracts;
