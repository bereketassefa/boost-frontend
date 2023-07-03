import React from "react";

function TableLoader() {
  return (
    <>
      <section class="bg-white ">
        {[...Array(10)].map((each) => (
          <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 animate-pulse sm:space-y-0 sm:flex-row">
            <p class="w-32 h-2 bg-gray-200 rounded-lg "></p>
            <p class="w-48 h-2 bg-gray-200 rounded-lg "></p>
            <p class="w-64 h-2 bg-gray-200 rounded-lg "></p>
          </div>
        ))}
      </section>
    </>
  );
}

export default TableLoader;
