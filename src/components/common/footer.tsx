export function Footer() {
  return (
    <footer
      className="
        fixed
        bottom-0
        left-0
        z-50
        w-full
        min-h-16

        bg-[#07111f]/95
        backdrop-blur-xl

        border-t
        border-slate-800

        shadow-[0_-4px_30px_rgba(34,211,238,0.08)]

        px-5
        py-3
      "
    >

      <div
        className="
          max-w-[1200px]
          mx-auto
          min-h-10

          flex
          flex-col
          items-center
          justify-center

          text-center
          gap-1

          sm:flex-row
          sm:justify-between
          sm:gap-4
        "
      >

        {/* Copyright */}

        <p
          className="
            text-slate-400
            text-xs
            sm:text-sm

            font-medium

            transition-colors
            duration-300

            hover:text-cyan-300
          "
        >
          © 2026 <span className="text-cyan-400 font-semibold">Shan</span>
        </p>


        {/* School Information */}

        <p
          className="
            text-slate-500
            text-xs
            sm:text-sm

            font-medium
          "
        >
          BSIT 3-D

          <span
            className="
              text-cyan-400
              mx-2
            "
          >
            •
          </span>

          Cordova Public College
        </p>

      </div>

    </footer>
  )
}