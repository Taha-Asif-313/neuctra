import React, { useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  icon?: ReactNode; // Optional icon next to label
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
  pagination?: boolean;
  rowsPerPage?: number;
  colors?: {
    headerBg?: string;
    headerText?: string;
    rowBg?: string;
    rowText?: string;
    borderColor?: string;
    hoverBg?: string;
    paginationBg?: string;
    paginationText?: string;
  };
  headerBorderRadius?: string; // border-radius for header row corners
  tableBorderRadius?: string; // border-radius for entire table (all corners)
  sortable?: boolean; // Global toggle to enable/disable sorting for all columns
  bodyAlign?: "left" | "center" | "right"; // alignment for tbody cells
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  className = "",
  pagination = true,
  rowsPerPage = 5,
  colors = {
    headerBg: "#3b82f6",
    headerText: "#ffffff",
    rowBg: "#ffffff",
    rowText: "#000000",
    borderColor: "#d1d5db",
    hoverBg: "#e5e7eb",
    paginationBg: "#d1d5db",
    paginationText: "#000000",
  },
  headerBorderRadius = "8px",
  tableBorderRadius = "8px",
  sortable = true,
  bodyAlign = "left",
}) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoverRowIndex, setHoverRowIndex] = useState<number | null>(null);

  const handleSort = (key: string, colSortable?: boolean) => {
    if (!sortable || !colSortable) return;
    if (sortColumn === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(key);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return [...data];

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return sortOrder === "asc" ? -1 : 1;
      if (bValue == null) return sortOrder === "asc" ? 1 : -1;

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (aValue instanceof Date && bValue instanceof Date) {
        return sortOrder === "asc"
          ? aValue.getTime() - bValue.getTime()
          : bValue.getTime() - aValue.getTime();
      }

      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();

      if (aStr === bStr) return 0;
      return sortOrder === "asc"
        ? aStr > bStr
          ? 1
          : -1
        : aStr < bStr
        ? 1
        : -1;
    });
  }, [data, sortColumn, sortOrder]);

  const paginatedData = pagination
    ? sortedData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      )
    : sortedData;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Sorting icons same as before
  const arrowUpIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      height="15px"
      width="15px"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0z"></path>
    </svg>
  );

  const arrowDownIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      height="15px"
      width="15px"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
    </svg>
  );

  const defaultSortIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="15px"
      width="15px"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3l0 293.5L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7l0-293.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"></path>
    </svg>
  );

  return (
    <div style={{ overflowX: "auto", width: "100%" }} className={className}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: `1px solid ${colors.borderColor}`,
          tableLayout: "auto",
          minWidth: "400px",
          borderRadius: tableBorderRadius,
          // Important: for border-radius to show on table, set borderSpacing and borderCollapse accordingly
          borderSpacing: 0,
          overflow: "hidden"
        }}
      >
        <thead>
          <tr>
            {columns.map(({ key, label, sortable: colSortable, icon }, i) => (
              <th
                key={key}
                onClick={() => handleSort(key, colSortable)}
                style={{
                  padding: "12px",
                  fontSize:"14px",
                  border: `1px solid ${colors.borderColor}`,
                  cursor: sortable && colSortable ? "pointer" : "default",
                  backgroundColor: colors.headerBg,
                  color: colors.headerText,
                  userSelect: "none",
                  borderTopLeftRadius: i === 0 ? headerBorderRadius : undefined,
                  borderTopRightRadius:
                    i === columns.length - 1 ? headerBorderRadius : undefined,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
                aria-sort={
                  sortColumn === key
                    ? sortOrder === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
                role={sortable && colSortable ? "button" : undefined}
                tabIndex={sortable && colSortable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (sortable && colSortable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleSort(key, colSortable);
                  }
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    justifyContent: "center",
                  }}
                >
                  {icon && <span>{icon}</span>}
                  <span>{label}</span>
                  {sortable && colSortable &&
                    (sortColumn === key
                      ? sortOrder === "asc"
                        ? arrowUpIcon
                        : arrowDownIcon
                      : defaultSortIcon)}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor:
                  hoverRowIndex === rowIndex ? colors.hoverBg : colors.rowBg,
                color: colors.rowText,
                transition: "background-color 0.2s ease-in-out",
              }}
              onMouseEnter={() => setHoverRowIndex(rowIndex)}
              onMouseLeave={() => setHoverRowIndex(null)}
            >
              {columns.map(({ key }) => (
                <td
                  key={key}
                  style={{
                    padding: "12px",
                    border: `1px solid ${colors.borderColor}`,
                    whiteSpace: "nowrap",
                    textAlign: bodyAlign,
                  }}
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "12px",
            padding: "8px",
            userSelect: "none",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 10px",
              backgroundColor: colors.paginationBg,
              color: colors.paginationText,
              borderRadius: "6px",
              border: "none",
              opacity: currentPage === 1 ? 0.5 : 1,
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              fontSize: "0.875rem",
            }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            aria-label="Previous page"
            type="button"
          >
            <ChevronLeft size={16} />
            Prev
          </button>
          <span style={{ color: colors.paginationText }}>
            Page {currentPage} / {totalPages}
          </span>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 10px",
              backgroundColor: colors.paginationBg,
              color: colors.paginationText,
              borderRadius: "6px",
              border: "none",
              opacity: currentPage === totalPages ? 0.5 : 1,
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              fontSize: "0.875rem",
            }}
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            aria-label="Next page"
            type="button"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};
