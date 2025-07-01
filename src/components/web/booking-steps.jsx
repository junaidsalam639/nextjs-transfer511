"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Check, Car, UserCircle, ClipboardList, MapPin } from "lucide-react";

const steps = [
  { 
    title: "Enter the trip details",
    icon: <MapPin className="w-5 h-5" />,
    completedIcon: <Check className="w-5 h-5" />
  },
  { 
    title: "Select a vehicle",
    icon: <Car className="w-5 h-5" />,
    completedIcon: <Check className="w-5 h-5" />
  },
  { 
    title: "Enter the contact details",
    icon: <UserCircle className="w-5 h-5" />,
    completedIcon: <Check className="w-5 h-5" />
  },
  { 
    title: "Booking overview",
    icon: <ClipboardList className="w-5 h-5" />,
    completedIcon: <Check className="w-5 h-5" />
  },
];

const BookingSteps = ({ activeStep, completedSteps = [] }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-5xl mx-auto px-6 py-10">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = completedSteps.includes(index);

        return (
          <React.Fragment key={step.title}>
            <div className="flex flex-col items-center relative z-10 group">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300",
                  isActive
                    ? "border-orange-500 bg-orange-100 text-orange-600 animate-pulse"
                    : isCompleted
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 bg-white text-black"
                )}
              >
                {isCompleted ? step.completedIcon : step.icon}
              </div>
              <span
                className={cn(
                  "mt-3 text-sm font-medium text-center max-w-[130px] transition-colors duration-300",
                  isActive
                    ? "text-orange-600"
                    : isCompleted
                    ? "text-green-600"
                    : "text-black dark:text-white"
                )}
              >
                {step.title}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-[2px] mx-2 mt-0.5 transition-colors duration-300",
                  completedSteps.includes(index + 1) || isCompleted
                    ? "bg-green-500"
                    : "bg-gray-200 group-hover:bg-gray-300"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BookingSteps;
