export function Footer() {
  return (
    <footer className="
      fixed
      bottom-0
      left-0
      z-50
      w-full
      min-h-16

      bg-gradient-to-r
      from-blue-700
      via-blue-500
      to-cyan-500

      bg-[length:200%_200%]
      animate-[gradient_4s_ease_infinite]

      shadow-[0_-4px_25px_rgba(37,99,235,0.35)]

      px-4
      py-3
    ">

      <div className="
        max-w-[1200px]
        mx-auto
        min-h-10

        flex
        flex-col
        justify-center
        items-center
        text-center
        gap-1

        sm:flex-row
        sm:justify-between
        sm:gap-4
      ">

        <p className="
          text-white
          text-xs
          sm:text-sm
          md:text-base
          font-medium
        ">
          © 2026 Angel Rose Pogoy
        </p>

        <p className="
          text-white
          text-xs
          sm:text-sm
          md:text-base
          font-medium
        ">
          BSIT 3-D | Cordova Public College
        </p>

      </div>

    </footer>
  )
}