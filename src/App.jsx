import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Activities from "./components/Activities";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";

import Footer from "./components/Footer";
import './App.css'

export default function App(){
  return (
    <div className="antialiased text-gray-800 bg-white">
      <Navbar />
      <main className="space-y-12">
        <Hero />
        <About />
        <Activities />
        <Impact />
        <Gallery />
        <Donate />
      
      </main>
      <Footer />
    </div>
  )
}
