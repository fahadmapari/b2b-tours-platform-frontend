"use client";

import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import * as React from "react";

interface DatePickerProps {
  date: Date;
  setDate: (date: Date) => void;
}

export default function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer" asChild>
        <div className="w-full flex items-center gap-2 ">
          <div className="w-10 h-10 bg-green-50 rounded-full flex justify-center items-center">
            <CalendarIcon />
          </div>
          <div className="flex flex-col">
            <div className="text-xs">Date</div>
            <div className="flex gap-1 items-center text-base fpont-medium">
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <ChevronsUpDown height={14} className="opacity-50 " />
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => setDate(date || new Date())}
          initialFocus
          fromDate={new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
