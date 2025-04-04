import React, { useState } from 'react'
import { UsersIcon, PhoneIcon, BriefcaseIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function Profile({ employeeData }) {
  const [expandedProfileSection, setExpandedProfileSection] = useState("personal");

  const toggleProfileSection = (section) => {
    setExpandedProfileSection(expandedProfileSection === section ? null : section);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleProfileSection("personal")}
        >
          <h2 className="text-lg font-semibold flex items-center">
            <UsersIcon className="h-5 w-5 mr-2 text-blue-500" /> Personal Information
          </h2>
          {expandedProfileSection === "personal" ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
        
        {expandedProfileSection === "personal" && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium mt-1">{employeeData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium mt-1">{employeeData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium mt-1">{employeeData.phone}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium mt-1">{employeeData.dob}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium mt-1">{employeeData.address}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleProfileSection("emergency")}
        >
          <h2 className="text-lg font-semibold flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-red-500" /> Emergency Contacts
          </h2>
          {expandedProfileSection === "emergency" ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
        
        {expandedProfileSection === "emergency" && (
          <div className="mt-4 space-y-4">
            {employeeData.emergencyContacts.map((contact, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.relationship}</p>
                <p className="font-medium mt-1">{contact.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleProfileSection("employment")}
        >
          <h2 className="text-lg font-semibold flex items-center">
            <BriefcaseIcon className="h-5 w-5 mr-2 text-green-500" /> Employment Details
          </h2>
          {expandedProfileSection === "employment" ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
        
        {expandedProfileSection === "employment" && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Position</p>
                <p className="font-medium mt-1">{employeeData.position}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium mt-1">{employeeData.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Pay Rate</p>
                <p className="font-medium mt-1">{employeeData.payRate}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Hire Date</p>
                <p className="font-medium mt-1">{employeeData.hireDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Employee ID</p>
                <p className="font-medium mt-1">{employeeData.employeeId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Benefits</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {employeeData.benefits.map((benefit, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile;