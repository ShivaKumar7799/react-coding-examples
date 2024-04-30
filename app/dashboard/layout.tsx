import React from "react";
 const DashboardLayout = ({ children }:any) => {
    return (
      <div className="flex gap-8">
        <aside className="flex-[2]">
          <div>Common dashbard Navbar</div>
        </aside>
        <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px]">
          {children}
        </div>
      </div>
    );
  };

  export default DashboardLayout