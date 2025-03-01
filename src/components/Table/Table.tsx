import React, { useState } from "react";
import { Employee } from "../../types/Employee";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
import { formatDate } from "../../utils/formatDate";

interface TableProps {
  employees: Employee[];
}

const Table: React.FC<TableProps> = ({ employees }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id);
    } else {
      newExpandedRows.add(id);
    }
    setExpandedRows(newExpandedRows);
  };

  const headerClass = "px-4 py-2 text-white h2 text-left sm:text-center";
  const rowClass =
    "py-2 text-center h3 shadow-[0px_1px_2px_0px_#00000033] bg-[#FFFFFF] h-[49px]";
  const titleClass =
    "font-helvetica-neue font-medium text-[16px] leading-[19.54px] tracking-[0%] text-black-neutral w-full flex justify-between";
  const valueClass =
    "font-helvetica-neue font-normal text-[16px] leading-[19.09px] tracking-[0%] text-right text-black-neutral";
  const strongClass =
    "font-helvetica-neue font-medium text-[16px] leading-[19.54px] tracking-[0%] text-black-neutral";

  return (
    <div className="overflow-x-auto rounded-t-[8px]">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-[961px] h-[47px] bg-blue-primary rounded-t-lg shadow-[0px_1px_2px_0px_#00000033]">
            <th className={`${headerClass} w-[45px] text-left sm:pl-8`}>FOTO</th>
            <th className={headerClass}>NOME</th>
            <th className={`${headerClass} sm:hidden pr-5`}>
              <div className="flex justify-end">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.5" cy="4.5" r="4" fill="white" />
                </svg>
              </div>
            </th>
            <th className={`${headerClass} hidden sm:table-cell`}>CARGO</th>
            <th className={`${headerClass} hidden sm:table-cell`}>
              DATA DE ADMISSÃO
            </th>
            <th className={`${headerClass} hidden sm:table-cell text-right`}>
              TELEFONE
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <React.Fragment key={employee.id}>
              <tr
                className={`border-b ${
                  expandedRows.has(employee.id) ? "border-b-0" : ""
                } border-gray-200 sm:border-b ${rowClass}`}
              >
                <td className="py-2 text-left w-[45px] sm:pl-4">
                  <img
                    src={employee.image}
                    alt="Foto"
                    className="rounded-full mx-auto w-8 h-8"
                  />
                </td>
                <td className="py-2 text-left sm:text-center pl-4 sm:pl-0">
                  {employee.name}
                </td>
                <td className="py-2 text-center sm:hidden text-right pr-4">
                  <button
                    onClick={() => toggleRow(employee.id)}
                    title="Toggle Details"
                  >
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        expandedRows.has(employee.id) ? "rotate-180" : ""
                      }`}
                      width="20"
                      height="11"
                      viewBox="0 0 20 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1L10 10L18.5 1"
                        stroke="#0500FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
                <td className="py-2 text-center hidden sm:table-cell">
                  {employee.job}
                </td>
                <td className="py-2 text-center hidden sm:table-cell">
                  {formatDate(employee.admission_date)}
                </td>
                <td className="py-2 text-center hidden sm:table-cell">
                  {formatPhoneNumber(employee.phone)}
                </td>
              </tr>
              {expandedRows.has(employee.id) && (
                <tr
                  className={`border-b border-gray-200 sm:hidden ${rowClass}`}
                >
                  <td colSpan={3} className="py-2">
                    <div className="flex flex-col items-start px-4">
                      <div
                        className={`${titleClass} border-b border-dotted border-gray-10-neutral mt-[20px] mb-[20px]`}
                      >
                        <strong className={strongClass}>Cargo:</strong>{" "}
                        <span className={valueClass}>{employee.job}</span>
                      </div>
                      <div
                        className={`${titleClass} border-b border-dotted border-gray-10-neutral mb-[20px]`}
                      >
                        <strong className={strongClass}>
                          Data de admissão:
                        </strong>{" "}
                        <span className={valueClass}>
                          {formatDate(employee.admission_date)}
                        </span>
                      </div>
                      <div
                        className={`${titleClass} border-b border-dotted border-gray-10-neutral mb-[20px]`}
                      >
                        <strong className={strongClass}>Telefone:</strong>{" "}
                        <span className={valueClass}>
                          {formatPhoneNumber(employee.phone)}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
