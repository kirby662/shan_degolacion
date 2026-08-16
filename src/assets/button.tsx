interface Props {
  color: string
  buttontext: string
  onClick?: () => void
}

export function Button({ color, buttontext, onClick }: Props) {
  return (
    <button
      className={`
        px-6
        h-10
        min-w-28
        rounded-md
        font-semibold
        text-white

        shadow-[0_4px_15px_rgba(0,0,0,0.25)]

        hover:shadow-[2px_7px_20px_rgba(37,99,235,0.5)]
        hover:bg-blue-500
        hover:-translate-y-2

        transition-all
        duration-200

        cursor-pointer

        ${color}
      `}
      onClick={onClick}
    >
      {buttontext}
    </button>
  )
}