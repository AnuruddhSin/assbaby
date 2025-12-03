import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { items } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-all ${
      isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-babyYellow"
    }`;

  const menuVars = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            BB
          </span>
          <span className="font-bold text-lg text-primary">BabyBliss</span>
        </Link>

        {/* NAV LINKS DESKTOP */}
        <div className="hidden md:flex gap-2">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/products" className={navClass}>Products</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CART ICON */}
          <Link to="/cart" className="relative flex items-center justify-center w-9 h-9 rounded-full bg-babyBlue">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-primary text-white rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>

          {/* AUTH BUTTONS DESKTOP/TABLET */}
          {user ? (
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm">
                Hi, <span className="font-semibold">{user.name}</span>
              </span>
              <button onClick={logout} className="px-3 py-1 rounded-full text-xs bg-gray-100 hover:bg-gray-200">
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex gap-2">
              <Link to="/login" className="px-3 py-1 rounded-full text-xs bg-white border border-primary text-primary">Login</Link>
              <Link to="/register" className="px-3 py-1 rounded-full text-xs bg-primary text-white">Sign up</Link>
            </div>
          )}

          {/* HAMBURGER BUTTON */}
          <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
            ☰
          </button>

        </div>
      </nav>

      {/* MOBILE & TABLET NAV DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            {...menuVars}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[70%] max-w-[320px] bg-white shadow-xl p-5"
          >

            {/* CLOSE BUTTON */}
            <button onClick={() => setOpen(false)} className="text-2xl mb-6">✕</button>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-4">
              <NavLink to="/" className={navClass} onClick={()=>setOpen(false)}>Home</NavLink>
              <NavLink to="/products" className={navClass} onClick={()=>setOpen(false)}>Products</NavLink>
              <NavLink to="/about" className={navClass} onClick={()=>setOpen(false)}>About</NavLink>
              <NavLink to="/contact" className={navClass} onClick={()=>setOpen(false)}>Contact</NavLink>
            </div>

            {/* AUTH (MOBILE) */}
            {user ? (
              <div className="mt-8 flex flex-col gap-3">
                <span className="text-sm font-semibold">Logged in as {user.name}</span>
                <button onClick={logout} className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs">
                  Logout
                </button>
              </div>
            ) : (
              <div className="mt-8 flex flex-col gap-3">
                <NavLink to="/login" onClick={()=>setOpen(false)} className="px-4 py-2 rounded-full border border-primary text-primary text-xs text-center">
                  Login
                </NavLink>
                <NavLink to="/register" onClick={()=>setOpen(false)} className="px-4 py-2 rounded-full bg-primary text-white text-xs text-center">
                  Sign up
                </NavLink>
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
