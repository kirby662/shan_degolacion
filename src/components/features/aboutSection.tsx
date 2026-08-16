export function AboutSection() {

  const skills = [
    { skills: "React" },
    { skills: "TypeScript" },
    { skills: "Tailwind CSS" },
    { skills: "Web Design" },
    { skills: "HTML & CSS" },
  ]

  return (
    <div className="
      min-h-screen
      bg-slate-950
      px-4
      py-16
      sm:px-8
      overflow-hidden
    ">

      <main className="
        relative
        max-w-[1150px]
        mx-auto
      ">

        {/* Background Decorations */}

        <div className="
          absolute
          -top-40
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-fuchsia-600/20
          blur-3xl
        " />

        <div className="
          absolute
          -bottom-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-600/20
          blur-3xl
        " />

        {/* Main Container */}

        <div className="
          relative
          z-10
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-gradient-to-br
          from-slate-900
          via-purple-950
          to-slate-950
          shadow-[0_25px_100px_rgba(139,92,246,0.2)]
        ">

          <div className="
            p-6
            sm:p-10
            lg:p-14
          ">

            {/* HEADER */}

            <div className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-6
            ">

              <div>

                <p className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-fuchsia-400
                ">
                  Get to know me
                </p>

                <h1 className="
                  mt-3
                  text-5xl
                  sm:text-6xl
                  font-black
                  bg-gradient-to-r
                  from-fuchsia-400
                  via-purple-400
                  to-blue-400
                  bg-clip-text
                  text-transparent
                ">
                  ABOUT ME
                </h1>

              </div>

              <div className="
                h-1
                w-24
                rounded-full
                bg-gradient-to-r
                from-fuchsia-500
                to-blue-500
                lg:mb-3
              " />

            </div>


            {/* INTRODUCTION */}

            <div className="
              mt-12
              grid
              grid-cols-1
              lg:grid-cols-[1.2fr_0.8fr]
              gap-8
            ">

              {/* WHO I AM */}

              <div className="
                rounded-3xl
                bg-white/[0.04]
                border
                border-white/10
                p-7
                sm:p-9
                backdrop-blur-md
                hover:border-fuchsia-400/30
                hover:-translate-y-1
                transition-all
                duration-300
              ">

                <div className="
                  flex
                  items-center
                  gap-3
                  mb-6
                ">

                  <div className="
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-fuchsia-500/10
                    border
                    border-fuchsia-400/20
                    text-fuchsia-400
                    font-bold
                  ">
                    01
                  </div>

                  <h2 className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-white
                  ">
                    Who I Am
                  </h2>

                </div>

                <p className="
                  text-base
                  sm:text-lg
                  leading-8
                  text-slate-300
                ">
                  Hello! My name is{" "}
                  <b className="text-fuchsia-400">
                    Erica
                  </b>
                  . I am a{" "}
                  <b className="text-purple-400">
                    BSIT student
                  </b>
                  {" "}at{" "}
                  <b className="text-blue-400">
                    Cordova Public College
                  </b>.
                </p>

                <p className="
                  mt-5
                  text-base
                  sm:text-lg
                  leading-8
                  text-slate-400
                ">
                  I enjoy learning about technology and creating
                  simple, useful, and creative web projects. I am
                  continuously improving my skills through practice
                  and new projects.

                </p>

              </div>


              {/* CURRENT FOCUS */}

              <div className="
                rounded-3xl
                p-7
                sm:p-9
                bg-gradient-to-br
                from-fuchsia-600
                via-purple-600
                to-blue-600
                shadow-[0_20px_50px_rgba(139,92,246,0.25)]
                hover:-translate-y-1
                transition-all
                duration-300
              ">

                <div className="
                  flex
                  items-center
                  gap-3
                  mb-6
                ">

                  <div className="
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                    border
                    border-white/20
                    text-white
                    font-bold
                  ">
                    02
                  </div>

                  <h2 className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-white
                  ">
                    What I Do
                  </h2>

                </div>

                <p className="
                  text-base
                  sm:text-lg
                  leading-8
                  text-purple-50
                ">
                  I am currently focused on improving my web
                  development skills. I work with React, TypeScript,
                  Tailwind CSS, and other technologies while building
                  projects for school and personal practice.
                </p>

              </div>

            </div>


            {/* SKILLS */}

            <div className="mt-14">

              <div className="
                flex
                items-center
                gap-4
              ">

                <div>

                  <p className="
                    text-sm
                    uppercase
                    tracking-widest
                    text-fuchsia-400
                    font-semibold
                  ">
                    Technologies
                  </p>

                  <h2 className="
                    mt-1
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-white
                  ">
                    My Skills
                  </h2>

                </div>

                <div className="
                  flex-1
                  h-px
                  bg-gradient-to-r
                  from-fuchsia-500/60
                  to-transparent
                " />

              </div>


              <div className="
                mt-7
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-5
                gap-4
              ">

                {skills.map((s, index) => (

                  <div
                    key={index}
                    className="
                      min-h-16
                      flex
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      px-4
                      py-3
                      text-center
                      font-semibold
                      text-slate-200
                      hover:bg-gradient-to-br
                      hover:from-fuchsia-600
                      hover:to-purple-600
                      hover:text-white
                      hover:border-transparent
                      hover:-translate-y-2
                      hover:shadow-[0_15px_30px_rgba(168,85,247,0.3)]
                      transition-all
                      duration-300
                    "
                  >
                    {s.skills}
                  </div>

                ))}

              </div>

            </div>


            {/* GOAL */}

            <div className="
              mt-14
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-7
              sm:p-10
              relative
              overflow-hidden
            ">

              <div className="
                absolute
                -right-20
                -top-20
                w-48
                h-48
                rounded-full
                bg-fuchsia-500/10
                blur-3xl
              " />

              <div className="relative z-10">

                <p className="
                  text-sm
                  uppercase
                  tracking-widest
                  text-blue-400
                  font-semibold
                ">
                  Looking Ahead
                </p>

                <h2 className="
                  mt-2
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-white
                ">
                  My Goal
                </h2>

                <p className="
                  mt-5
                  max-w-4xl
                  text-base
                  sm:text-lg
                  leading-8
                  text-slate-400
                ">
                  My goal is to become a better developer by continuing
                  to practice, explore new technologies, and build
                  meaningful projects. I want to strengthen my
                  programming skills and gain more experience in
                  creating modern and user-friendly websites.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}