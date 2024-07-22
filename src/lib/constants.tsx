import {
  FilePlus,
  RefreshCcw,
  Search,
  Lightbulb,
  LayoutPanelTop,
  Newspaper,
  File,
} from "lucide-react"
import { MainNavigation, SecondaryNavigation } from "./types"

export const MAIN_NAVIGATION: {
  label: string
  id: keyof typeof MainNavigation
  icon?: React.ReactNode
}[] = [
  {
    label: "Create Report",
    id: "CREATE_REPORT",
    icon: <FilePlus />,
  },
  {
    label: "Manage Report",
    id: "MANAGE_REPORT",
    icon: <RefreshCcw />,
  },

  {
    label: "Drill Down",
    id: "DRILL_DOWN",
    icon: <Search />,
  },
  {
    label: "Consolidation",
    id: "CONSOLIDATION",
    icon: <Lightbulb />,
  },
]

export const SECONDARY_NAVIGATION: {
  label: string
  id: keyof typeof SecondaryNavigation
  icon?: React.ReactNode
}[] = [
  {
    label: "Start from scratch",
    id: "START_FROM_SCRATCH",
    icon: <File />,
  },
  {
    label: "Start from a template",
    id: "START_FROM_TEMPLATE",
    icon: <LayoutPanelTop />,
  },
  {
    label: "Import from spreadsheet",
    id: "IMPORT_FROM_SPREADSHEET",
    icon: <Newspaper />,
  },
  {
    label: "Create consolidated report",
    id: "CREATE_CONSOLIDATED_REPORT",
    icon: <Lightbulb />,
  },
]
