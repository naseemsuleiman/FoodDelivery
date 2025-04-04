import React from 'react'
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function Schedule({ schedules, formatDate }) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <CalendarDaysIcon className="h-5 w-5 mr-2 text-blue-500" /> Upcoming Shifts
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shift</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {schedules.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">{formatDate(schedule.date)}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{schedule.startTime} - {schedule.endTime}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{schedule.role}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{schedule.location}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="text-sm text-blue-600 hover:text-blue-800 mr-3">
                      Request Change
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-800">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Schedule;