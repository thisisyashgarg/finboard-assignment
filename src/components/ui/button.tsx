import { ComponentProps } from "react"

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
    DEFAULT: "bg-blue-700 text-white p-4 text-lg",
    OUTLINE: "bg-white text-black py-2 px-4 border-2 border-gray-200",
  }
  return (
    <button
      {...props}
      className={`rounded-lg items-center text- ${
        conditionalStyles[variant]
      } ${className} ${iconLeft && "flex gap-2"}`}
    >
      {iconLeft}
      {text}
    </button>
  )
}

export default CustomButton
