import React, { useState } from "react";
import {
  HomeIcon, UsersIcon, DocumentTextIcon, CalendarIcon, ClockIcon,
  BriefcaseIcon, CreditCardIcon, BellIcon, CalendarDaysIcon
} from "@heroicons/react/24/outline";
import SidebarItem from './SidebarItem';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Schedule from './Schedule';
import TimeTracking from './TimeTracking';
import Payroll from './Payroll';

const EmployeeManagementDashboard = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [activeItem, setActiveItem] = useState("Dashboard");

  // Hardcoded employee data
  const employeeData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "January 15, 1985",
    address: "123 Main St, New York, NY",
    emergencyContacts: [
      { name: "Jane Doe", relationship: "Spouse", phone: "+1 (555) 987-6543" },
      { name: "Robert Smith", relationship: "Father", phone: "+1 (555) 456-7890" }
    ],
    position: "Head Chef",
    department: "Kitchen",
    hireDate: "June 10, 2018",
    employeeId: "EMP-12345",
    certifications: ["Food Safety Certification", "Alcohol Serving Permit"],
    payRate: "$32.50/hr",
    benefits: ["Health Insurance", "Dental", "401(k) Matching"]
  };

  // Hardcoded schedules
  const schedules = [
    { id: "1", date: "2025-04-07", startTime: "07:00", endTime: "15:00", role: "Head Chef", location: "Main Kitchen" },
    { id: "2", date: "2025-04-08", startTime: "07:00", endTime: "15:00", role: "Head Chef", location: "Main Kitchen" },
    { id: "3", date: "2025-04-09", startTime: "07:00", endTime: "15:00", role: "Head Chef", location: "Main Kitchen" },
    { id: "4", date: "2025-04-10", startTime: "12:00", endTime: "20:00", role: "Sous Chef", location: "Banquet Hall" },
    { id: "5", date: "2025-04-11", startTime: "09:00", endTime: "17:00", role: "Head Chef", location: "Main Kitchen" }
  ];

  // Hardcoded payroll data
  const payrollData = {
    currentPay: "1,500.00",
    ytdEarnings: "45,000.00",
    tips: "200.00",
    weeklyHours: "40",
    payPeriod: "April 1 - April 15, 2025",
    nextPayDate: "April 20, 2025",
    payHistory: [
      { date: "March 20, 2025", amount: "1,450.00", hours: 40 },
      { date: "March 5, 2025", amount: "1,450.00", hours: 40 },
      { date: "February 20, 2025", amount: "1,400.00", hours: 38 }
    ]
  };

  const handleNavigation = (view, item) => {
    setActiveView(view);
    setActiveItem(item);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4 flex flex-col">
        <div className="flex items-center mb-6">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 font-medium">
            {employeeData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{employeeData.name}</p>
            <p className="text-xs text-gray-500">{employeeData.position}</p>
          </div>
        </div>
        <nav className="space-y-1 flex-1">
          <SidebarItem 
            icon={<HomeIcon />} 
            text="Dashboard" 
            active={activeItem === "Dashboard"} 
            onClick={() => handleNavigation("dashboard", "Dashboard")} 
          />
          <SidebarItem 
            icon={<UsersIcon />} 
            text="Profile" 
            active={activeItem === "Profile"} 
            onClick={() => handleNavigation("profile", "Profile")} 
          />
          <SidebarItem 
            icon={<CalendarDaysIcon />} 
            text="Schedule" 
            active={activeItem === "Schedule"} 
            onClick={() => handleNavigation("schedule", "Schedule")} 
          />
          <SidebarItem 
            icon={<ClockIcon />} 
            text="Time Tracking" 
            active={activeItem === "Time Tracking"} 
            onClick={() => handleNavigation("time", "Time Tracking")} 
          />
          <SidebarItem 
            icon={<CreditCardIcon />} 
            text="Payroll" 
            active={activeItem === "Payroll"} 
            onClick={() => handleNavigation("payroll", "Payroll")} 
          />
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">v1.0.0 • Employee Portal</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white p-4 shadow-sm sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">{activeItem}</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <BellIcon className="h-5 w-5 text-gray-600" />
              </button>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">
                  {employeeData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 space-y-6">
          {activeView === "dashboard" && (
            <Dashboard 
              schedules={schedules} 
              payrollData={payrollData} 
              formatDate={formatDate} 
            />
          )}

          {activeView === "profile" && (
            <Profile employeeData={employeeData} />
          )}

          {activeView === "schedule" && (
            <Schedule schedules={schedules} formatDate={formatDate} />
          )}

          {activeView === "time" && (
            <TimeTracking />
          )}

          {activeView === "payroll" && (
            <Payroll payrollData={payrollData} />
          )}
        </main>
      </div>
    </div>
  );
};

export default EmployeeManagementDashboard;