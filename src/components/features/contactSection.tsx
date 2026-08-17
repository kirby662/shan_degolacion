import { SubmitButton } from "@/assets/submitbutton"

export function ContactSection() {

  const input = `
    w-full
    px-5
    py-3.5
    rounded-xl
    border
    border-slate-700
    bg-slate-900/70
    text-white
    placeholder:text-slate-500
    outline-none

    focus:border-cyan-400
    focus:ring-2
    focus:ring-cyan-400/10
    focus:bg-slate-900

    transition-all
    duration-300
  `

  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        bg-[#07111f]
        px-5
        py-16
        pb-24
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


      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          max-w-[1100px]
          mx-auto
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[42%_58%]
            rounded-[2rem]
            overflow-hidden

            border
            border-slate-800

            bg-slate-900/40
            backdrop-blur-xl

            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          "
        >


          {/* ================= LEFT SIDE ================= */}

          <div
            className="
              relative
              px-7
              py-12
              sm:px-10
              lg:px-12
              lg:py-14

              bg-slate-900/50

              border-b
              lg:border-b-0
              lg:border-r

              border-slate-800
            "
          >

            {/* Small Heading */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  w-8
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
                Get in touch
              </p>

            </div>


            {/* Main Heading */}

            <h1
              className="
                mt-5
                text-5xl
                sm:text-6xl
                font-black
                leading-none
                text-white
              "
            >
              Let's

              <span
                className="
                  block
                  mt-2
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-400
                  to-indigo-400
                  bg-clip-text
                  text-transparent
                "
              >
                Talk.
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-7
                text-base
                sm:text-lg
                leading-8
                text-slate-400
              "
            >
              Have a question, idea, or message?
              Feel free to reach out. I would be happy
              to hear from you.
            </p>


            {/* Contact Information */}

            <div
              className="
                mt-10
                space-y-4
              "
            >

              {/* Name */}

              <div
                className="
                  group
                  p-4
                  rounded-xl

                  bg-slate-800/40
                  border
                  border-slate-800

                  hover:border-cyan-400/30
                  hover:bg-slate-800/60

                  transition-all
                  duration-300
                "
              >

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-cyan-400
                    font-semibold
                  "
                >
                  Name
                </p>

                <p
                  className="
                    mt-1
                    text-white
                    font-semibold
                  "
                >
                  Shan
                </p>

              </div>


              {/* Course */}

              <div
                className="
                  group
                  p-4
                  rounded-xl

                  bg-slate-800/40
                  border
                  border-slate-800

                  hover:border-blue-400/30
                  hover:bg-slate-800/60

                  transition-all
                  duration-300
                "
              >

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-blue-400
                    font-semibold
                  "
                >
                  Course
                </p>

                <p
                  className="
                    mt-1
                    text-white
                    font-semibold
                  "
                >
                  BSIT 3-D
                </p>

              </div>


              {/* School */}

              <div
                className="
                  group
                  p-4
                  rounded-xl

                  bg-slate-800/40
                  border
                  border-slate-800

                  hover:border-indigo-400/30
                  hover:bg-slate-800/60

                  transition-all
                  duration-300
                "
              >

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-indigo-400
                    font-semibold
                  "
                >
                  School
                </p>

                <p
                  className="
                    mt-1
                    text-white
                    font-semibold
                  "
                >
                  Cordova Public College
                </p>

              </div>

            </div>


            {/* Decorative Line */}

            <div
              className="
                absolute
                bottom-8
                left-12
                w-20
                h-px
                bg-gradient-to-r
                from-cyan-400
                to-transparent
              "
            />

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div
            className="
              px-7
              py-12
              sm:px-10
              lg:px-14
              lg:py-14
            "
          >

            {/* Form Heading */}

            <div>

              <p
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >
                Send a Message
              </p>

              <p
                className="
                  mt-2
                  text-slate-500
                  text-sm
                  sm:text-base
                "
              >
                Fill in the form and send me a message.
              </p>

            </div>


            {/* Form */}

            <form
              className="
                mt-8
                flex
                flex-col
                gap-5
              "
            >

              {/* First + Last Name */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-5
                "
              >

                <div>

                  <label
                    className="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    className={input}
                  />

                </div>


                <div>

                  <label
                    className="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    className={input}
                  />

                </div>

              </div>


              {/* Email */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className={input}
                />

              </div>


              {/* Message */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className={`${input} resize-none`}
                />

              </div>


              {/* Submit */}

              <div
                className="
                  flex
                  justify-start
                  pt-2
                "
              >

                <SubmitButton
                  buttontext="Send Message →"
                />

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}