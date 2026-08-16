import { Link } from "react-router-dom"

export function Navbar() {

  const linkStyle = `
    relative
    px-4
    py-2

    text-white
    text-sm
    sm:text-base
    font-semibold

    rounded-full

    hover:bg-white/10
    hover:text-fuchsia-300
    hover:-translate-y-1

    hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]

    transition-all
    duration-300
  `

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav className="
      sticky
      top-0
      z-50
      w-full
      h-16

      bg-slate-950/90
      backdrop-blur-lg

      border-b
      border-white/10

      shadow-[0_4px_30px_rgba(0,0,0,0.3)]
    ">

      <div className="
        h-full
        max-w-[1150px]
        mx-auto
        px-4
        sm:px-8

        flex
        items-center
        justify-between
      ">

        {/* Logo */}

        <Link
          to="/"
          className="
            text-white
            text-xl
            sm:text-2xl
            font-extrabold
            tracking-wide

            bg-gradient-to-r
            from-fuchsia-400
            via-purple-400
            to-blue-400

            bg-clip-text
            text-transparent

            hover:scale-105
            transition-all
            duration-300
          "
        >
          Erica
        </Link>


        {/* Navigation */}

        <div className="
          flex
          items-center
          gap-1
          sm:gap-3
        ">

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