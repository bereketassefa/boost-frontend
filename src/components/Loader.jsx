import React from "react";

function Loader() {
  return (
    <>
      <div class="flex w-full  mx-auto overflow-hidden bg-white  shadow-lg animate-pulse ">
        <div class="w-1 bg-gray-300 "></div>

        <div class="w-2/3 p-4 md:p-4">
          {/* <h1 class="w-40 h-2 bg-gray-200 rounded-lg "></h1> */}

          <p class="w-48 h-4 mt-4 bg-gray-200 rounded-lg "></p>

          {/* <div class="flex mt-4 item-center gap-x-2">
            <p class="w-5 h-2 bg-gray-200 rounded-lg "></p>
            <p class="w-5 h-2 bg-gray-200 rounded-lg "></p>
            <p class="w-5 h-2 bg-gray-200 rounded-lg "></p>
            <p class="w-5 h-2 bg-gray-200 rounded-lg "></p>
            <p class="w-5 h-2 bg-gray-200 rounded-lg "></p>
          </div> */}

          <div class="flex justify-between mt-6 item-center">
            <h1 class="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

            <div class="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
