import { createRoot } from "react-dom/client"
import "./index.css"
import ReportPage from "./components/ReportPage"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<ReportPage />)
