import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white ">
      <div className="px-6">
        <div className="flex flex-wrap justify-between py-10 gap-4 mx-auto">
          <div className="col-md-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-sm">
              The IEEE Signal Processing Society is the world's premier
              professional society for signal processing scientists and
              engineers. We are dedicated to advancing the theory and practice
              of signal processing, and to providing our members with the
              resources they need to succeed in their careers.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="list-unstyled text-sm">
              <li>
                <a
                  href="https://signalprocessingsociety.org/"
                  className="text-white hover:underline"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="https://signalprocessingsociety.org/"
                  className="text-white hover:underline"
                >
                  Conferences
                </a>
              </li>
              <li>
                <a
                  href="https://signalprocessingsociety.org"
                  className="text-white hover:underline"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="https://signalprocessingsociety.org/"
                  className="text-white hover:underline"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm">
              IEEE Signal Processing Society
              <br />
              445 Hoes Lane
              <br />
              Piscataway, NJ 08855-1331
              <br />
              USA
              <br />
              (732) 562-5555
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4">
          <div className="w-full">
            <p className="text-sm text-center">
              Copyright © 2024 IEEE Signal Processing Society. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
