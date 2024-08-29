"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import React from "react"
  import { Minus, Plus } from "lucide-react"
  

export function Calender() {

    
       
        const [goal, setGoal] = React.useState(0)
       
        function onClick(adjustment: number) {
          setGoal(goal + adjustment)
        }


  const [currentDate, setCurrentDate] = useState(new Date())

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const days = new Date(year, month + 1, 0).getDate()
    const firstDay = new Date(year, month, 1).getDay()
    return { days, firstDay }
  }

  const { days, firstDay } = getDaysInMonth(currentDate)

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
  }

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 ">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-medium text-md py-2">
            {day}
            
          </div>
        ))}
        </div>

        
      <div className="grid grid-cols-7 gap-1 flex-grow">
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} className="border border-border rounded p-2"></div>
        ))}
        {Array.from({ length: days }).map((_, index) => {
          const day = index + 1
          return (
            <div
              key={day}
              className={`border border-border rounded p-2 ${
                isToday(day) ? 'bg-primary text-primary-foreground' : ''
              }`}
            >
                <div className="flex flex-col justify-start align-top">
                <span className={``}>{day}</span>
              <Drawer>
                <DrawerTrigger asChild><Button variant={`${isToday(day) ? "secondary" : "secondary"}`}>Open</Button></DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Counter</DrawerTitle>
            <DrawerDescription>Set Counter</DrawerDescription>
                </DrawerHeader>
                        <div className="p-4 pb-0">
                            <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(-1)}
                                disabled={goal <= 0}
                            >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                                <div className="text-7xl font-bold tracking-tighter">
                                {goal}
                                </div>
                                <div className="text-[0.70rem] uppercase text-muted-foreground">
                                Counter/day
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(1)}
                            >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase</span>
                            </Button>
                            </div>
                            <div className="mt-3 h-[120px]">
                            
                            </div>
                        </div>
                        <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                        </div>
                    </DrawerContent>
                    </Drawer>
                </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}