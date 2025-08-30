import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {/* Shop and Learn */}
        <div>
          <h3 className="font-semibold mb-2">Shop and Learn</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Store</li>
            <li className="cursor-pointer hover:underline">Mac</li>
            <li className="cursor-pointer hover:underline">iPad</li>
            <li className="cursor-pointer hover:underline">iPhone</li>
            <li className="cursor-pointer hover:underline">Watch</li>
            <li className="cursor-pointer hover:underline">AirPods</li>
            <li className="cursor-pointer hover:underline">TV &amp; Home</li>
            <li className="cursor-pointer hover:underline">AirTag</li>
            <li className="cursor-pointer hover:underline">Accessories</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Apple Wallet</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Wallet</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Manage Your Apple Account</li>
            <li className="cursor-pointer hover:underline">Apple Store Account</li>
            <li className="cursor-pointer hover:underline">iCloud.com</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Entertainment</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Apple One</li>
            <li className="cursor-pointer hover:underline">Apple TV+</li>
            <li className="cursor-pointer hover:underline">Apple Music</li>
            <li className="cursor-pointer hover:underline">Apple Arcade</li>
            <li className="cursor-pointer hover:underline">Apple Podcasts</li>
            <li className="cursor-pointer hover:underline">Apple Books</li>
            <li className="cursor-pointer hover:underline">App Store</li>
          </ul>
        </div>

        {/* Apple Store */}
        <div>
          <h3 className="font-semibold mb-2">Apple Store</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Find a Store</li>
            <li className="cursor-pointer hover:underline">Genius Bar</li>
            <li className="cursor-pointer hover:underline">Today at Apple</li>
            <li className="cursor-pointer hover:underline">Apple Summer Camp</li>
            <li className="cursor-pointer hover:underline">Ways to Buy</li>
            <li className="cursor-pointer hover:underline">Apple Trade In</li>
            <li className="cursor-pointer hover:underline">Recycling Programme</li>
            <li className="cursor-pointer hover:underline">Order Status</li>
            <li className="cursor-pointer hover:underline">Shopping Help</li>
          </ul>
        </div>

        {/* For Business, Education, Healthcare */}
        <div>
          <h3 className="font-semibold mb-2">For Business</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Apple and Business</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">For Education</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Apple and Education</li>
            <li className="cursor-pointer hover:underline">Shop for Education</li>
            <li className="cursor-pointer hover:underline">Shop for College</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">For Healthcare</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Apple in Healthcare</li>
            <li className="cursor-pointer hover:underline">Health on Apple Watch</li>
          </ul>
        </div>

        {/* Apple Values, About Apple */}
        <div>
          <h3 className="font-semibold mb-2">Apple Values</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Accessibility</li>
            <li className="cursor-pointer hover:underline">Environment</li>
            <li className="cursor-pointer hover:underline">Privacy</li>
            <li className="cursor-pointer hover:underline">Supply Chain</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">About Apple</h3>
          <ul className="space-y-1">
            <li className="cursor-pointer hover:underline">Newsroom</li>
            <li className="cursor-pointer hover:underline">Apple Leadership</li>
            <li className="cursor-pointer hover:underline">Career Opportunities</li>
            <li className="cursor-pointer hover:underline">Investors</li>
            <li className="cursor-pointer hover:underline">Ethics &amp; Compliance</li>
            <li className="cursor-pointer hover:underline">Events</li>
            <li className="cursor-pointer hover:underline">Contact Apple</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t text-xs text-gray-600">
        <p>
          More ways to shop: <a href="#" className="text-blue-600">Find an Apple Store</a> or{" "}
          <a href="#" className="text-blue-600">other retailer</a> near you. Or call
          000800 040 1966.
        </p>

        <div className="flex flex-col md:flex-row justify-between mt-4 space-y-2 md:space-y-0">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <div className="space-x-3">
            <a className="cursor-pointer hover:underline" href="#">Privacy Policy</a>|
            <a className="cursor-pointer hover:underline" href="#">Terms of Use</a>|
            <a className="cursor-pointer hover:underline" href="#">Sales Policy</a>|
            <a className="cursor-pointer hover:underline" href="#">Legal</a>|
            <a className="cursor-pointer hover:underline" href="#">Site Map</a>
          </div>
          <p>India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;