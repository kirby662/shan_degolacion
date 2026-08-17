export function AboutSection() {

  const skills = [
    { skills: "React" },
    { skills: "TypeScript" },
    { skills: "Tailwind CSS" },
    { skills: "Web Design" },
    { skills: "HTML & CSS" },
  ]

  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        bg-[#07111f]
        px-5
        py-16
        pb-24
        sm:px-8
        lg:px-12
        overflow-hidden
      "
    >

      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          -top-48
          -right-48
          w-[550px]
          h-[550px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -bottom-48
          -left-48
          w-[550px]
          h-[550px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
      />


      {/* ================= MAIN ================= */}

      <main
        className="
          relative
          z-10
          max-w-[1200px]
          mx-auto
        "
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between
            gap-6
            mb-12
          "
        >

          <div>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  w-9
                  h-px
                  bg-cyan-400
                "
              />

              <p
                className="
                  text-cyan-400
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                "
              >
                Get to know me
              </p>

            </div>


            <h1
              className="
                mt-4
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-black
                leading-none
                text-white
              "
            >
              About

              <span
                className="
                  ml-3
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-400
                  to-indigo-400
                  bg-clip-text
                  text-transparent
                "
              >
                Me
              </span>
            </h1>

          </div>


          <div
            className="
              hidden
              sm:block
              w-32
              h-px
              bg-gradient-to-r
              from-cyan-400
              to-transparent
              mb-3
            "
          />

        </div>


        {/* ================= INTRODUCTION ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.2fr_0.8fr]
            gap-6
          "
        >

          {/* WHO I AM */}

          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              backdrop-blur-xl

              p-7
              sm:p-9

              hover:border-cyan-400/30
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
                mb-7
              "
            >

              <div
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  text-cyan-400
                  font-bold
                "
              >
                01
              </div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >
                Who I Am
              </h2>

            </div>


            <p
              className="
                text-base
                sm:text-lg
                leading-8
                text-slate-300
              "
            >
              Hello! My name is{" "}
              <b className="text-cyan-400">
                Shan
              </b>
              . I am a{" "}
              <b className="text-blue-400">
                BSIT student
              </b>
              {" "}at{" "}
              <b className="text-indigo-400">
                Cordova Public College
              </b>.
            </p>


            <p
              className="
                mt-5
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              I enjoy learning about technology and creating
              simple, useful, and creative web projects. I am
              continuously improving my skills through practice,
              experimentation, and new projects.
            </p>

          </div>


          {/* WHAT I DO */}

          <div
            className="
              rounded-3xl
              p-7
              sm:p-9

              bg-gradient-to-br
              from-cyan-600
              via-blue-600
              to-indigo-700

              shadow-[0_20px_50px_rgba(37,99,235,0.2)]

              hover:-translate-y-1

              transition-all
              duration-300
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
                mb-7
              "
            >

              <div
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  font-bold
                "
              >
                02
              </div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >
                What I Do
              </h2>

            </div>


            <p
              className="
                text-base
                sm:text-lg
                leading-8
                text-blue-50
              "
            >
              I am currently focused on improving my web
              development skills. I work with React, TypeScript,
              Tailwind CSS, and other technologies while building
              projects for school and personal practice.
            </p>

          </div>

        </div>


        {/* ================= SKILLS ================= */}

        <div className="mt-14">

          <div
            className="
              flex
              items-center
              gap-5
            "
          >

            <div>

              <p
                className="
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400
                  font-semibold
                "
              >
                Technologies
              </p>

              <h2
                className="
                  mt-1
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-white
                "
              >
                My Skills
              </h2>

            </div>


            <div
              className="
                flex-1
                h-px
                bg-gradient-to-r
                from-cyan-400/50
                to-transparent
              "
            />

          </div>


          {/* Skill Cards */}

          <div
            className="
              mt-7
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-5
              gap-4
            "
          >

            {skills.map((s, index) => (

              <div
                key={index}
                className="
                  min-h-16

                  flex
                  items-center
                  justify-center

                  rounded-xl

                  bg-slate-900/60
                  border
                  border-slate-800

                  px-4
                  py-3

                  text-center
                  font-semibold
                  text-slate-300

                  hover:bg-cyan-500
                  hover:text-slate-950
                  hover:border-cyan-400
                  hover:-translate-y-1
                  hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)]

                  transition-all
                  duration-300
                "
              >
                {s.skills}
              </div>

            ))}

          </div>

        </div>


        {/* ================= GOAL ================= */}

        <div
          className="
            relative
            mt-14
            overflow-hidden

            rounded-3xl

            border
            border-slate-800

            bg-slate-900/50
            backdrop-blur-xl

            p-7
            sm:p-10
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              -right-24
              -top-24
              w-56
              h-56
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />


          <div
            className="
              relative
              z-10
            "
          >

            <p
              className="
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.2em]
                text-blue-400
                font-semibold
              "
            >
              Looking Ahead
            </p>


            <h2
              className="
                mt-2
                text-3xl
                sm:text-4xl
                font-bold
                text-white
              "
            >
              My Goal
            </h2>


            <p
              className="
                mt-5
                max-w-4xl
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              My goal is to become a better developer by
              continuing to practice, explore new technologies,
              and build meaningful projects. I want to strengthen
              my programming skills and gain more experience in
              creating modern and user-friendly websites.
            </p>

          </div>

        </div>

      </main>

    </section>
  )
}