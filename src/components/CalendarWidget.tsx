// BACKUP: CalendarWidget.tsx before enhancements - 2025-09-08
// --- ENHANCED CALENDAR STYLING AND EVENTS ---
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";

interface Event {
  title: string;
  time: string;
  type: "lesson" | "trip" | "tour" | "course";
  spots: number;
}

export default function CalendarWidget({ isBookingSection = false }: { isBookingSection?: boolean }) {
  const [date, setDate] = useState(new Date());
  
  // 10 Diverse sailing events, each day only one event
  const events: Record<string, Event[]> = {
    // 3 events in the week of Sept 8-12
    "2025-09-08": [ { title: "Sunrise Paddle Board", time: "7:00 AM – 9:00 AM", type: "lesson", spots: 6 } ],
    "2025-09-10": [ { title: "Whale Watching Tour", time: "1:00 PM – 4:00 PM", type: "tour", spots: 8 } ],
    "2025-09-12": [ { title: "Family Sailing Day", time: "10:00 AM – 1:00 PM", type: "lesson", spots: 10 } ],

    // Existing events
    "2025-09-15": [ { title: "Beginner Sailing Lesson", time: "9:00 AM – 12:00 PM", type: "lesson", spots: 3 } ],
    "2025-09-16": [ { title: "Sunset Harbor Cruise", time: "5:30 PM – 7:30 PM", type: "tour", spots: 8 } ],
    "2025-09-17": [ { title: "Catalina Island Day Trip", time: "8:00 AM – 6:00 PM", type: "trip", spots: 2 } ],
    "2025-09-18": [ { title: "Corporate Team Building Sail", time: "10:00 AM – 2:00 PM", type: "trip", spots: 12 } ],
    "2025-09-19": [ { title: "Advanced Sailing Course", time: "10:00 AM – 3:00 PM", type: "course", spots: 4 } ],
    "2025-09-20": [ { title: "Photography Sailing Workshop", time: "2:00 PM – 6:00 PM", type: "course", spots: 7 } ],
    "2025-09-21": [ { title: "Whale Watching Sail", time: "1:00 PM – 4:00 PM", type: "tour", spots: 6 } ],
    "2025-09-22": [ { title: "Kids & Family Sailing Day", time: "10:00 AM – 1:00 PM", type: "lesson", spots: 10 } ],
    "2025-09-23": [ { title: "Night Sailing Under Stars", time: "7:00 PM – 10:00 PM", type: "tour", spots: 5 } ],
    "2025-09-24": [ { title: "Full Day Sailing Adventure", time: "9:00 AM – 5:00 PM", type: "trip", spots: 5 } ],
    "2025-09-25": [ { title: "Sailing & Wine Tasting Experience", time: "3:00 PM – 7:00 PM", type: "trip", spots: 8 } ],

    // 17 more events, spread from Sept 30 into October, representing different offerings
    "2025-09-30": [ { title: "Sunset Harbor Cruise", time: "5:30 PM – 7:30 PM", type: "tour", spots: 8 } ],
    "2025-10-01": [ { title: "Ocean Navigation Basics", time: "9:00 AM – 12:00 PM", type: "course", spots: 5 } ],
    "2025-10-02": [ { title: "Kayak Fishing Adventure", time: "8:00 AM – 11:00 AM", type: "trip", spots: 4 } ],
    "2025-10-03": [ { title: "Sailing for Couples", time: "2:00 PM – 5:00 PM", type: "lesson", spots: 6 } ],
    "2025-10-04": [ { title: "Scuba & Sail Combo", time: "9:00 AM – 2:00 PM", type: "course", spots: 8 } ],
    "2025-10-05": [ { title: "Paddle Board Yoga", time: "7:30 AM – 9:30 AM", type: "lesson", spots: 10 } ],
    "2025-10-06": [ { title: "Long Beach Harbor Tour", time: "1:00 PM – 3:00 PM", type: "tour", spots: 12 } ],
    "2025-10-07": [ { title: "Sailing Safety Workshop", time: "10:00 AM – 12:00 PM", type: "course", spots: 7 } ],
    "2025-10-08": [ { title: "Eco-Friendly Sailing", time: "9:00 AM – 12:00 PM", type: "lesson", spots: 9 } ],
    "2025-10-09": [ { title: "Dolphin Spotting Sail", time: "3:00 PM – 6:00 PM", type: "tour", spots: 8 } ],
    "2025-10-10": [ { title: "Sailing & Seafood Lunch", time: "11:00 AM – 2:00 PM", type: "trip", spots: 6 } ],
    "2025-10-12": [ { title: "Sunrise Sailing", time: "6:00 AM – 8:00 AM", type: "lesson", spots: 8 } ],
    "2025-10-14": [ { title: "Adventure Photography Sail", time: "2:00 PM – 6:00 PM", type: "tour", spots: 6 } ],
    "2025-10-16": [ { title: "Full Moon Night Sail", time: "7:00 PM – 10:00 PM", type: "tour", spots: 9 } ],
    "2025-10-18": [ { title: "Sailing & Meditation", time: "8:00 AM – 10:00 AM", type: "lesson", spots: 10 } ],
    "2025-10-20": [ { title: "Navigation Challenge", time: "9:00 AM – 1:00 PM", type: "course", spots: 5 } ],
    "2025-10-22": [ { title: "Sailing for Seniors", time: "10:00 AM – 12:00 PM", type: "lesson", spots: 7 } ]
  };
  
  const formattedDate = date.toISOString().split("T")[0];
  const dayEvents = events[formattedDate] || [];
  
  // Adventure card color mapping
  // Match adventure card backgrounds and borders
  const getEventColor = (type: string) => {
    switch (type) {
      case "lesson": return "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 rounded-3xl shadow-lg";
      case "trip": return "bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200 rounded-3xl shadow-lg";
      case "tour": return "bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 rounded-3xl shadow-lg";
      case "course": return "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 rounded-3xl shadow-lg";
      default: return "bg-gray-50 border-gray-200 rounded-3xl shadow-lg";
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-3xl shadow-xl p-6 ${isBookingSection ? 'h-fit' : ''}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">
          {isBookingSection ? "Select Your Date" : "Upcoming Adventures"}
        </h3>
        <p className="text-slate-600">Choose a date to see available sailing experiences</p>
      </div>

      <div className="calendar-container mb-6">
        <Calendar
          onChange={setDate}
          value={date}
          locale="en-US"
          className="mx-auto sailing-calendar"
          tileClassName={({ date }) => {
            const dateStr = date.toISOString().split("T")[0];
            const dayEvents = events[dateStr];
            if (dayEvents && dayEvents.length > 0) {
              return `${dayEvents[0].type}-day`;
            }
            return '';
          }}
          tileContent={() => null}
        />
      </div>

      {dayEvents.length > 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-5"
        >
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            Available on {date.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h4>
          {dayEvents.map((event, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(56,189,248,0.15)" }}
              className={`relative p-0 rounded-3xl border-2 overflow-hidden ${getEventColor(event.type)} shadow-lg transition-all duration-300 hover:shadow-2xl group`}
            >
              {/* Colored accent line/gradient at top, matching adventure card color */}
              <div className={
                event.type === 'lesson' ? 'h-3 w-full bg-gradient-to-r from-blue-400 to-cyan-400' :
                event.type === 'trip' ? 'h-3 w-full bg-gradient-to-r from-cyan-400 to-teal-400' :
                event.type === 'tour' ? 'h-3 w-full bg-gradient-to-r from-orange-400 to-yellow-400' :
                event.type === 'course' ? 'h-3 w-full bg-gradient-to-r from-purple-400 to-blue-400' :
                'h-3 w-full bg-gradient-to-r from-gray-300 to-gray-400'
              } />
              <div className="flex justify-between items-start p-6">
                <div>
                  <h5 className="font-bold text-2xl text-slate-900 mb-1 group-hover:text-blue-700 transition-colors duration-200">{event.title}</h5>
                  <p className="text-lg text-slate-600 opacity-90 mb-1">{event.time}</p>
                  <p className="text-sm mt-1 text-slate-500">{event.spots} spots available</p>
                </div>
                <button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-5 py-2 rounded-2xl font-semibold shadow transition-colors text-base">
                  {isBookingSection ? "Select" : "Reserve"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-8 text-slate-500">
          <p>No adventures scheduled for this date.</p>
          <p className="text-sm mt-1">Try selecting another date!</p>
        </div>
      )}

      {/* Enhanced calendar styles for premium look */}
      <style>{`
        .sailing-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
        }
        .sailing-calendar .react-calendar__tile {
          position: relative;
          padding: 12px 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          font-size: 1.1rem;
          font-weight: 500;
          color: #334155;
          transition: all 0.2s;
        }
        .sailing-calendar .react-calendar__tile--active {
          background: inherit !important;
          color: inherit !important;
          box-shadow: 0 0 0 2px #38bdf822;
        }
        .sailing-calendar .react-calendar__tile--hover {
          background: #e0f2fe;
        }
        .sailing-calendar .event-date-tile {
          background: linear-gradient(90deg, #f0fdfa 0%, #e0f2fe 100%);
          border: 1.5px solid #38bdf8;
        }
        .sailing-calendar .has-events::after {
          content: '';
          position: absolute;
          bottom: 6px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%);
          border-radius: 50%;
        }
        .lesson-day {
          background: linear-gradient(135deg, rgba(96,165,250,0.74) 0%, rgba(16,185,129,0.74) 100%) !important;
          color: #0c4a6e !important;
          border-radius: 0.75rem;
        }
        .trip-day {
          background: linear-gradient(135deg, rgba(52,211,153,0.74) 0%, rgba(16,185,129,0.74) 100%) !important;
          color: #065f46 !important;
          border-radius: 0.75rem;
        }
        .tour-day {
          background: linear-gradient(135deg, rgba(251,191,36,0.74) 0%, rgba(245,158,11,0.74) 100%) !important;
          color: #92400e !important;
          border-radius: 0.75rem;
        }
        .course-day {
          background: linear-gradient(135deg, rgba(167,139,250,0.74) 0%, rgba(139,92,246,0.74) 100%) !important;
          color: #5b21b6 !important;
          border-radius: 0.75rem;
        }
        @media (max-width: 640px) {
          .sailing-calendar {
            font-size: 0.95rem;
          }
          .sailing-calendar .react-calendar__tile {
            padding: 8px 4px;
          }
        }
      `}</style>
    </motion.div>
  );
}
