import { Link } from "react-router-dom"

export function Navbar() {

  const linkStyle = `
    relative
    px-4
    py-2

    text-slate-300
    text-sm
    sm:text-base
    font-semibold

    rounded-lg

    hover:text-cyan-300
    hover:bg-cyan-400/10
    hover:-translate-y-0.5

    hover:shadow-[0_0_18px_rgba(34,211,238,0.2)]

    transition-all
    duration-300
  `

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        w-full
        h-16

        bg-[#07111f]/95
        backdrop-blur-xl

        border-b
        border-slate-800

        shadow-[0_4px_30px_rgba(0,0,0,0.35)]
      "
    >

      <div
        className="
          h-full
          max-w-[1200px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12

          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="
            group
            flex
            items-center
            gap-2

            text-xl
            sm:text-2xl
            font-black
            tracking-wide

            text-white

            transition-all
            duration-300
          "
        >

          {/* Logo Dot */}

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-cyan-400

              shadow-[0_0_12px_rgba(34,211,238,0.8)]

              group-hover:scale-125
              transition-transform
              duration-300
            "
          />

          {/* Name */}

          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-indigo-400

              bg-clip-text
              text-transparent

              group-hover:from-cyan-300
              group-hover:to-blue-300

              transition-all
              duration-300
            "
          >
            Shan
          </span>

        </Link>


        {/* Navigation */}

        <div
          className="
            flex
            items-center
            gap-1
            sm:gap-2
          "
        >

          {links.map((link) => (

            <Link
              key={link.path}
              to={link.path}
              className={linkStyle}
            >
              {link.name}
            </Link>

          ))}

        </div>

      </div>

    </nav>
  )
}