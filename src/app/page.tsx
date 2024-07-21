const ReportPage = () => {
  return (
    <div className="space-y-6 border-2 w-2/3 border-red-500 m-10 p-6 pb-8">
      <div className="flex justify-between">
        <h1>LiveFlow</h1>
        <p>(icon)</p>
      </div>

      <section className="space-y-4">
        <p className="text-center w-full">
          You have 1 day remaining in your trial period. Pick a plan here.
          <span>(icon)</span>
        </p>

        <div className="flex border-b">
          <button>Ujjwal Singh</button>
          <button>(icon) Create report</button>
          <button>(icon) Share report</button>
          <button>(icon) Manage report</button>
          <button>(icon) Drill down</button>
          <button>(icon) Consolidation</button>
        </div>

        <div className="flex">
          <button>Start from scratch</button>
          <button>Start from a template</button>
          <button>Import from spreadsheet</button>
          <button>Create consolidated report</button>
        </div>
      </section>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label>Select company</label>
          <div className="flex justify-between w-full">
            <select className="basis-4/5">
              <option>Demo Company</option>
            </select>
            <button className="basis-1/5">Connect another company</button>
          </div>

          <p>
            Heads up! You're about to add a report for Demo Company to a
            spreadsheet already containing reports for 33
          </p>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col basis-4/5">
            <label>Choose a report</label>
            <select>
              <option>Profit & Loss</option>
            </select>
            <p>You can insert rows and columns directly inside your report</p>
          </div>

          <div className="flex flex-col basis-1/5">
            <label>Accounting Method</label>
            <div className="flex">
              <div className="flex">
                <input
                  type="radio"
                  id="account"
                  name="options"
                  value="account"
                />
                <label htmlFor="account">Account</label>
              </div>
              <div className="flex">
                <input type="radio" id="cash" name="options" value="cash" />
                <label htmlFor="cash">Cash</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col basis-1/2">
            <label>Choose a date range</label>
            <select>
              <option>This year</option>
            </select>
          </div>
          <div className="flex flex-col basis-1/2">
            <label>Display columns by</label>
            <select>
              <option>Month</option>
            </select>
          </div>
        </div>

        <label>
          <input type="checkbox" />
          <span>Add budget & variance columns</span>
        </label>
      </form>

      <div className="flex justify-center">
        <div className="flex">
          <button>Advanced settings</button>
          <button>Formatting</button>
          <button>Filters (0/5)</button>
        </div>
      </div>

      <footer className="flex">
        <button>(icon) Create Report</button>
        <div>
          <h2>Sheet name</h2>
          <p>Profit and loss (icon)</p>
        </div>
      </footer>
    </div>
  )
}

export default ReportPage
