
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlurCard from '@/components/ui/BlurCard';
import { CalendarDays, Clock, FileText, Activity, Bell, Users } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const PatientDashboard: React.FC = () => {
  // This would normally be fetched from an API
  const patientInfo = {
    name: 'Alex Johnson',
    upcomingAppointments: [
      {
        id: 1,
        doctor: 'Dr. Sarah Williams',
        department: 'Cardiology',
        date: '2023-07-15T10:30:00',
        status: 'confirmed',
      },
      {
        id: 2,
        doctor: 'Dr. Michael Chen',
        department: 'General Medicine',
        date: '2023-07-22T14:00:00',
        status: 'scheduled',
      },
    ],
    recentMedicalRecords: [
      {
        id: 1,
        title: 'Annual Physical',
        date: '2023-05-10T09:00:00',
        doctor: 'Dr. Emily Rodriguez',
      },
      {
        id: 2,
        title: 'Blood Test Results',
        date: '2023-06-03T11:15:00',
        doctor: 'Dr. James Thompson',
      },
    ],
    notifications: [
      {
        id: 1,
        type: 'appointment_reminder',
        message: 'Reminder: Appointment with Dr. Sarah Williams tomorrow at 10:30 AM',
        date: '2023-07-14T10:30:00',
      },
      {
        id: 2,
        type: 'prescription_refill',
        message: 'Your prescription refill for Lisinopril is ready for pickup',
        date: '2023-07-10T14:45:00',
      },
    ],
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-hospital-900">
              Welcome, {patientInfo.name}
            </h1>
            <p className="text-hospital-600">Here's an overview of your health portal</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button className="bg-hospital-600 hover:bg-hospital-700">
              Schedule Appointment
            </Button>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FadeIn delay={100}>
          <BlurCard className="col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-hospital-900">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-hospital-700 hover:text-hospital-800 hover:bg-hospital-50 border-hospital-100">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-sm">Medical Records</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-hospital-700 hover:text-hospital-800 hover:bg-hospital-50 border-hospital-100">
                <CalendarDays className="h-6 w-6 mb-2" />
                <span className="text-sm">Appointments</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-hospital-700 hover:text-hospital-800 hover:bg-hospital-50 border-hospital-100">
                <Activity className="h-6 w-6 mb-2" />
                <span className="text-sm">Test Results</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-hospital-700 hover:text-hospital-800 hover:bg-hospital-50 border-hospital-100">
                <Users className="h-6 w-6 mb-2" />
                <span className="text-sm">Find Doctor</span>
              </Button>
            </div>
          </BlurCard>
        </FadeIn>

        <FadeIn delay={200} className="col-span-1 md:col-span-2">
          <BlurCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-hospital-900">Upcoming Appointments</h3>
              <Button variant="ghost" size="sm" className="text-hospital-600 hover:text-hospital-700">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {patientInfo.upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border border-hospital-100 rounded-lg p-4 hover:border-hospital-300 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-hospital-50 rounded-full flex-shrink-0">
                        <Clock className="h-5 w-5 text-hospital-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-hospital-900">{appointment.doctor}</h4>
                        <p className="text-sm text-hospital-600">{appointment.department}</p>
                        <div className="flex items-center mt-1 space-x-2">
                          <p className="text-sm text-hospital-500">
                            {formatDate(appointment.date)}
                          </p>
                          <span className="text-hospital-300">•</span>
                          <p className="text-sm text-hospital-500">
                            {formatTime(appointment.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-hospital-600 border-hospital-200 hover:bg-hospital-50"
                      >
                        Reschedule
                      </Button>
                      <Button
                        size="sm"
                        variant="default"
                        className="bg-hospital-600 hover:bg-hospital-700"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BlurCard>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeIn delay={300}>
          <BlurCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-hospital-900">Recent Medical Records</h3>
              <Button variant="ghost" size="sm" className="text-hospital-600 hover:text-hospital-700">
                View All
              </Button>
            </div>
            <div className="space-y-3">
              {patientInfo.recentMedicalRecords.map((record) => (
                <div
                  key={record.id}
                  className="border border-hospital-100 rounded-lg p-4 hover:border-hospital-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-hospital-50 rounded-full flex-shrink-0">
                      <FileText className="h-5 w-5 text-hospital-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-hospital-900">{record.title}</h4>
                      <p className="text-sm text-hospital-600">{record.doctor}</p>
                      <p className="text-xs text-hospital-500 mt-1">
                        {formatDate(record.date)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BlurCard>
        </FadeIn>

        <FadeIn delay={400}>
          <BlurCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-hospital-900">Notifications</h3>
              <Button variant="ghost" size="sm" className="text-hospital-600 hover:text-hospital-700">
                Mark All Read
              </Button>
            </div>
            <div className="space-y-3">
              {patientInfo.notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="border border-hospital-100 rounded-lg p-4 hover:border-hospital-300 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-hospital-50 rounded-full flex-shrink-0">
                      <Bell className="h-5 w-5 text-hospital-600" />
                    </div>
                    <div>
                      <p className="text-sm text-hospital-800">{notification.message}</p>
                      <p className="text-xs text-hospital-500 mt-1">
                        {formatDate(notification.date)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BlurCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default PatientDashboard;
