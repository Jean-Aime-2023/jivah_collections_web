/* eslint-disable @typescript-eslint/no-unused-vars */
// ProductsTable.tsx
'use client';

import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { products, Product } from '@/constants/Products';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Trash } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';



const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => (
      <Image
        src={row.original.image as string}
        alt={row.original.name}
        className="h-10 w-10 object-cover rounded"
      />
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <div>{row.original.name}</div>,
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div>
        <span className="font-bold">${row.original.price}</span>
        <span className="line-through text-gray-400 ml-2">
          ${row.original.crossedPrice}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
    cell: ({ row }) => <div>{row.original.stock}</div>,
  },
  {
    accessorKey: 'tag',
    header: 'Tag',
    cell: ({ row }) => <div className="text-sm italic">{row.original.tag}</div>,
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => <div>{row.original.category}</div>,
  },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original.id; // Get the id from row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Actions</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[13rem] max-md:w-[10rem]"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={`/admin/products/${id}`}
                className="px-4 py-2 rounded-lg text-white text-center bg-green-600 w-full hover:bg-green-600/80"
              >
                Preview
              </Link>
              <Link
                href={`/admin/products/${id}/edit`}
                className="px-4 py-2 rounded-lg text-white text-center bg-brown w-full hover:bg-brown/80"
              >
                Edit
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },  
  {
    accessorKey: 'delete',
    header: 'Delete',
    cell: () => (
      <div className="p-1 rounded-lg w-fit cursor-pointer bg-red-600">
        <Trash color="white" size={19} />
      </div>
    ),
  },
];

export default function DataTableProducts() {
  const [pageSize] = useState(8);

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  return (
    <div className="p-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
