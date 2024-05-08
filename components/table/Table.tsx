import { RxCaretDown } from 'react-icons/rx';
import { RxCaretUp } from 'react-icons/rx';
import { MdInfoOutline } from 'react-icons/md';
import Button from '@/components/button/Button';
import { IoCloseSharp } from 'react-icons/io5';
import { orderBy } from '@/utils/orderBy';
import { useState } from 'react';

interface TableColumn {
  label: string;
  prop: string;
  sortable?: boolean;
  width?: number | string;
}

interface TableRow {
  [props: string]: any;
}

interface TableProps {
  columns: TableColumn[];
  maxRows?: number;
  rows: TableRow[];
}

export default function Table({ columns, maxRows = 5, rows }: TableProps) {
  const [data, setData] = useState(rows.slice(0, maxRows));
  const [sort, setSort] = useState({ direction: '', prop: '' });
  const [showRowAlert, setShowRowAlert] = useState(true);

  const sortData = (prop: string, direction: string, dataIn = data) => {
    const dir =
      sort.direction === 'asc' && direction === 'asc'
        ? 'desc'
        : sort.direction === 'desc' && direction === 'desc'
        ? 'asc'
        : direction;

    const sorted = dataIn.concat().sort(orderBy([prop], [dir]));
    setData(sorted);
    setSort({ direction: dir, prop });
  };

  const showAll = () => {
    if (sort.prop) {
      sortData(sort.prop, sort.direction, rows);
    } else {
      setData(rows);
    }
  };

  return (
    <div className="border border-gray-300 border-solid rounded-md bg-white overflow-x-auto">
      <table className="table-fixed lg:w-full">
        <colgroup>
          {columns.map((column) => (
            <col style={{ width: column.width || 'auto' }} key={column.label} />
          ))}
        </colgroup>
        <thead>
          <tr className="text-sm">
            {columns.map((column) => (
              <th
                className="align-top text-gray-500 font-medium py-2 px-3 relative"
                key={column.label}
              >
                <div className="flex">
                  <div>{column.label}</div>

                  {column.sortable && (
                    <div className="ml-1">
                      <div
                        className={
                          sort.prop === column.prop && sort.direction === 'desc'
                            ? 'hidden'
                            : ''
                        }
                      >
                        <RxCaretUp
                          className={`cursor-pointer ${
                            sort.prop === column.prop && 'text-orange-300'
                          }`}
                          onClick={() => sortData(column.prop, 'asc')}
                          size={15}
                        />
                      </div>
                      <div
                        className={
                          sort.prop === column.prop && sort.direction === 'asc'
                            ? 'hidden'
                            : ''
                        }
                      >
                        <RxCaretDown
                          className={`cursor-pointer ${
                            sort.prop === column.prop
                              ? 'text-orange-300'
                              : '-mt-2'
                          }`}
                          onClick={() => sortData(column.prop, 'desc')}
                          size={15}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-300 border-solid text-sm"
            >
              {columns.map((c) => (
                <td key={c.label} className="py-2 px-3">
                  <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {row[c.prop]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {data.length < rows.length && showRowAlert && (
            <tr className="text-sm bg-gray-100 border-y border-gray-300 border-solid">
              <td
                colSpan={columns.length}
                className="py-2 px-3 font-semibold text-gray-600"
              >
                <div className="flex items-center gap-1">
                  <MdInfoOutline size={20} />
                  <div>
                    Only {data.length} rows are shown. View full list for more
                  </div>
                  <IoCloseSharp
                    size={20}
                    className="ml-auto text-gray-400 cursor-pointer"
                    onClick={() => setShowRowAlert(false)}
                  />
                </div>
              </td>
            </tr>
          )}
          <tr className="text-sm">
            <td colSpan={columns.length} className="py-2 px-3">
              <div className="flex gap-x-4">
                <Button onClick={() => showAll()}>Show Full List</Button>
                <Button>Show Query</Button>
                <Button>Show Chart</Button>
                <Button>Pin to Dashboard</Button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
