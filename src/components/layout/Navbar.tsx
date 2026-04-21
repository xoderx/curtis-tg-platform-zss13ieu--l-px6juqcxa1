import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, Settings, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Travel OS', href: '/travel-os' },
];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-slate-950 rounded flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-950">
            Curtis <span className="text-blue-600">TG</span>
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600',
                location.pathname === link.href ? 'text-blue-600' : 'text-slate-600'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <Link
              to="/admin"
              className={cn(
                "transition-colors p-2 rounded-full",
                location.pathname === '/admin' ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:text-slate-900"
              )}
              title="Admin Portal"
            >
              <Settings size={18} />
            </Link>
            <Button asChild className="bg-slate-950 text-white hover:bg-slate-800 rounded-full px-6 transition-all active:scale-95">
              <Link to="/contact">
                Start Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-slate-100 rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col pt-12">
              <SheetTitle className="text-left text-xl font-display font-bold">Platform Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate through the Curtis Technology Group services, portfolio, and strategic narrative.
              </SheetDescription>
              <div className="flex flex-col gap-6 mt-12">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      to={link.href}
                      className={cn(
                        'text-2xl font-bold transition-colors text-left',
                        location.pathname === link.href ? 'text-blue-600' : 'text-slate-950 hover:text-blue-600'
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <hr className="border-slate-100 my-2" />
                <SheetClose asChild>
                  <Link
                    to="/admin"
                    className={cn(
                      'text-xl font-bold transition-colors text-left flex items-center gap-3 p-4 rounded-2xl border',
                      location.pathname === '/admin' 
                        ? 'bg-blue-50 text-blue-600 border-blue-100' 
                        : 'text-slate-500 border-slate-100 hover:bg-slate-50'
                    )}
                  >
                    <Shield size={20} className={location.pathname === '/admin' ? 'text-blue-600' : 'text-slate-400'} /> 
                    Strategic Dashboard
                  </Link>
                </SheetClose>
                <div className="mt-auto pb-10">
                  <SheetClose asChild>
                    <Button asChild className="bg-slate-950 text-white py-8 text-xl rounded-2xl w-full font-bold shadow-xl">
                      <Link to="/contact">Discuss Your Project</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}