import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/background-various-construction-tools-building-tools-repair-set-black-background-top-view-copy-space-background-various-186406779.jpg)",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello Hero</h1>
            <p class="mb-5 text-xl">
              You are almost indispensable in the construction sector. As a
              result, we strive to provide you with the greatest tools possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
