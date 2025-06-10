"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  PieChart,
  Activity,
  Settings,
  Clock,
  Construction,
  LineChart,
  Users,
  Info,
  Layers,
} from "lucide-react"

export default function DashboardPageUser() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Dashboard Insights
        </h1>
        <p className="text-gray-600 mt-2">Your analytics and business intelligence center</p>
      </div>

      {/* Main Construction Notice */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-amber-100 p-4 rounded-full">
            <Construction className="h-12 w-12 text-amber-600" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Under Construction</h2>
            <p className="text-gray-600 max-w-2xl">
              We&apos;re building a powerful insights dashboard to help you visualize your data and make informed decisions.
              Check back soon for interactive charts, real-time analytics, and personalized reports.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Section - Coming Soon */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Layers className="h-5 w-5 text-slate-600" />
        Statistics Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {["Performance Metrics", "User Analytics", "Conversion Rates", "System Health"].map((title, index) => (
          <Card
            key={index}
            className="border-0 shadow-md bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <Badge variant="outline" className="bg-slate-50 text-gray-700 mb-2">
                Coming Soon
              </Badge>
              <p className="text-sm text-gray-500 text-center">Key {title.toLowerCase()} will appear here</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section - Coming Soon */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-slate-600" />
        Data Visualization
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="border-0 shadow-md bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-slate-600" />
                Revenue Analytics
              </CardTitle>
              <Badge variant="outline" className="bg-slate-50 text-slate-700">
                Coming Soon
              </Badge>
            </div>
            <CardDescription>Monthly revenue breakdown and trends</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="bg-slate-50 p-4 rounded-full mb-4 border">
              <BarChart3 className="h-8 w-8 text-slate-400" />
            </div>
            <p className="text-gray-600 text-center max-w-md">
              Interactive charts and visualizations for revenue data will be displayed here
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-gray-600" />
                User Engagement
              </CardTitle>
              <Badge variant="outline" className="bg-slate-50 text-gray-700">
                Coming Soon
              </Badge>
            </div>
            <CardDescription>User activity and engagement metrics</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="bg-slate-50 p-4 rounded-full mb-4 border">
              <Users className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-600 text-center max-w-md">
              User engagement metrics and progress indicators will be displayed here
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Activity Section - Coming Soon */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Activity className="h-5 w-5 text-gray-600" />
        Activity & Actions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 border-0 shadow-md bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-slate-600" />
                Recent Activity
              </CardTitle>
              <Badge variant="outline" className="text-slate-700">
                Coming Soon
              </Badge>
            </div>
            <CardDescription>Latest user interactions and system events</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="bg-slate-50 p-4 rounded-full mb-4 border">
              <Activity className="h-8 w-8 text-slate-400" />
            </div>
            <p className="text-gray-600 text-center max-w-md">
              A timeline of recent user activities and system events will appear here
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-slate-600" />
                Quick Actions
              </CardTitle>
              <Badge variant="outline" className="bg-slate-50 text-slate-700">
                Coming Soon
              </Badge>
            </div>
            <CardDescription>Frequently used dashboard actions</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="bg-slate-50 p-4 rounded-full mb-4 border">
              <Settings className="h-8 w-8 text-slate-400" />
            </div>
            <p className="text-gray-600 text-center max-w-md">
              Quick access buttons for common dashboard actions will appear here
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Info Section */}
      <Card className="border-0 shadow-md bg-gradient-to-r from-gray-700 to-slate-800 text-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Info className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Dashboard Development in Progress</h3>
              <p className="text-blue-100">
                We&apos;re working on bringing you powerful insights and analytics tools. Stay tuned for updates!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
