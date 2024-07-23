import { createRoot } from "react-dom/client"
import "./index.css"
import ReportPage from "./ReportPage"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<ReportPage />)
