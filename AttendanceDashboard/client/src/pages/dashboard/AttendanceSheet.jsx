import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../../assets/image.png'

const AttendanceSheet = () => {
  const navigate = useNavigate()
  const { teacherId } = useParams()
  
  // Mock teacher data - will be replaced with database data later
  const teachers = [
    { id: 1, name: 'Rajesh Kumar', subject: 'Mathematics', rfidCard: 'RFID001', status: 'active' },
    { id: 2, name: 'Priya Sharma', subject: 'English', rfidCard: 'RFID002', status: 'active' },
    { id: 3, name: 'Amit Patel', subject: 'Science', rfidCard: 'RFID003', status: 'inactive' },
    { id: 4, name: 'Sneha Gupta', subject: 'History', rfidCard: 'RFID004', status: 'active' },
    { id: 5, name: 'Vikram Singh', subject: 'Physics', rfidCard: 'RFID005', status: 'suspended' },
    { id: 6, name: 'Kavita Reddy', subject: 'Chemistry', rfidCard: 'RFID006', status: 'active' },
  ]

  const teacher = teachers.find(t => t.id === parseInt(teacherId))

  // Mock attendance data for the current month - will be from database later
  const [attendanceRecords, setAttendanceRecords] = useState([
    { date: '2025-12-22', checkIn: '09:15 AM', checkOut: '04:30 PM', status: 'present', hours: '7.25' },
    { date: '2025-12-21', checkIn: '09:10 AM', checkOut: '04:25 PM', status: 'present', hours: '7.25' },
    { date: '2025-12-20', checkIn: '09:30 AM', checkOut: '04:20 PM', status: 'late', hours: '6.83' },
    { date: '2025-12-19', checkIn: '-', checkOut: '-', status: 'absent', hours: '0' },
    { date: '2025-12-18', checkIn: '09:05 AM', checkOut: '04:35 PM', status: 'present', hours: '7.50' },
    { date: '2025-12-17', checkIn: '09:12 AM', checkOut: '04:28 PM', status: 'present', hours: '7.27' },
    { date: '2025-12-16', checkIn: '09:08 AM', checkOut: '04:22 PM', status: 'present', hours: '7.23' },
    { date: '2025-12-15', checkIn: '-', checkOut: '-', status: 'leave', hours: '0' },
    { date: '2025-12-14', checkIn: '09:20 AM', checkOut: '01:15 PM', status: 'half-day', hours: '3.92' },
    { date: '2025-12-13', checkIn: '09:11 AM', checkOut: '04:29 PM', status: 'present', hours: '7.30' },
  ])

  const [selectedMonth, setSelectedMonth] = useState('2025-12')

  const getStatusColor = (status) => {
    switch(status) {
      case 'present': return 'bg-green-100 text-green-800'
      case 'absent': return 'bg-red-100 text-red-800'
      case 'late': return 'bg-yellow-100 text-yellow-800'
      case 'leave': return 'bg-blue-100 text-blue-800'
      case 'half-day': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusBadge = (status) => {
    const colors = getStatusColor(status)
    const label = status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors}`}>
        {label}
      </span>
    )
  }

  // Calculate statistics
  const stats = {
    totalDays: attendanceRecords.length,
    present: attendanceRecords.filter(r => r.status === 'present').length,
    absent: attendanceRecords.filter(r => r.status === 'absent').length,
    late: attendanceRecords.filter(r => r.status === 'late').length,
    leave: attendanceRecords.filter(r => r.status === 'leave').length,
    halfDay: attendanceRecords.filter(r => r.status === 'half-day').length,
    totalHours: attendanceRecords.reduce((sum, r) => sum + parseFloat(r.hours), 0).toFixed(2),
    avgHours: (attendanceRecords.reduce((sum, r) => sum + parseFloat(r.hours), 0) / attendanceRecords.length).toFixed(2)
  }

  if (!teacher) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Teacher Not Found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className='bg-[#7B2D26] hover:bg-[#5A1F1A] text-white px-6 py-2.5 rounded-lg transition'
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50'>
      {/* Header */}
      <header className='bg-white shadow-md border-b-2 border-[#7B2D26]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <div className='flex items-center space-x-3'>
              <img src={logo} alt='Raj Vedanta School' className='h-14 w-auto' />
              <div>
                <div className='text-xl font-bold text-[#7B2D26]'>Raj Vedanta School</div>
                <div className='text-xs text-gray-600'>Attendance Sheet</div>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className='bg-[#7B2D26] hover:bg-[#5A1F1A] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Teacher Info Card */}
        <div className='bg-white rounded-xl shadow-md p-6 mb-8'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
            <div>
              <h1 className='text-3xl font-bold text-[#7B2D26] mb-2'>{teacher.name}</h1>
              <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                <div className='flex items-center gap-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                  </svg>
                  <span className='font-semibold'>{teacher.subject}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2' />
                  </svg>
                  <span className='font-mono'>{teacher.rfidCard}</span>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2D26] focus:border-transparent outline-none'
              >
                <option value='2025-12'>December 2025</option>
                <option value='2025-11'>November 2025</option>
                <option value='2025-10'>October 2025</option>
              </select>
              <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition font-semibold flex items-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8'>
          <div className='bg-white rounded-lg shadow-md p-4 text-center'>
            <div className='text-2xl font-bold text-gray-800'>{stats.totalDays}</div>
            <div className='text-xs text-gray-600 mt-1'>Total Days</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-green-500'>
            <div className='text-2xl font-bold text-green-600'>{stats.present}</div>
            <div className='text-xs text-gray-600 mt-1'>Present</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-red-500'>
            <div className='text-2xl font-bold text-red-600'>{stats.absent}</div>
            <div className='text-xs text-gray-600 mt-1'>Absent</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-yellow-500'>
            <div className='text-2xl font-bold text-yellow-600'>{stats.late}</div>
            <div className='text-xs text-gray-600 mt-1'>Late</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-blue-500'>
            <div className='text-2xl font-bold text-blue-600'>{stats.leave}</div>
            <div className='text-xs text-gray-600 mt-1'>Leave</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-orange-500'>
            <div className='text-2xl font-bold text-orange-600'>{stats.halfDay}</div>
            <div className='text-xs text-gray-600 mt-1'>Half Day</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-[#7B2D26]'>
            <div className='text-2xl font-bold text-[#7B2D26]'>{stats.totalHours}</div>
            <div className='text-xs text-gray-600 mt-1'>Total Hours</div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-4 text-center border-l-4 border-purple-500'>
            <div className='text-2xl font-bold text-purple-600'>{stats.avgHours}</div>
            <div className='text-xs text-gray-600 mt-1'>Avg Hours</div>
          </div>
        </div>

        {/* Attendance Records Table */}
        <div className='bg-white rounded-xl shadow-md overflow-hidden'>
          <div className='bg-[#7B2D26] text-white px-6 py-4'>
            <h2 className='text-xl font-bold'>Attendance Records</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Date</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>In Time</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Out Time</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Status</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {attendanceRecords.map((record, index) => {
                  const date = new Date(record.date)
                  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                  
                  return (
                    <tr key={index} className='hover:bg-gray-50 transition'>
                      <td className='px-6 py-4 text-sm font-semibold text-gray-900'>{formattedDate}</td>
                      <td className='px-6 py-4 text-sm text-gray-900 font-mono'>{record.checkIn}</td>
                      <td className='px-6 py-4 text-sm text-gray-900 font-mono'>{record.checkOut}</td>
                      <td className='px-6 py-4'>{getStatusBadge(record.status)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceSheet
