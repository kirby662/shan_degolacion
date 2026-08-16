import angel from "@/components/images/angel.png"
import instagram from "@/components/images/instagram.svg"
import facebook from "@/components/images/facebook.webp"
import tiktok from "@/components/images/tiktok.png"
import { Button } from "@/assets/button"

export function HomeSectiom() {

  const imgdesign = `
    flex
    items-center
    justify-center
    w-14
    h-14
    bg-blue-100
    rounded-xl
    border
    border-blue-200
    shadow-md
    hover:bg-blue-500
    hover:-translate-y-2
    hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
    transition-all
    duration-300
    cursor-pointer
  `

  const buttonAbt = () => {
    window.location.href = "/about"
  }

  return (
    <>

      <div className="
        flex
        justify-center
        items-center
        min-h-[calc(100vh-80px)]
        px-4
        py-20
      ">

    

        <div className="
          relative
          w-full
          max-w-[1050px]
          min-h-[550px]

          overflow-hidden

          rounded-3xl

          bg-gradient-to-br
          from-white
          via-blue-50
          to-blue-100

          border
          border-blue-200

          shadow-[0_20px_60px_rgba(30,64,175,0.18)]
        ">

        

          <div className="
            absolute
            -top-32
            -right-32
            w-80
            h-80
            rounded-full
            bg-blue-300/30
            blur-3xl
          " />

          <div className="
            absolute
            -bottom-40
            -left-40
            w-96
            h-96
            rounded-full
            bg-cyan-300/20
            blur-3xl
          " />

        

          <div className="
            relative
            z-10
            grid
            grid-cols-1
            md:grid-cols-2
            min-h-[550px]
          ">

         

            <div className="
              flex
              flex-col
              justify-center

              px-6
              py-16

              sm:px-10
              md:px-14
              lg:px-20

              order-2
              md:order-1
            ">

              <p className="
                text-blue-500
                font-semibold
                tracking-widest
                uppercase
                text-sm
                mb-3
              ">
                Welcome to my portfolio
              </p>

              <h1 className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold

                bg-gradient-to-r
                from-blue-700
                via-blue-500
                to-cyan-500

                bg-clip-text
                text-transparent

                leading-tight

                blink
              ">
               ANGEL ROSE
                <br />
                POGOY
              </h1>

              <p className="
                mt-3
                text-xl
                font-bold
                text-blue-600
              ">
                BSIT 3-D
              </p>

              <p className="
                mt-6
                text-base
                sm:text-lg
                text-slate-600
                leading-relaxed
                max-w-xl
              ">
               Hello! I am <b className="text-blue-700">Angel Rose Pogoy</b>,
a BSIT student from Cordova Public College (CPC). This is my first
React portfolio project, created as part of our subject requirement
under <b className="text-blue-700">Mr. Ariel Batoon</b>. This portfolio
shows my journey as a student while learning React, web development,
and modern UI design.
              </p>

             

              <div className="
                flex
                flex-wrap
                items-center
                gap-5
                mt-8
              ">

         

                <div className="
                  flex
                  gap-3
                ">

                  <div className={imgdesign}>
                    <a href="https://www.instagram.com/roses_angl?igsh=MWZ0dnphcnJ3dmRxcA==">
                      <img
                        src={instagram}
                        className="w-7 h-7"
                      />
                    </a>
                  </div>

                  <div className={imgdesign}>
                    <a href="https://www.facebook.com/search/top?q=angel%20mahusay">
                      <img
                        src={facebook}
                        className="w-8 h-8"
                      />
                    </a>
                  </div>

                  <div className={imgdesign}>
                    <a href="tiktok.com/@itsmegelay446">
                      <img
                        src={tiktok}
                        className="w-7 h-7"
                      />
                    </a>
                  </div>

                </div>

             

                <Button
                  onClick={buttonAbt}
                  color="
                    px-6
                    py-3
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-white
                    font-bold
                    rounded-lg
                    shadow-lg
                    shadow-blue-500/30
                    hover:scale-105
                    hover:shadow-blue-500/50
                    transition-all
                    duration-300
                  "
                  buttontext="About Me"
                />

              </div>

            </div>


         

            <div className="
              relative

              flex
              items-center
              justify-center

              order-1
              md:order-2

              min-h-[330px]
              md:min-h-0
            ">

        

              <div className="
                absolute
                w-64
                h-64
                sm:w-72
                sm:h-72
                lg:w-80
                lg:h-80

                rounded-full

                border
                border-blue-300

                bg-blue-200/30

                shadow-[0_0_70px_rgba(59,130,246,0.35)]
              " />

             

              <div className="
                absolute
                w-52
                h-52
                sm:w-60
                sm:h-60
                lg:w-68
                lg:h-68

                rounded-full

                border-4
                border-white

                bg-gradient-to-br
                from-blue-400
                to-cyan-300

                shadow-[0_0_40px_rgba(59,130,246,0.5)]
              " />

            

              <img
                src={angel}
                className="
                  relative
                  z-10

                  w-48
                  h-48

                  sm:w-56
                  sm:h-56

                  lg:w-64
                  lg:h-64

                  rounded-full

                  object-cover

                  border-8
                  border-white

                  shadow-[0_15px_40px_rgba(30,64,175,0.35)]

                  hover:scale-105

                  transition-all
                  duration-500
                "
              />

              

              <div className="
                absolute
                top-10
                right-12
                w-5
                h-5
                rounded-full
                bg-cyan-400
                shadow-[0_0_20px_rgba(34,211,238,0.8)]
              " />

              <div className="
                absolute
                bottom-14
                left-12
                w-4
                h-4
                rounded-full
                bg-blue-500
                shadow-[0_0_20px_rgba(59,130,246,0.8)]
              " />

            </div>

          </div>

        </div>

      </div>

    </>
  )
}