import React from "react";
import { Calendar as CalendarWidget } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sampleEvents = [
  { date: "2025-09-03", title: "Sunrise Paddle", time: "6:30 AM", color: "bg-pink-400" },
  { date: "2025-09-05", title: "Sailing Lesson", time: "10:00 AM", color: "bg-sky-500" },
  { date: "2025-09-08", title: "Whale Watching", time: "2:00 PM", color: "bg-indigo-400" },
  { date: "2025-09-10", title: "Kayak Fishing", time: "8:00 AM", color: "bg-green-400" },
  { date: "2025-09-12", title: "Sunset Cruise", time: "5:30 PM", color: "bg-yellow-400" },
  { date: "2025-09-15", title: "Catalina Day Trip", time: "7:00 AM", color: "bg-orange-400" },
  { date: "2025-09-18", title: "Scuba Dive", time: "9:00 AM", color: "bg-cyan-400" },
  { date: "2025-09-21", title: "Family Sailing", time: "11:00 AM", color: "bg-red-400" },
  { date: "2025-09-24", title: "SUP Yoga", time: "8:30 AM", color: "bg-purple-400" },
  { date: "2025-09-27", title: "Dolphin Encounter", time: "3:00 PM", color: "bg-teal-400" },
];

function AdventureCalendar() {
  const [date, setDate] = React.useState<Date>(new Date());
  const formattedDate = date.toISOString().split("T")[0];
  const dayEvents = sampleEvents.filter(e => e.date === formattedDate);

  function tileContent({ date, view }: { date: Date; view: string }) {
    if (view === "month") {
      const d = date.toISOString().split("T")[0];
      const eventsForDay = sampleEvents.filter(e => e.date === d);
      return (
        <div className="flex gap-1 justify-center mt-1">
          {eventsForDay.map((ev, idx) => (
            <span key={idx} className={`w-2 h-2 rounded-full ${ev.color} shadow-sm`} />
          ))}
        </div>
      );
    }
    return null;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-sky-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <CalendarWidget
          onChange={setDate}
          value={date}
          className="w-full text-lg font-semibold"
          tileContent={tileContent}
        />
      </motion.div>
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-cyan-100 flex flex-col justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-500">
          {dayEvents.length > 0 ? "Events Scheduled" : "No Events Scheduled"}
        </h3>
        <div className="space-y-4">
          {dayEvents.length > 0 ? (
            dayEvents.map((event, idx) => (
              <Card key={idx} className={`hover:shadow-md transition rounded-xl border-2 ${event.color} border-opacity-40`}>
                <CardContent className="p-4 text-left">
                  <h4 className={`text-xl font-bold mb-2 ${event.color} text-white px-2 py-1 rounded-xl inline-block`}>{event.title}</h4>
                  <p className="text-slate-700 font-semibold">{event.time}</p>
                  <Button className={`mt-3 ${event.color} hover:brightness-110 text-white rounded-xl shadow-md`}>
                    Reserve Spot
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {sampleEvents.map((event, idx) => (
                <Card key={idx} className={`rounded-xl border-2 ${event.color} border-opacity-40`}>
                  <CardContent className="p-2 text-left">
                    <h4 className={`text-base font-bold mb-1 ${event.color} text-white px-2 py-1 rounded-xl inline-block`}>{event.title}</h4>
                    <p className="text-slate-700 text-xs font-semibold">{event.time} on {event.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default AdventureCalendar;
