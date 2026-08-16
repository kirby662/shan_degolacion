import { Link } from "react-router-dom"

export function Navbar() {

  const linkStyle = `
    relative
    px-4
    py-2
    text-white
    text-base
    sm:text-lg
    font-semibold
    rounded-lg

    hover:bg-white/20
    hover:text-white

    hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]

    transition-all
    duration-300

    hover:-translate-y-1
  `

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <>
      <div className="
        sticky
        top-0
        z-50
        w-full
        h-16

        bg-gradient-to-r
        from-blue-700
        via-blue-500
        to-cyan-500

        bg-[length:200%_200%]
        animate-[gradient_4s_ease_infinite]

        shadow-[0_4px_25px_rgba(37,99,235,0.35)]
      ">

        <div className="
          h-full
          max-w-[1200px]
          mx-auto
          px-4
          sm:px-8

          flex
          items-center
          justify-between
        ">

          <Link
            to="/"
            className="
              text-white
              text-xl
              sm:text-2xl
              font-extrabold
              tracking-wide
              hover:text-cyan-100
              transition-all
              duration-300
            "
          >
            Angel Rose
          </Link>

          <div className="
            flex
            items-center
            gap-2
            sm:gap-5
          ">

            {links.map((l) => (

              <Link
                key={l.path}
                to={l.path}
                className={linkStyle}
              >
                {l.name}
              </Link>

            ))}

          </div>

        </div>

      </div>
    </>
  )
}