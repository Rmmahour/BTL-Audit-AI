"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function BasiqForm() {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <Script
        src="https://js-na2.hsforms.net/forms/embed/242830238.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="371299e1-44d5-4eab-bb07-cf9c760665f0"
        data-portal-id="242830238"
      />
    </div>
  );
}
