import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Category from "./components/Category";
import MostSC from "./components/MostSC";
import { Separator } from "@radix-ui/react-select";
import InfoSections from "./components/InfoSections";
import Footer from "./components/Footer";
function Home() {
  return (
    <div>
  <Header/>
   <Hero/>
   <Separator/>
   <Category/>
   <MostSC/>
   <InfoSections/>
   <Footer/>
    </div>
  );
}

export default Home;
