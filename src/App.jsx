import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;