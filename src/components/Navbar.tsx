import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FolderOpen, FlaskConical, Wrench, Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Research", href: "#research", icon: FlaskConical },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-0.5 px-2 py-2 rounded-2xl border transition-all duration-300 ${
          scrolled ? "nav-glass border-border/80 shadow-lg shadow-black/20" : "nav-glass border-border/50"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            className="nav-link-underline flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200 text-[10px] font-display font-medium tracking-wider uppercase"
          >
            <item.icon className="w-3.5 h-3.5" />
            {item.label}
          </button>
        ))}
      </motion.nav>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 right-4 z-50 md:hidden p-3 rounded-xl nav-glass border border-border shadow-lg"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-16 z-40 md:hidden nav-glass border border-border rounded-2xl shadow-xl p-4"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors font-display text-sm"
              >
                <item.icon className="w-4 h-4 text-primary" />
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
