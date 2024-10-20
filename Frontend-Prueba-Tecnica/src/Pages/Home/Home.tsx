import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductDashboard from "../../Blocks/Dashborad/ProductDashboard";

const Home = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8 bg-gray-100 min-h-screen">
        {children ? (
          children
        ) : (
          <>
            <h1 className="text-3xl font-bold">Bienvenido a KCRM Bank</h1>
            <ProductDashboard />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;