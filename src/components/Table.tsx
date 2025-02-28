import React, { useState } from 'react';
import { Employee } from '../types/Employee';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';
import { formatDate } from '../utils/formatDate';

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

  return (
    <div className="overflow-x-auto rounded-t-[8px]">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-[961px] h-[47px] bg-[#0500FF] rounded-t-lg shadow-[0px_1px_2px_0px_#00000033]">
            <th className="px-4 py-2 text-white font-['Helvetica Neue'] font-medium text-[16px] leading-[19.54px] tracking-[0%]">FOTO</th>
            <th className="px-4 py-2 text-white font-['Helvetica Neue'] font-medium text-[16px] leading-[19.54px] tracking-[0%]">NOME</th>
            <th className="px-4 py-2 text-white font-['Helvetica Neue'] font-medium text-[16px] leading-[19.54px] tracking-[0%] sm:hidden">DETALHES</th>
            <th className="px-4 py-2 text-white font-['Helvetica Neue'] font-medium text-[16px] leading-[19.54px] tracking-[0%] hidden sm:table-cell">CARGO</th>
            <th className="px-4 py-2 text-white font-['Helvetica Neue'] font-medium text-[16px] leading-[19.54px] tracking-[0%] hidden sm:table-cell">DATA DE ADMISSÃO</th>
            <th className="px-4 py-2 text-white font-['Helvetica Neue'] font-medium text-[16px] leading-[19.54px] tracking-[0%] hidden sm:table-cell">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <React.Fragment key={employee.id}>
              <tr className="border-b border-gray-200 font-['Helvetica Neue'] font-normal text-[16px] leading-[19.09px] tracking-[0%] shadow-[0px_1px_2px_0px_#00000033] bg-[#FFFFFF] h-[49px]">
                <td className="py-2 text-center">
                  <img 
                    src={employee.image} 
                    alt="Foto" 
                    className="rounded-full mx-auto w-8 h-8" 
                  />
                </td>
                <td className="py-2 text-center">{employee.name}</td>
                <td className="py-2 text-center sm:hidden">
                  <button onClick={() => toggleRow(employee.id)} title="Toggle Details">
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-300 ${expandedRows.has(employee.id) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </td>
                <td className="py-2 text-center hidden sm:table-cell">{employee.job}</td>
                <td className="py-2 text-center hidden sm:table-cell">{formatDate(employee.admission_date)}</td>
                <td className="py-2 text-center hidden sm:table-cell">{formatPhoneNumber(employee.phone)}</td>
              </tr>
              {expandedRows.has(employee.id) && (
                <tr className="border-b border-gray-200 sm:hidden font-['Helvetica Neue'] font-normal text-[16px] leading-[19.09px] tracking-[0%] shadow-[0px_1px_2px_0px_#00000033] bg-[#FFFFFF] h-[49px]">
                  <td colSpan={3} className="py-2">
                    <div className="flex flex-col items-start">
                      <div><strong>CARGO:</strong> {employee.job}</div>
                      <div><strong>DATA DE ADMISSÃO:</strong> {formatDate(employee.admission_date)}</div>
                      <div><strong>TELEFONE:</strong> {formatPhoneNumber(employee.phone)}</div>
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
