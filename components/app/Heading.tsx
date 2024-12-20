'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CircleUser,
  LayoutDashboard,
  LineChart,
  ListOrderedIcon,
  LogOut,
  Menu,
  Package,
  Settings,
  UserRound,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AdminSearch from '@/components/app/admin-search';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';

const Heading = () => {
  const pathname = usePathname();

  const getActiveClass = (path: string) =>
    pathname === path
      ? 'bg-white text-brown'
      : 'text-muted-foreground hover:bg-[#ad650c] hover:text-white hover:transition-colors duration-200';

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[70px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5 text-black" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-brown">
          <nav className="grid text-lg font-medium text-white p-4 gap-3">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold mb-5"
            >
              <Image src={logo} alt="logo" className="h-12 w-12" />
              <span className="sr-only">JIVA</span>
            </Link>
            <Link href="/admin" className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${getActiveClass('/admin')}`}>
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link href="/admin/user" className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${getActiveClass('/admin/user')}`}>
              <UserRound className="h-5 w-5" />
              Users
            </Link>
            <Link href="/admin/products" className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${getActiveClass('/admin/products')}`}>
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link href="/admin/orders" className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${getActiveClass('/admin/orders')}`}>
              <ListOrderedIcon className="h-5 w-5" />
              Orders
            </Link>
            <Link href="/admin/analytics" className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${getActiveClass('/admin/analytics')}`}>
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
          </nav>
          <div className="mt-auto">
            <nav className="grid gap-3 items-start px-2 text-sm font-medium lg:px-4 text-white">
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
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <AdminSearch />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full p-0">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Heading;
