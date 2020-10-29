import React from "react";

import { Link } from "react-router-dom";

export default function Congratulation({ data }) {
  return (
    <section className="h-screen flex justify-center flex-col items-center">
      <div className="w-5/12 text-center py-12 mx-auto">
        <img
          src={data?.metadata?.course_thumbnail}
          alt="Success join premium class"
        />
        <h1 className="text-3xl text-gray-900 mt-12">Congratulations</h1>
        <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
          You have successfully joined our{" "}
          <strong>{data?.metadata?.course_name ?? "Class Name"}</strong> class
        </p>
        <Link
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
          to={`/courses/${data.course_id}`}
        >
          Mulai Belajar
        </Link>
      </div>
    </section>
  );
}
