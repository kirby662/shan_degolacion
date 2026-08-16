export function AboutSection() {

  const skills = [
    { skills: "React" },
    { skills: "TypeScript" },
    { skills: "Tailwind CSS" },
    { skills: "Web Design" },
    { skills: "HTML & CSS" },
  ]

  return (
    <div className="min-h-screen flex flex-col">

      <main className="
        flex-1
        px-4
        sm:px-8
        md:px-12
        py-16
        pb-24
      ">

        <div className="
          relative
          w-full
          max-w-[1000px]
          mx-auto
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-white
          via-blue-50
          to-cyan-50
          border
          border-blue-200
          shadow-[0_20px_60px_rgba(37,99,235,0.15)]
          p-6
          sm:p-10
          md:p-14
        ">

          <div className="
            absolute
            -top-24
            -right-24
            w-64
            h-64
            rounded-full
            bg-blue-300/20
            blur-3xl
          " />

          <div className="
            absolute
            -bottom-32
            -left-32
            w-80
            h-80
            rounded-full
            bg-cyan-300/20
            blur-3xl
          " />

          <div className="relative z-10">

            <div className="text-center">

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-blue-500
                mb-2
              ">
                Get to know me
              </p>

              <h1 className="
                text-4xl
                sm:text-5xl
                font-extrabold
                bg-gradient-to-r
                from-blue-700
                via-blue-500
                to-cyan-500
                bg-clip-text
                text-transparent
                blink
                drop-shadow-[0_0_8px_rgba(59,130,246,0.25)]
              ">
                ABOUT ME
              </h1>

              <div className="
                w-20
                h-1
                mx-auto
                mt-4
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
              " />

            </div>

            <div className="
              mt-10
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
            ">

              <div className="
                bg-white/70
                backdrop-blur-sm
                rounded-2xl
                p-6
                border
                border-blue-100
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              ">

                <h2 className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-blue-700
                  mb-4
                ">
                  Who I Am
                </h2>

                <p className="
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-slate-600
                ">
                  Hello! My name is <b className="text-blue-700">
                    Angel Rose Pogoy
                  </b>. I am a <b className="text-blue-700">
                    BSIT student
                  </b> from <b className="text-blue-700">
                    Cordova Public College
                  </b>.
                </p>

                <p className="
                  mt-4
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-slate-600
                ">
                  I am currently learning web development and exploring
                  different technologies that can help me become a better
                  programmer and developer.
                </p>

              </div>

              <div className="
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                rounded-2xl
                p-6
                text-white
                shadow-lg
                shadow-blue-500/20
                hover:-translate-y-1
                hover:shadow-blue-500/40
                transition-all
                duration-300
              ">

                <h2 className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  mb-4
                ">
                  What I Am Learning
                </h2>

                <p className="
                  text-base
                  sm:text-lg
                  leading-relaxed
                  text-blue-50
                ">
                  I am learning technologies such as React, TypeScript,
                  and Tailwind CSS. I created this portfolio to practice
                  my skills and show the projects and knowledge I have
                  developed as a student.
                </p>

              </div>

            </div>

            <div className="mt-12">

              <div className="flex items-center gap-4">

                <h2 className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-blue-700
                ">
                  My Skills
                </h2>

                <div className="
                  flex-1
                  h-px
                  bg-gradient-to-r
                  from-blue-300
                  to-transparent
                " />

              </div>

              <div className="
                mt-6
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-5
                gap-4
              ">

                {skills.map((s, index) => (

                  <span
                    key={index}
                    className="
                      flex
                      items-center
                      justify-center
                      min-h-14
                      px-4
                      py-3
                      text-center
                      font-semibold
                      text-blue-700
                      bg-blue-100
                      border
                      border-blue-200
                      rounded-xl
                      shadow-sm
                      hover:bg-blue-600
                      hover:text-white
                      hover:-translate-y-2
                      hover:shadow-[0_10px_25px_rgba(37,99,235,0.35)]
                      cursor-pointer
                      transition-all
                      duration-300
                    "
                  >
                    {s.skills}
                  </span>

                ))}

              </div>

            </div>

            <div className="
              mt-12
              p-6
              sm:p-8
              rounded-2xl
              bg-gradient-to-r
              from-blue-50
              to-cyan-50
              border
              border-blue-200
            ">

              <h2 className="
                text-2xl
                sm:text-3xl
                font-bold
                text-blue-700
              ">
                My Goal
              </h2>

              <p className="
                mt-4
                text-base
                sm:text-lg
                leading-relaxed
                text-slate-600
              ">
                My goal is to improve my programming skills, learn more
                about web development, and create useful and creative
                projects in the future. I also want to continue learning
                new technologies and become a confident developer.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}