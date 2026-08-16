import { SubmitButton } from "@/assets/submitbutton"

export function ContactSection() {

  const input = `
    w-full
    px-4
    py-3
    rounded-xl
    border
    border-blue-200
    bg-white/80
    text-slate-700
    placeholder:text-slate-400
    outline-none
    shadow-sm
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-400/30
    focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]
    transition-all
    duration-300
  `

  return (
    <>

      <div className="
        flex
        justify-center
        items-center
        min-h-[calc(100vh-80px)]
        px-4
        py-16
        pb-24
      ">

        <div className="
          relative
          w-full
          max-w-[700px]
          overflow-hidden

          rounded-3xl

          bg-gradient-to-br
          from-white
          via-blue-50
          to-cyan-50

          border
          border-blue-200

          shadow-[0_20px_60px_rgba(37,99,235,0.18)]

          p-6
          sm:p-10
          md:p-12
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

          <div className="
            relative
            z-10
          ">

            <div className="text-center">

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-blue-500
                mb-2
              ">
                Get in touch
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
              ">
                CONTACT
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

              <p className="
                mt-5
                text-slate-600
                text-sm
                sm:text-base
                max-w-md
                mx-auto
              ">
                Have a question or want to connect? Send me a message
                using the form below.
              </p>

            </div>

            <form className="
              mt-10
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

                <input
                  type="text"
                  placeholder="First Name"
                  className={input}
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className={input}
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className={input}
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className={`${input} resize-none`}
              />

              <div className="
                flex
                justify-center
                pt-3
              ">

                <SubmitButton
                  buttontext="Send Message"
                />

              </div>

            </form>

          </div>

        </div>

      </div>

    </>
  )
}