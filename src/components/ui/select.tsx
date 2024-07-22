import { ComponentProps } from "react"

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

export default CustomSelect
