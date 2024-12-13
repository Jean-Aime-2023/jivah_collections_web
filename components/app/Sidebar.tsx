'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  LineChart,
  LogOut,
  Package,
  Settings,
  UserRound,
  ListOrderedIcon,
} from 'lucide-react';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();

  const getActiveClass = (path: string) =>
    pathname === path
      ? 'bg-white text-brown'
      : 'text-muted-foreground hover:bg-[#ad650c] hover:text-white hover:transition-colors duration-200';

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
            <Link href="/admin" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${getActiveClass('/admin')}`}>
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/admin/user" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${getActiveClass('/admin/user')}`}>
              <UserRound className="h-4 w-4" />
              Users
            </Link>
            <Link href="/admin/products" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${getActiveClass('/admin/products')}`}>
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link href="/admin/orders" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${getActiveClass('/admin/orders')}`}>
              <ListOrderedIcon className="h-4 w-4" />
              Orders
            </Link>
            <Link href="/admin/analytics" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${getActiveClass('/admin/analytics')}`}>
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="mt-auto">
          <nav className="grid gap-3 items-start px-2 text-sm font-medium lg:px-4">
            <Link href="/admin/settings" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${getActiveClass('/admin/settings')}`}>
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link href="/sign-in" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${getActiveClass('/sign-in')}`}>
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
