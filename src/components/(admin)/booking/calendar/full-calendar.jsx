"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
  subYears,
} from "date-fns"
import { enUS } from "date-fns/locale/en-US"
import { createContext, forwardRef, useCallback, useContext, useMemo, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

const Context = createContext({})

const Calendar = ({
  children,
  defaultDate = new Date(),
  locale = enUS,
  enableHotkeys = true,
  view: _defaultMode = "month",
  onEventClick,
  events: defaultEvents = [],
  onChangeView,
}) => {
  const [view, setView] = useState(_defaultMode)
  const [date, setDate] = useState(defaultDate)
  const [events, setEvents] = useState(defaultEvents)

  const changeView = (view) => {
    setView(view)
    onChangeView?.(view)
  }

  useHotkeys("m", () => changeView("month"), {
    enabled: enableHotkeys,
  })

  useHotkeys("w", () => changeView("week"), {
    enabled: enableHotkeys,
  })

  useHotkeys("y", () => changeView("year"), {
    enabled: enableHotkeys,
  })

  useHotkeys("d", () => changeView("day"), {
    enabled: enableHotkeys,
  })

  return (
    <Context.Provider
      value={{
        view,
        setView,
        date,
        setDate,
        events,
        setEvents,
        locale,
        enableHotkeys,
        onEventClick,
        onChangeView,
        today: new Date(),
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCalendar = () => useContext(Context)

const CalendarViewTrigger = forwardRef(({ children, view, ...props }) => {
  const { view: currentView, setView, onChangeView } = useCalendar()

  return (
    <Button
      aria-current={currentView === view}
      size="sm"
      variant="ghost"
      {...props}
      onClick={() => {
        setView(view)
        onChangeView?.(view)
      }}
    >
      {children}
    </Button>
  )
})
CalendarViewTrigger.displayName = "CalendarViewTrigger"

const CalendarMonthView = ({ onDateClick }) => {
  const { date, view, events, locale } = useCalendar()

  const monthDates = useMemo(() => getDaysInMonth(date), [date])
  const weekDays = useMemo(() => generateWeekdays(locale), [locale])

  if (view !== "month") return null

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-7 gap-px sticky top-0 bg-background border-b">
        {weekDays.map((day, i) => (
          <div
            key={day}
            className={cn(
              "mb-2 text-right text-sm text-muted-foreground pr-2",
              [0, 6].includes(i) && "text-muted-foreground/50",
            )}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid overflow-hidden -mt-px flex-1 auto-rows-fr p-px grid-cols-7 gap-px">
        {monthDates.map((_date) => {
          const currentEvents = events?.filter((event) => isSameDay(event.start, _date))

          // Check if this date has events (bookings)
          const hasEvents = currentEvents?.length > 0

          return (
            <div
              className={cn(
                "ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto",
                !isSameMonth(date, _date) && "text-muted-foreground/50",
                hasEvents && "bg-red-500 text-white cursor-pointer",
              )}
              key={_date.toString()}
              onClick={() => onDateClick && hasEvents && onDateClick(_date)}
            >
              <span
                className={cn(
                  "size-6 grid place-items-center rounded-full mb-1 sticky top-0",
                  isToday(_date) && "bg-primary text-primary-foreground",
                  hasEvents && !isToday(_date) && "bg-black text-white",
                )}
              >
                {format(_date, "d")}
              </span>

              {currentEvents?.map((event) => {
                return (
                  <div key={event.id} className="px-1 rounded text-sm flex items-center gap-1">
                    <span className="flex-1 truncate text-white">{event.title}</span>
                    <time className="tabular-nums text-white text-xs">
                      {format(event.start, "HH:mm")}
                    </time>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const CalendarNextTrigger = forwardRef(({ children, onClick, ...props }, ref) => {
  const { date, setDate, view, enableHotkeys } = useCalendar()

  const next = useCallback(() => {
    if (view === "day") {
      setDate(addDays(date, 1))
    } else if (view === "week") {
      setDate(addWeeks(date, 1))
    } else if (view === "month") {
      setDate(addMonths(date, 1))
    } else if (view === "year") {
      setDate(addYears(date, 1))
    }
  }, [date, view, setDate])

  useHotkeys("ArrowRight", () => next(), {
    enabled: enableHotkeys,
  })

  return (
    <Button
      size="icon"
      variant="outline"
      ref={ref}
      {...props}
      onClick={(e) => {
        next()
        onClick?.(e)
      }}
    >
      {children}
    </Button>
  )
})
CalendarNextTrigger.displayName = "CalendarNextTrigger"

const CalendarPrevTrigger = forwardRef(({ children, onClick, ...props }, ref) => {
  const { date, setDate, view, enableHotkeys } = useCalendar()

  const prev = useCallback(() => {
    if (view === "day") {
      setDate(subDays(date, 1))
    } else if (view === "week") {
      setDate(subWeeks(date, 1))
    } else if (view === "month") {
      setDate(subMonths(date, 1))
    } else if (view === "year") {
      setDate(subYears(date, 1))
    }
  }, [date, view, setDate])

  useHotkeys("ArrowLeft", () => prev(), {
    enabled: enableHotkeys,
  })

  return (
    <Button
      size="icon"
      variant="outline"
      ref={ref}
      {...props}
      onClick={(e) => {
        prev()
        onClick?.(e)
      }}
    >
      {children}
    </Button>
  )
})
CalendarPrevTrigger.displayName = "CalendarPrevTrigger"

const CalendarTodayTrigger = forwardRef(({ children, onClick, ...props }, ref) => {
  const { setDate, enableHotkeys, today } = useCalendar()

  useHotkeys("t", () => jumpToToday(), {
    enabled: enableHotkeys,
  })

  const jumpToToday = useCallback(() => {
    setDate(today)
  }, [today, setDate])

  return (
    <Button
      variant="outline"
      ref={ref}
      {...props}
      onClick={(e) => {
        jumpToToday()
        onClick?.(e)
      }}
    >
      {children}
    </Button>
  )
})
CalendarTodayTrigger.displayName = "CalendarTodayTrigger"

const CalendarCurrentDate = () => {
  const { date, view } = useCalendar()

  return (
    <time dateTime={date.toISOString()} className="tabular-nums">
      {format(date, view === "day" ? "dd MMMM yyyy" : "MMMM yyyy")}
    </time>
  )
}

const getDaysInMonth = (date) => {
  const startOfMonthDate = startOfMonth(date)
  const startOfWeekForMonth = startOfWeek(startOfMonthDate, {
    weekStartsOn: 0,
  })

  let currentDate = startOfWeekForMonth
  const calendar = []

  while (calendar.length < 42) {
    calendar.push(new Date(currentDate))
    currentDate = addDays(currentDate, 1)
  }

  return calendar
}

const generateWeekdays = (locale) => {
  const daysOfWeek = []
  for (let i = 0; i < 7; i++) {
    const date = addDays(startOfWeek(new Date(), { weekStartsOn: 0 }), i)
    daysOfWeek.push(format(date, "EEEEEE", { locale }))
  }
  return daysOfWeek
}

export {
  Calendar,
  CalendarCurrentDate,
  CalendarMonthView,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTodayTrigger,
  CalendarViewTrigger,
}
