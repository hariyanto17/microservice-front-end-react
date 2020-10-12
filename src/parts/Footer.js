import React from "react";

import {Link} from "react-router-dom";

export default function Footer() {
  function submit() {
    // window.open(
    //     `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`
    //   );
  }

  return (
    <footer className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/6">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  API Developer
              </Link>
            </li>
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  Career
              </Link>
            </li>
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  Our Story
              </Link>
            </li>
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  Get Scholarship
              </Link>
            </li>
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  Our Pathskills
              </Link>
            </li>
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  All Features
              </Link>
            </li>
            <li className="mt-2">
              <Link className="text-indigo-500 hover:text-teal-500 hover:underline" href="">
                  Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            SMIK AKBA<br />
            Jl. Perintis Kemerdekaan No.75 <br />
            Makassar, Indonesia <br />
            +6281245773708
          </p>
        </div>
        <div className="w-2/6">
          <h6 className="text-white">Promotions</h6>
          <p className="mt-4 text-indigo-500">
            Submit your email for new updates
          </p>
          <form onSubmit={submit}>
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-6 py-3 mt-6"
              placeholder="Your email addres"
            />
            <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
              Daftar Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-indigo-500">
          2020 Copyright Micro by Hariyanto. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}