import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import '../Components/FullWidthTable.scss'


// import './FullWidthTable.scss';

type TableRow = {
  name: string;
  id: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  joiningDate: string;
  salary: string;
};

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends unknown, TValue> {
    width?: string;
  }
}

const columns: ColumnDef<TableRow>[] = [
  { accessorKey: 'name', header: 'Name', meta: { width: '10%' } },
  { accessorKey: 'id', header: 'ID', meta: { width: '10%' } },
  { accessorKey: 'department', header: 'Department', meta: { width: '10%' } },
  { accessorKey: 'position', header: 'Position', meta: { width: '6%' } },
  { accessorKey: 'email', header: 'Email', meta: { width: '6%' } },
  { accessorKey: 'phone', header: 'Phone', meta: { width: '6%' } },
  { accessorKey: 'city', header: 'City', meta: { width: '6%' } },
  { accessorKey: 'country', header: 'Country', meta: { width: '6%' } },
  { accessorKey: 'joiningDate', header: 'Joining Date', meta: { width: '15%' } },
  { accessorKey: 'salary', header: 'Salary', meta: { width: '15%' } },
];

type Props = {
  data: TableRow[];
};

const FullWidthTable: React.FC<Props> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
   <div className="table-container">
  <div style={{ width: '100%', overflowX: 'hidden' }}>
    <table className="responsive-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  style={{ width: header.column.columnDef.meta?.width }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  style={{ width: cell.column.columnDef.meta?.width }}
                  title={String(cell.getValue())}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        
     </table>
  </div>
</div>
  );
};

export default FullWidthTable;
