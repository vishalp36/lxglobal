import React from "react";
import BottomNav from "../bottom-nav";
import TopNav from "../header/header-with-link";
import Footer from "../footer";
import FaqContent from "./faq-content";

export default function Faq(props) {
  return (
    <>
      <TopNav />
      <FaqContent />
      <Footer />
      <BottomNav />
    </>
  );
}
