import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const LayoutPublic = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}