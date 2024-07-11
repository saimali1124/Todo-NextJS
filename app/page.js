import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <strong>To-do Application</strong> */}
      <Image
      src="/public/bg.jpg" // Route of the image file
      alt="To-do Image"
      width={500} // Width of the image in pixels
      height={300} // Height of the image in pixels
    />
    </div>
  );
}
