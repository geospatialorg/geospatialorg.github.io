import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";

export default function FiltrableTable({ data, columns }) {
  const tableInstance = useTable({ columns, data }, useGlobalFilter);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Filtrează..."
        style={{ marginBottom: 10, padding: 5, width: "100%" }}
      />
      <table {...getTableProps()} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ borderBottom: "1px solid #ccc" }}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ padding: 8, textAlign: "left" }}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ borderBottom: "1px solid #eee" }}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ padding: 8 }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
