"use client"

import { useState } from "react"
import {
  ChevronsUpDown,
  FilePlus,
  X,
  TriangleAlert,
  CircleX,
  FilePenLine,
  MessageCircle,
  Minimize2,
} from "lucide-react"
import { MainNavigation, SecondaryNavigation } from "@/lib/types"
import CustomButton from "@/components/ui/button"
import CustomSelect from "@/components/ui/select"
import { MAIN_NAVIGATION, SECONDARY_NAVIGATION } from "@/lib/constants"

const ReportPage = () => {
  const [mainNavigation, setMainNavigation] =
    useState<keyof typeof MainNavigation>("CREATE_REPORT")
  const [secondaryNavigation, setSecondaryNavigation] =
    useState<keyof typeof SecondaryNavigation>("START_FROM_SCRATCH")
  const [formData, setFormData] = useState<{
    accountingMethod: "accrual" | "cash"
  }>({
    // TODO: more fields to be added, skipped for now
    accountingMethod: "accrual",
  })

  return (
    <>
      <div className="space-y-6 lg:block hidden border-2 rounded-lg shadow-md m-10 p-6 pb-8">
        <header className="flex justify-between">
          <h1 className="text-2xl cursor-pointer font-medium">FinBoard</h1>
          <X className="cursor-pointer" />
        </header>

        <section className="space-y-4">
          <div className="text-center items-center flex justify-between w-full text-brown-900 bg-yellow-50 p-1 rounded-lg ">
            <div></div>
            <p>
              You have <strong> 1 day remaining</strong> in your trial period.{" "}
              <span className="underline cursor-pointer">
                Pick a plan here.
              </span>
            </p>
            <div className="text-black p-1 rounded-lg border bg-white">
              <Minimize2 className="cursor-pointer" />
            </div>
          </div>

          <nav className="flex border-b-2">
            <button className="p-3 flex items-center gap-2 text-gray-500 ">
              <img src="/pfp.jpeg" alt="pfp" className="w-8 h-8 rounded-full" />
              Ujjwal Singh <ChevronsUpDown />
            </button>
            {MAIN_NAVIGATION.map((nav) => (
              <button
                key={nav.id}
                className={`p-3 flex gap-2 transition-colors duration-300 ease-in-out ${
                  mainNavigation === nav.id
                    ? "border-b-4 border-blue-700 text-blue-700"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
                onClick={() => setMainNavigation(nav.id as any)}
              >
                {nav.icon}
                {nav.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-4">
            {SECONDARY_NAVIGATION.map((nav) => (
              <button
                key={nav.id}
                className={`p-3 flex items-center gap-2 rounded-lg transition-colors duration-300 ease-in-out ${
                  secondaryNavigation === nav.id
                    ? "bg-blue-50 text-blue-700"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
                onClick={() => setSecondaryNavigation(nav.id)}
              >
                {nav.icon}
                {nav.label}
              </button>
            ))}
          </div>
        </section>

        <form className="flex flex-col gap-6">
          <section className="flex flex-col gap-1">
            <label className="font-medium">Select company</label>
            <div className="flex justify-between w-full gap-3">
              <CustomSelect className="w-full" options={["Demo Company"]} />
              <CustomButton
                text="Connect another company"
                variant="OUTLINE"
                className="min-w-fit"
              />
            </div>

            <p className="bg-yellow-50 flex items-center gap-1 text-sm text-brown-900 p-2 rounded-lg">
              <TriangleAlert height={20} />
              <strong> Heads up! </strong>
              You&apos;re about to add a report for Demo Company to a
              spreadsheet already containing reports for 33
            </p>
          </section>

          <section className="flex flex-col gap-1">
            <div className="flex w-full gap-3">
              <div className="flex flex-col basis-4/5 gap-1">
                <label className="font-medium">Choose a report</label>
                <CustomSelect options={["Profit and Loss"]} />
              </div>

              <div className="flex flex-col basis-1/5 gap-1">
                <label className="font-medium">Accounting Method</label>
                <div className="flex justify-between h-full rounded-lg items-center">
                  <div
                    className={`flex items-center transition-colors duration-300 ease-in-out gap-4 px-4 h-full rounded-lg rounded-r-none basis-1/2 cursor-pointer ${
                      formData?.accountingMethod === "accrual"
                        ? "bg-blue-50 text-blue-700 border-2 border-blue-100"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    <input
                      defaultChecked
                      onChange={(e) => {
                        console.log(e.target.value, "e.target.value")
                        setFormData({
                          ...formData,
                          accountingMethod: e.target.value as any,
                        })
                      }}
                      className="cursor-pointer"
                      type="radio"
                      id="accrual"
                      name="options"
                      value="accrual"
                    />
                    <label className="cursor-pointer" htmlFor="accrual">
                      Accrual
                    </label>
                  </div>
                  <div
                    className={`flex items-center rounded-lg transition-colors duration-300 ease-in-out rounded-l-none gap-4 px-4 h-full basis-1/2 cursor-pointer ${
                      formData?.accountingMethod === "cash"
                        ? "bg-blue-50 text-blue-700 border-2 border-blue-100"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    <input
                      onChange={(e) => {
                        console.log(e.target.value, "e.target.value")
                        setFormData({
                          ...formData,
                          accountingMethod: e.target.value as any,
                        })
                      }}
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
            <p className="p-2 text-gray-600 flex gap-1 items-center text-sm bg-gray-50 rounded-lg">
              <img src="/youtube-logo.png" className="w-5 h-5" alt="yt-logo" />
              {/* <Youtube size={30} fill="#EF4243" stroke="none" /> */}
              <strong> 1:32 </strong>
              You can insert rows and columns directly inside your report.{" "}
              <span className="flex cursor-pointer underline items-center">
                Got it <CircleX height={20} />
              </span>
            </p>
          </section>

          <section className="flex gap-3">
            <div className="flex flex-col basis-1/2 gap-1">
              <label className="font-medium">Choose a date range</label>
              <CustomSelect options={["This year"]} />
            </div>
            <div className="flex flex-col basis-1/2 gap-1">
              <label className="font-medium">Display columns by</label>
              <CustomSelect options={["Month"]} />
            </div>
          </section>

          <label className="relative inline-flex gap-2 items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:border-white"></div>
            <p className="text-gray-600">Add budget and variance columns</p>
          </label>
        </form>

        <section className="relative flex justify-center items-center">
          <div className="absolute inset-x-0 top-1/2 border-t-2 "></div>
          <div className="relative z-10 flex font-medium text-gray-600 border-2 text-sm rounded-full bg-white">
            <p className="px-3 py-1">Advanced settings</p>
            <p className="border-x-2 px-3 py-1">Formatting</p>
            <p className="px-3 py-1">
              Filters <span className="text-gray-400">0/5</span>
            </p>
          </div>
        </section>

        <footer className="flex justify-between items-center">
          <section className="flex items-center gap-4">
            <CustomButton iconLeft={<FilePlus />} text="Create Report" />

            <div>
              <h2 className="text-gray-400">Sheet name</h2>
              <p className="font-semibold cursor-pointer hover:underline flex items-center text-blue-700">
                Profit and loss (2) <FilePenLine height={15} />
              </p>
            </div>
          </section>

          <section className="border cursor-pointer rounded-full bg-blue-700 p-4">
            <MessageCircle stroke="white" fill="white" size={40} />
          </section>
        </footer>
      </div>

      <h1 className="lg:hidden text-center px-4 text-3xl flex h-screen items-center justify-center">
        Switch to desktop mode to view this page
      </h1>
    </>
  )
}

export default ReportPage
