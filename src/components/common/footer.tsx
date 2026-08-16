export function Footer() {
  return (
    <footer className="
      fixed
      bottom-0
      left-0
      z-50
      w-full
      min-h-16

      bg-slate-950/95
      backdrop-blur-lg

      border-t
      border-white/10

      shadow-[0_-4px_30px_rgba(168,85,247,0.2)]

      px-4
      py-3
    ">

      <div className="
        max-w-[1150px]
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
          text-slate-300
          text-xs
          sm:text-sm
          md:text-base
          font-medium
        ">
          © 2026 Erica
        </p>

        <p className="
          text-slate-400
          text-xs
          sm:text-sm
          md:text-base
          font-medium
        ">
          BSIT 3-D
          <span className="text-fuchsia-400 mx-2">|</span>
          Cordova Public College
        </p>

      </div>

    </footer>
  )
}