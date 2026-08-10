import React from "react";
import type { Metadata } from "next";
import HomePage from "./HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://nhakhoatre.vn",
  },
};

export default function Page() {
  return <HomePage />;
}
