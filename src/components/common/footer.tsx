
export function Footer() {
  return (
    <footer className="
    mt-20
      fixed bottom-0 w-full h-16
      shadow-[0_0_10px]
      bg-[linear-gradient(-20deg,#274DF5,#27EEF5,#076969)]
      bg-[length:200%_200%]
      animate-[gradient_2s_ease_infinite]
    ">
      <div className="
        max-w-6xl mx-auto
        h-full
        px-4
        flex flex-col
        justify-center
        items-center
        text-center
        gap-1

        sm:flex-row
        sm:justify-between
        sm:gap-0
        sm:text-sm

        md:px-6
        md:text-base

        lg:px-8
        lg:text-lg
      ">
        <p className="text-white">
          © 2026 Kirby Tajanlangit
        </p>

        <p className="text-white">
          BSIT 3-D | Cordova Public College
        </p>
      </div>
    </footer>
  )
}

