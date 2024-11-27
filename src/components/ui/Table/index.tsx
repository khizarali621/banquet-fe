import React, { ReactElement } from "react";

interface TableColumn {
  header: string | ReactElement;
  accessor: string;
  render?: (row: Record<string, any>) => ReactElement; // New
}

interface TableProps {
  data: Record<string, any>[];
  columns: TableColumn[];
  align?: string;
  loading?: boolean;
  noDataMessage?: string | ReactElement;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  loading = false,
  noDataMessage,
  align,
}) => {
  return (
    <div className="AtFooterBg overflow-x-auto AtScrollHide w-full">
      <table className="min-w-full border-t">
        <thead>
          {/* <div></div> */}
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="whitespace-nowrap border-b border-[#EAECF0] bg-[#F9FAFB] py-3  "
              >
                <div className={` flex justify-start px-6`}>
                  <p className="font-medium text-sm text-[#667085] text-center bg-[#F9FAFB]">
                    {column.header}
                  </p>
                </div>
              </th>
            ))}
          </tr>
          {loading && (
            <tr>
              <td colSpan={columns.length} className="text-center">
                Loading...
              </td>
            </tr>
          )}
        </thead>
        <tbody>
          {data.length === 0 && !loading && (
            <tr>
              <td colSpan={columns.length} className="text-center">
                {noDataMessage}
              </td>
            </tr>
          )}
          {data.length > 0 &&
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="relative border-b">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={`whitespace-nowrap px- py-5`}>
                    <div className={`flex justify-start px-6`}>
                      <div className={` font-medium text-xs text-[#101828]`}>
                        {column.render
                          ? column.render(row)
                          : row[column.accessor]}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
