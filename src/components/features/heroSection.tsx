import erica from "@/components/images/erica.jfif"
import instagram from "@/components/images/instagram.svg"
import facebook from "@/components/images/facebook.webp"
import tiktok from "@/components/images/tiktok.png"
import { Button } from "@/assets/button"

export function HomeSectiom() {

  const imgdesign = `
    flex
    items-center
    justify-center
    w-12
    h-12
    rounded-full
    bg-white/10
    border
    border-white/20
    backdrop-blur-md
    hover:bg-fuchsia-500
    hover:-translate-y-1
    hover:scale-110
    transition-all
    duration-300
    shadow-lg
  `

  const buttonAbt = () => {
    window.location.href = "/about"
  }

  return (
    <div className="
      min-h-[calc(100vh-80px)]
      bg-slate-950
      flex
      items-center
      justify-center
      px-4
      py-10
      overflow-hidden
    ">

      <div className="
        relative
        w-full
        max-w-[1150px]
        min-h-[650px]
        rounded-[2rem]
        overflow-hidden
        border
        border-white/10
        bg-gradient-to-br
        from-slate-900
        via-purple-950
        to-slate-950
        shadow-[0_25px_100px_rgba(139,92,246,0.25)]
      ">

        {/* Background Effects */}

        <div className="
          absolute
          -top-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-fuchsia-500/20
          blur-3xl
        " />

        <div className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        " />

        {/* MAIN CONTENT */}

        <div className="
          relative
          z-10
          min-h-[650px]
          grid
          grid-cols-1
          lg:grid-cols-[45%_55%]
        ">

          {/* LEFT - IMAGE */}

          <div className="
            flex
            items-center
            justify-center
            px-6
            py-16
            lg:px-10
            lg:py-0
            bg-white/[0.02]
            border-b
            lg:border-b-0
            lg:border-r
            border-white/10
          ">

            <div className="
              relative
              flex
              items-center
              justify-center
            ">

              {/* Glow */}

              <div className="
                absolute
                w-[340px]
                h-[340px]
                sm:w-[400px]
                sm:h-[400px]
                rounded-full
                bg-purple-500/20
                blur-3xl
              " />

              {/* Outer Circle */}

              <div className="
                absolute
                w-[300px]
                h-[300px]
                sm:w-[370px]
                sm:h-[370px]
                rounded-full
                border
                border-fuchsia-400/40
                shadow-[0_0_80px_rgba(168,85,247,0.3)]
              " />

              {/* Image */}

              <div className="
                relative
                z-10
                p-2
                rounded-full
                bg-gradient-to-br
                from-fuchsia-400
                via-purple-500
                to-blue-500
                shadow-[0_20px_70px_rgba(168,85,247,0.5)]
              ">

                <img
                  src={erica}
                  className="
                    w-52
                    h-52
                    sm:w-64
                    sm:h-64
                    lg:w-72
                    lg:h-72
                    rounded-full
                    object-cover
                    border-4
                    border-slate-950
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* Floating Dot */}

              <div className="
                absolute
                top-2
                right-5
                w-5
                h-5
                rounded-full
                bg-fuchsia-400
                shadow-[0_0_25px_rgba(232,121,249,0.9)]
              " />

              <div className="
                absolute
                bottom-5
                left-3
                w-4
                h-4
                rounded-full
                bg-blue-400
                shadow-[0_0_25px_rgba(96,165,250,0.9)]
              " />

            </div>

          </div>


          {/* RIGHT - TEXT */}

          <div className="
            flex
            flex-col
            justify-center
            px-7
            py-14
            sm:px-12
            lg:px-16
            xl:px-20
          ">

            {/* Small Heading */}

            <p className="
              w-fit
              px-4
              py-2
              rounded-full
              bg-fuchsia-500/10
              border
              border-fuchsia-400/20
              text-fuchsia-300
              text-xs
              sm:text-sm
              font-semibold
              tracking-[0.2em]
              uppercase
            ">
              Welcome to my portfolio
            </p>


            {/* Name */}

            <h1 className="
              mt-6
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-black
              leading-[0.95]
              text-white
            ">

              ERICA

              <span className="
                block
                bg-gradient-to-r
                from-fuchsia-400
                via-purple-400
                to-blue-400
                bg-clip-text
                text-transparent
              ">
                C
              </span>

              <span className="block">
                SOBIONO
              </span>

            </h1>


            {/* Course */}

            <div className="
              flex
              items-center
              gap-3
              mt-6
            ">

              <div className="
                w-12
                h-1
                rounded-full
                bg-gradient-to-r
                from-fuchsia-500
                to-blue-500
              " />

              <p className="
                text-purple-300
                font-bold
                tracking-widest
              ">
                BSIT 3-D
              </p>

            </div>


            {/* Description */}

            <p className="
              mt-7
              max-w-2xl
              text-base
              sm:text-lg
              text-slate-300
              leading-8
            ">
              Hello! I am{" "}
              <b className="text-fuchsia-400">
                Erica Sobiono
              </b>
              , a BSIT student at Cordova Public College who enjoys
  exploring technology and creating websites. This portfolio
  presents some of my projects, skills, and experiences as I
  continue to improve my knowledge in web development.
            </p>


            {/* SOCIAL + BUTTON */}

            <div className="
              mt-9
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-6
            ">

              {/* Social Icons */}

              <div className="
                flex
                gap-3
              ">

                <div className={imgdesign}>
                  <a
                    href="https://www.instagram.com/kyutie_chay?igsh=MTd5aHl4b2piZndjOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagram}
                      className="w-6 h-6"
                    />
                  </a>
                </div>

                <div className={imgdesign}>
                  <a
                    href="https://www.facebook.com/share/199zAGDArV/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebook}
                      className="w-7 h-7"
                    />
                  </a>
                </div>

                <div className={imgdesign}>
                  <a
                    href="https://www.tiktok.com/@itsmegelay446"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={tiktok}
                      className="w-6 h-6"
                    />
                  </a>
                </div>

              </div>


              {/* Button */}

              <Button
                onClick={buttonAbt}
                color="
                  w-fit
                  px-7
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-fuchsia-600
                  to-blue-600
                  text-white
                  font-bold
                  shadow-[0_0_25px_rgba(168,85,247,0.35)]
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
                  transition-all
                  duration-300
                "
                buttontext="About Me →"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}