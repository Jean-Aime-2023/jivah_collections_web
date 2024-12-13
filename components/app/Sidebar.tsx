'use client';
import Link from 'next/link';
import {
  LayoutDashboard,
  LineChart,
  LogOut,
  Package,
  Settings,
  UserRound,
  ListOrderedIcon
} from 'lucide-react';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block text-white">
      <div className="flex h-full max-h-screen flex-col gap-7 bg-brown p-7 px-5">
        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={logo} alt="logo" className="h-12 w-12" />
            <span className="font-bold text-black text-xl rowdies-light">
              JIVAH
            </span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid gap-3 items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <UserRound className="h-4 w-4" />
              Users
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Products{' '}
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <ListOrderedIcon className="h-4 w-4" />
              Orders{' '}
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="mt-auto">
          <nav className="grid gap-3 items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
