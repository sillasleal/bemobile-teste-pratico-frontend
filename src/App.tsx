import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import Table from "./components/Table";
import { Employee } from "./types/Employee";
import { fetchEmployees } from "./api/fetchEmployees";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFetchEmployees = useCallback(async (query: string) => {
    try {
      const data = await fetchEmployees(query);
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }, []);

  useEffect(() => {
    handleFetchEmployees(searchTerm);
  }, [searchTerm, handleFetchEmployees]);

  return (
    <>
      <Header />
      <div className="mt-16 p-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-medium mb-2 sm:mb-0 text-left w-full sm:w-auto text-[#1c1c1c] font-['Helvetica Neue'] leading-[24.42px] tracking-[0%]">
            Funcionários
          </h2>
          <SearchField placeholder="Pesquisar" onSearch={setSearchTerm} className="w-full" />
        </div>
        <Table employees={employees} />
      </div>
    </>
  );
}

export default App;
