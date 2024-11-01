import React, { useState, useEffect } from 'react'
import { Bell, LogOut, Search, Menu, X } from "lucide-react"
// import { Link } from 'react-router-dom'

export default function AppliedJobs() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const totalPages = 5
  const jobsPerPage = 4

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const jobs = [
    {
      icon: "🔵",
      title: "Networking Engineer",
      type: "Remote",
      location: "Washington",
      salary: "$50k-80k/month",
      date: "Feb 2, 2019 19:28",
    },
    {
      icon: "🔴",
      title: "Product Designer",
      type: "Full Time",
      location: "Dhaka",
      salary: "$50k-80k/month",
      date: "Dec 7, 2019 23:26",
    },
    {
      icon: "⚫",
      title: "Junior Graphic Designer",
      type: "Temporary",
      location: "Brazil",
      salary: "$50k-80k/month",
      date: "Feb 2, 2019 19:28",
    },
    {
      icon: "🟣",
      title: "Visual Designer",
      type: "Contract Base",
      location: "Wisconsin",
      salary: "$50k-80k/month",
      date: "Dec 7, 2019 23:26",
    },
    {
      icon: "🟢",
      title: "Senior Frontend Developer",
      type: "Full Time",
      location: "New York",
      salary: "$80k-120k/month",
      date: "Mar 15, 2019 10:45",
    },
    {
      icon: "🟠",
      title: "UX Researcher",
      type: "Part Time",
      location: "San Francisco",
      salary: "$40k-60k/month",
      date: "Apr 3, 2019 14:30",
    },
  ]

  const paginatedJobs = jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)

  return (
    <div className="min-h-screen flex flex-col">
        <div className="bg-gray-50 py-2 px-4 text-sm border-b">
            <div className="container mx-auto flex justify-between items-center">
                <nav className="hidden md:flex gap-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Find Job</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Find Employers</a>
                    <a href="#" className="text-blue-600">Dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Job Alerts</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Customer Supports</a>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      <span>+1-202-555-0178</span>
                    </span>
                    <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=20&width=30"
                          width={20}
                          height={15}
                          alt="US Flag"
                          className="rounded"
                        />
                        <span>English</span>
                    </div>
                </div>
                <button
                  className="md:hidden text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
            </div>
        </div>

        {/* Header */}
        <header className="border-b py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Jobpilot Logo"
                />
                <span className="text-xl font-bold">Jobpilot</span>
              </a>
              <div className="hidden md:flex items-center gap-2">
  <img
    src="/placeholder.svg?height=30&width=30"
    width={30}
    height={30}
    alt="India Flag"
    className="rounded"
  />
  <span>India</span>
</div>

<div className="relative hidden md:block w-[400px]">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
  <input
    className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="Job title, keyword, company"
    type="search"
  />
</div>

            </div>
            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
                  2
                </span>
              </button>
              <img
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setIsMobileMenuOpen(false)}> <X className="h-6 w-6" /></button>
                </div>
                <nav className="p-4 space-y-4">
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Find Job</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Find Employers</a>
                    <a href="#" className="block text-blue-600">Dashboard</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Job Alerts</a>
                    <a href="#" className="block text-gray-600 hover:text-gray-900">Customer Supports</a>
                </nav>
                <div className="p-4 border-t">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/placeholder.svg?height=20&width=30" width={20} height={15} alt="US Flag" className="rounded"/>
                        <span>English</span>
                    </div>
                    <span className="block text-sm text-gray-600">+1-202-555-0178</span>
                </div>
            </div>
        </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-64 border-r bg-gray-50 p-4`}>
          <div className="space-y-1">
            <div className="py-2 text-sm text-gray-500 uppercase">Candidate Dashboard</div>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
            >
              <div className="h-5 w-5 rounded-lg bg-gray-200" />
              Overview
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-600"
            >
              <div className="h-5 w-5 rounded-lg bg-blue-200" />
              Applied Jobs
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
            >
              <div className="h-5 w-5 rounded-lg bg-gray-200" />
              Favorite Jobs
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
            >
              <div className="h-5 w-5 rounded-lg bg-gray-200" />
              Job Alert
              <span className="ml-auto rounded-full bg-gray-200 px-2 py-0.5 text-xs">09</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
            >
              <div className="h-5 w-5 rounded-lg bg-gray-200" />
              Settings
            </a>
          </div>
          <div className="mt-auto pt-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Log-out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold mb-6">
            Applied Jobs <span className="text-gray-400">(589)</span>
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left text-sm font-medium text-gray-500">
                  <th className="p-4">JOBS</th>
                  <th className="p-4">DATE APPLIED</th>
                  <th className="p-4">STATUS</th>
                  <th className="p-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {paginatedJobs.map((job, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-2xl">
                          {job.icon}
                        </div>
                        <div>
                          <div className="font-medium">{job.title}</div>
                          <div className="flex gap-2 text-sm text-gray-500">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {job.date}
                    </td>
                    <td className="p-4">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-600">
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 w-9 ${
                  i + 1 === currentPage
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              →
            </button>
          </div>
        </main>
      </div> 
    </div>
  )
}