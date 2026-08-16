import { SubmitButton } from "@/assets/submitbutton"

export function ContactSection() {

  const input = `
    w-full
    px-5
    py-3.5
    rounded-2xl
    border
    border-white/10
    bg-white/[0.04]
    backdrop-blur-md
    text-white
    placeholder:text-slate-500
    outline-none
    focus:border-fuchsia-400/60
    focus:ring-2
    focus:ring-fuchsia-500/20
    focus:bg-white/[0.06]
    focus:shadow-[0_0_25px_rgba(168,85,247,0.15)]
    transition-all
    duration-300
  `

  return (
    <div className="
      min-h-[calc(100vh-80px)]
      bg-slate-950
      px-4
      py-16
      pb-24
      flex
      items-center
      justify-center
      overflow-hidden
    ">

      <div className="
        relative
        w-full
        max-w-[1100px]
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

        {/* Background Effects */}

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

        <div className="
          relative
          z-10
          grid
          grid-cols-1
          lg:grid-cols-[40%_60%]
        ">

          {/* LEFT SIDE */}

          <div className="
            flex
            flex-col
            justify-center
            px-7
            py-12
            sm:px-10
            lg:px-12
            bg-white/[0.02]
            border-b
            lg:border-b-0
            lg:border-r
            border-white/10
          ">

            <p className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-fuchsia-400
            ">
              Let's connect
            </p>

            <h1 className="
              mt-4
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
              CONTACT
            </h1>

            <div className="
              mt-5
              w-20
              h-1
              rounded-full
              bg-gradient-to-r
              from-fuchsia-500
              to-blue-500
            " />

            <p className="
              mt-7
              text-base
              sm:text-lg
              leading-8
              text-slate-400
            ">
              Have a question, suggestion, or just want to say hello?
              Send me a message and I will be happy to hear from you.
            </p>

            {/* Contact Details */}

            <div className="
              mt-10
              space-y-4
            ">

              <div className="
                p-4
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                hover:border-fuchsia-400/30
                transition-all
                duration-300
              ">
                <p className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-fuchsia-400
                  font-semibold
                ">
                  Name
                </p>

                <p className="
                  mt-1
                  text-white
                  font-semibold
                ">
                  Erica
                </p>
              </div>

              <div className="
                p-4
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                hover:border-purple-400/30
                transition-all
                duration-300
              ">
                <p className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-purple-400
                  font-semibold
                ">
                  Course
                </p>

                <p className="
                  mt-1
                  text-white
                  font-semibold
                ">
                  BSIT 3-D
                </p>
              </div>

              <div className="
                p-4
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                hover:border-blue-400/30
                transition-all
                duration-300
              ">
                <p className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-blue-400
                  font-semibold
                ">
                  School
                </p>

                <p className="
                  mt-1
                  text-white
                  font-semibold
                ">
                  Cordova Public College
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE - FORM */}

          <div className="
            px-7
            py-12
            sm:px-10
            lg:px-14
          ">

            <p className="
              text-white
              text-2xl
              sm:text-3xl
              font-bold
            ">
              Send a Message
            </p>

            <p className="
              mt-2
              text-slate-500
            ">
              Fill out the form below.
            </p>

            <form className="
              mt-8
              flex
              flex-col
              gap-5
            ">

              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              ">

                <div>
                  <label className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  ">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First Name"
                    className={input}
                  />
                </div>

                <div>
                  <label className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-300
                  ">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last Name"
                    className={input}
                  />
                </div>

              </div>


              <div>
                <label className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-slate-300
                ">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className={input}
                />
              </div>


              <div>
                <label className="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-slate-300
                ">
                  Message
                </label>

                <textarea
                  placeholder="Write your message here..."
                  rows={7}
                  className={`${input} resize-none`}
                />
              </div>


              <div className="
                flex
                justify-end
                pt-2
              ">

                <SubmitButton
                  buttontext="Send Message →"
                />

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}