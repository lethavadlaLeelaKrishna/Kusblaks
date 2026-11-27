import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function dateKey(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
}

const TaskCalendar = ({ tasks, selectedDate, onSelectDate }) => {
  const [cursor, setCursor] = useState(function () {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  var year = cursor.getFullYear();
  var month = cursor.getMonth();
  var firstWeekday = new Date(year, month, 1).getDay();
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  var cells = [];
  var i;
  for (i = 0; i < firstWeekday; i++) {
    cells.push(null);
  }
  for (i = 1; i <= daysInMonth; i++) {
    cells.push(i);
  }

  var todayKey = dateKey(new Date());

  function countFor(key) {
    var n = 0;
    for (var j = 0; j < tasks.length; j++) {
      if (tasks[j].dueDate === key) {
        n++;
      }
    }
    return n;
  }

  function changeMonth(step) {
    setCursor(new Date(year, month + step, 1));
  }

  return (
    <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">{MONTHS[month]} {year}</h3>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => changeMonth(-1)} className="p-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100 transition-all">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button type="button" onClick={() => changeMonth(1)} className="p-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100 transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_LABELS.map(function (d) {
          return <div key={d} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider py-2">{d}</div>;
        })}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map(function (day, idx) {
          if (!day) {
            return <div key={'empty' + idx} className="h-12" />;
          }
          var key = dateKey(new Date(year, month, day));
          var count = countFor(key);
          var isToday = key === todayKey;
          var isSelected = key === selectedDate;
          var classes = 'h-12 rounded-xl flex flex-col items-center justify-center text-sm font-bold relative transition-all ';
          if (isSelected) {
            classes += 'bg-blue-600 text-white shadow-lg shadow-blue-200';
          } else if (isToday) {
            classes += 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100';
          } else {
            classes += 'text-slate-600 border border-transparent hover:bg-slate-100';
          }
          return (
            <button type="button" key={key} onClick={() => onSelectDate(isSelected ? '' : key)} className={classes}>
              {day}
              {count > 0 && (
                <span className={'absolute bottom-1.5 w-1.5 h-1.5 rounded-full ' + (isSelected ? 'bg-white' : 'bg-blue-600')} />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-600"></span>Tasks scheduled</span>
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-200"></span>Today</span>
      </div>
    </div>
  );
};

export default TaskCalendar;
