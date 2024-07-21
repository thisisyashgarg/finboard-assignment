"use client"

import { ComponentProps, useState } from "react"

enum MainNavigation {
  CREATE_REPORT = "CREATE_REPORT",
  MANAGE_REPORT = "MANAGE_REPORT",
  SHARE_REPORT = "SHARE_REPORT",
  DRILL_DOWN = "DRILL_DOWN",
  CONSOLIDATION = "CONSOLIDATION",
}

enum SecondaryNavigation {
  START_FROM_SCRATCH = "START_FROM_SCRATCH",
  START_FROM_TEMPLATE = "START_FROM_TEMPLATE",
  IMPORT_FROM_SPREADSHEET = "IMPORT_FROM_SPREADSHEET",
  CREATE_CONSOLIDATED_REPORT = "CREATE_CONSOLIDATED_REPORT",
}

const MAIN_NAVIGATION: {
  label: string
  id: keyof typeof MainNavigation
}[] = [
  {
    label: "Create Report",
    id: "CREATE_REPORT",
  },
  {
    label: "Manage Report",
    id: "MANAGE_REPORT",
  },
  {
    label: "Share Report",
    id: "SHARE_REPORT",
  },
  {
    label: "Drill Down",
    id: "DRILL_DOWN",
  },
  {
    label: "Consolidation",
    id: "CONSOLIDATION",
  },
]

const SECONDARY_NAVIGATION: {
  label: string
  id: keyof typeof SecondaryNavigation
}[] = [
  {
    label: "Start from scratch",
    id: "START_FROM_SCRATCH",
  },
  {
    label: "Start from a template",
    id: "START_FROM_TEMPLATE",
  },
  {
    label: "Import from spreadsheet",
    id: "IMPORT_FROM_SPREADSHEET",
  },
  {
    label: "Create consolidated report",
    id: "CREATE_CONSOLIDATED_REPORT",
  },
]

const ReportPage = () => {
  const [mainNavigation, setMainNavigation] =
    useState<keyof typeof MainNavigation>("CREATE_REPORT")
  const [secondaryNavigation, setSecondaryNavigation] =
    useState<keyof typeof SecondaryNavigation>("START_FROM_SCRATCH")

  return (
    <div className="space-y-6 border-2 border-red-500 m-10 p-6 pb-8">
      <div className="flex justify-between">
        <h1>LiveFlow</h1>
        <p>(icon)</p>
      </div>

      <section className="space-y-4">
        <p className="text-center w-full text-amber-900 bg-yellow-50 p-2 rounded-lg ">
          You have 1 day remaining in your trial period. Pick a plan here.
          <span>(icon)</span>
        </p>

        <div className="flex border-b">
          <button className="p-3">Ujjwal Singh</button>
          {MAIN_NAVIGATION.map((nav) => (
            <button
              className={`p-3 ${
                mainNavigation === nav.id
                  ? "border-b-4 border-blue-700 text-blue-700"
                  : "bg-white text-gray-600"
              }`}
              onClick={() => setMainNavigation(nav.id as any)}
            >
              {nav.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          {SECONDARY_NAVIGATION.map((nav) => (
            <button
              className={`p-3 rounded-lg ${
                secondaryNavigation === nav.id
                  ? "bg-blue-100 text-blue-700"
                  : "bg-white text-gray-600"
              }`}
              onClick={() => setSecondaryNavigation(nav.id as any)}
            >
              {nav.label}
            </button>
          ))}
        </div>
      </section>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label>Select company</label>
          <div className="flex justify-between w-full gap-2">
            <CustomSelect className="basis-4/5" options={["Demo Company"]} />
            <CustomButton
              text="Connect another company"
              variant="OUTLINE"
              className="basis-1/5"
            />
          </div>

          <p className="bg-yellow-50 text-amber-900 p-2 rounded-lg">
            Heads up! You're about to add a report for Demo Company to a
            spreadsheet already containing reports for 33
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex w-full gap-2">
            <div className="flex flex-col basis-4/5 gap-1">
              <label>Choose a report</label>
              <CustomSelect options={["Profit and Loss"]} />
            </div>

            <div className="flex flex-col basis-1/5 gap-1">
              <label>Accounting Method</label>
              <div className="flex justify-between border-2 rounded-lg h-full items-center">
                <div
                  defaultChecked
                  className="flex justify-around basis-1/2 cursor-pointer"
                >
                  <input
                    className="cursor-pointer"
                    type="radio"
                    id="account"
                    name="options"
                    value="account"
                  />
                  <label className="cursor-pointer" htmlFor="account">
                    Account
                  </label>
                </div>
                <div className="flex justify-around basis-1/2">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    id="cash"
                    name="options"
                    value="cash"
                  />
                  <label className="cursor-pointer" htmlFor="cash">
                    Cash
                  </label>
                </div>
              </div>
            </div>
          </div>
          <p className="p-2 bg-blue-50 rounded-lg">
            <span> 1:32 </span>
            You can insert rows and columns directly inside your report.{" "}
            <span>Got it (icon)</span>
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col basis-1/2 gap-1">
            <label>Choose a date range</label>
            <CustomSelect options={["This year"]} />
          </div>
          <div className="flex flex-col basis-1/2 gap-1">
            <label>Display columns by</label>
            <CustomSelect options={["Month"]} />
          </div>
        </div>

        <label className="flex gap-2">
          <input type="checkbox" />
          <span>Add budget & variance columns</span>
        </label>
      </form>

      <div className="flex justify-center">
        <div className="flex gap-4 border-2 rounded-full px-2 py-1">
          <button>Advanced settings</button>
          <button>Formatting</button>
          <button>Filters 0/5</button>
        </div>
      </div>

      <footer className="flex gap-4">
        <CustomButton text="Create Report" />

        <div>
          <h2>Sheet name</h2>
          <p>Profit and loss (icon)</p>
        </div>
      </footer>
    </div>
  )
}

// TODO: we have to pass ref for form submission, skipped for now, passing only necessary props for ui
const CustomSelect = ({
  options,
  className,
  ...props
}: { options: string[] } & ComponentProps<"select">) => {
  return (
    <select
      {...props}
      className={`p-2 border-2 border-gray-200 rounded-lg ${className}`}
    >
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  )
}

const CustomButton = ({
  text,
  variant = "DEFAULT",
  className,
  iconLeft,
  ...props
}: {
  text: string
  iconLeft?: React.ReactNode
  variant?: "DEFAULT" | "OUTLINE"
} & ComponentProps<"button">) => {
  const conditionalStyles = {
    DEFAULT: "bg-blue-700 text-white py-2 px-4",
    OUTLINE: "bg-white text-black p-2 border-2 border-gray-200",
  }
  return (
    <button
      {...props}
      className={`rounded-lg ${conditionalStyles[variant]} ${className}`}
    >
      {text}
    </button>
  )
}

export default ReportPage
