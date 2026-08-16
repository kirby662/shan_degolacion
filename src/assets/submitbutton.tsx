interface Props {
  buttontext: string
}

export function SubmitButton({ buttontext }: Props) {
  return (
    <button
      type="submit"
      className="
        w-full
        sm:w-40
        h-11
        px-6
        rounded-xl

        font-semibold
        text-white

        bg-gradient-to-r
        from-blue-600
        to-cyan-500

        shadow-[0_6px_20px_rgba(37,99,235,0.3)]

        hover:from-blue-700
        hover:to-cyan-600

        hover:-translate-y-1
        hover:shadow-[0_10px_25px_rgba(37,99,235,0.45)]

        active:translate-y-0

        transition-all
        duration-300

        cursor-pointer
      "
    >
      {buttontext}
    </button>
  )
}