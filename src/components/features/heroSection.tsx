import shan from "@/components/images/shan.jpg"
import instagram from "@/components/images/instagram.svg"
import facebook from "@/components/images/facebook.webp"
import tiktok from "@/components/images/tiktok.png"
import { Button } from "@/assets/button"

export function HomeSectiom() {

  const socialStyle = `
    flex
    items-center
    justify-center
    w-11
    h-11
    rounded-lg
    bg-slate-800/70
    border
    border-slate-700
    hover:bg-cyan-500
    hover:border-cyan-400
    hover:-translate-y-1
    transition-all
    duration-300
  `

  const buttonAbt = () => {
    window.location.href = "/about"
  }

  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-[#07111f]
        px-5
        py-16
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
      />

      {/* Decorative Lines */}

      <div
        className="
          absolute
          top-24
          left-10
          hidden
          lg:block
          w-24
          h-px
          bg-cyan-400/30
        "
      />

      <div
        className="
          absolute
          bottom-24
          right-10
          hidden
          lg:block
          w-24
          h-px
          bg-blue-400/30
        "
      />

      {/* Main Container */}

      <div
        className="
          relative
          z-10
          max-w-[1200px]
          min-h-[650px]
          mx-auto
          flex
          items-center
        "
      >

        <div
          className="
            w-full
            grid
            grid-cols-1
            lg:grid-cols-[55%_45%]
            gap-12
            lg:gap-4
            items-center
          "
        >

          {/* LEFT CONTENT */}

          <div
            className="
              order-2
              lg:order-1
              flex
              flex-col
              justify-center
              text-center
              lg:text-left
            "
          >

            {/* Small Label */}

            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-3
                mb-6
              "
            >

              <span
                className="
                  w-10
                  h-px
                  bg-cyan-400
                "
              />

              <span
                className="
                  text-cyan-400
                  text-sm
                  font-semibold
                  tracking-[0.25em]
                  uppercase
                "
              >
                Welcome
              </span>

            </div>

            {/* Heading */}

            <h1
              className="
                text-5xl
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-black
                leading-[0.95]
                tracking-tight
                text-white
              "
            >
              Hi, I'm

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
                SHAN DEGOLACION
              </span>
            </h1>

            {/* Course */}

            <div
              className="
                mt-7
                flex
                items-center
                justify-center
                lg:justify-start
                gap-3
              "
            >

              <div
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  text-cyan-300
                  text-sm
                  font-semibold
                  tracking-wide
                "
              >
                BSIT 3-D
              </div>

              <span className="text-slate-600">
                •
              </span>

              <span
                className="
                  text-slate-400
                  text-sm
                "
              >
                Web Development
              </span>

            </div>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[650px]
                mx-auto
                lg:mx-0
                text-base
                sm:text-lg
                text-slate-400
                leading-8
              "
            >
              I am Erica Sobiono, a Bachelor of Science in
              Information Technology student at Cordova Public
              College. I enjoy learning about technology,
              building websites, and turning ideas into
              simple and useful digital experiences.
            </p>

            {/* Social + Button */}

            <div
              className="
                mt-9
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-6
              "
            >

              {/* Social Icons */}

              <div
                className="
                  flex
                  gap-3
                "
              >

                {/* Instagram */}

                <a
                  href="https://www.instagram.com/shandegolacion?igsh=dzIzdXMzcnI4YzNu&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialStyle}
                >
                  <img
                    src={instagram}
                    className="w-5 h-5"
                    alt="Instagram"
                  />
                </a>

                {/* Facebook */}

                <a
                  href="https://www.facebook.com/share/1DR2ZGv9gJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialStyle}
                >
                  <img
                    src={facebook}
                    className="w-6 h-6"
                    alt="Facebook"
                  />
                </a>

                {/* TikTok */}

                <a
                  href="https://www.tiktok.com/@shandegolacion?_r=1&_d=secCgYIASAHKAESPgo8oL13Pc7Uqv1JquHFRhpFhdFPTOP0zkWNYRmHuvz2AfcepoZD433zFeYYDZcGB9HQI%2FFT0j1EO40TxvGWGgA%3D&_svg=1&checksum=da6caeccdbb6827beff6166ee67a3d072e825b24e90fd76a58d743e50b93b13c&item_author_type=1&reflow_sign_scene=7&rgssign=8.1.KEgiDGtzSfi4AYaL86RBSg&sec_uid=MS4wLjABAAAA46uDWKS9aCWe-2IwVhnBL4iVwyK5b23XpqvNTqGkbnXK_QEAgvWaY6KempUK6ZZ6&sec_user_id=MS4wLjABAAAA46uDWKS9aCWe-2IwVhnBL4iVwyK5b23XpqvNTqGkbnXK_QEAgvWaY6KempUK6ZZ6&share_app_id=1180&share_author_id=6952085705247343617&share_link_id=FB197288-D07B-4DF8-A9E9-C4CA51B6F0A0&share_region=PH&share_scene=1&sharer_language=en&social_share_type=4&source=h5_t&timestamp=1786933291&tt_from=copy&u_code=di59738i05e7kg&ug_btm=b8727%2Cb0&user_id=6952085705247343617&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialStyle}
                >
                  <img
                    src={tiktok}
                    className="w-5 h-5"
                    alt="TikTok"
                  />
                </a>

              </div>

              {/* Divider */}

              <div
                className="
                  hidden
                  sm:block
                  w-px
                  h-8
                  bg-slate-700
                "
              />

              {/* About Button */}

              <Button
                onClick={buttonAbt}
                color="
                  px-7
                  py-3
                  rounded-lg
                  bg-cyan-500
                  text-slate-950
                  font-bold
                  shadow-[0_10px_30px_rgba(34,211,238,0.2)]
                  hover:bg-cyan-400
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(34,211,238,0.35)]
                  transition-all
                  duration-300
                "
                buttontext="Explore My Work →"
              />

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div
            className="
              order-1
              lg:order-2
              flex
              items-center
              justify-center
              lg:justify-end
            "
          >

            <div
              className="
                relative
                w-[300px]
                h-[360px]
                sm:w-[360px]
                sm:h-[430px]
                lg:w-[390px]
                lg:h-[470px]
              "
            >

              {/* Large Glow */}

              <div
                className="
                  absolute
                  inset-5
                  rounded-[3rem]
                  bg-cyan-400/10
                  blur-[70px]
                "
              />

              {/* Outer Frame */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[2.5rem]
                  border
                  border-cyan-400/20
                  rotate-3
                "
              />

              {/* Image */}

              <div
                className="
                  absolute
                  inset-3
                  rounded-[2.3rem]
                  overflow-hidden
                  border
                  border-slate-700
                  bg-slate-900
                  shadow-[0_30px_80px_rgba(0,0,0,0.5)]
                "
              >

                <img
                  src={shan}
                  alt="Erica Sobiono"
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

              </div>

              {/* Top Badge */}

              <div
                className="
                  absolute
                  top-5
                  -right-3
                  sm:right-0
                  px-4
                  py-2
                  rounded-full
                  bg-slate-900
                  border
                  border-cyan-400/30
                  shadow-lg
                "
              >

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-cyan-300
                  "
                >

                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_10px_rgba(34,211,238,0.9)]
                    "
                  />

                  Available for projects

                </span>

              </div>

              {/* Bottom Card */}

              <div
                className="
                  absolute
                  bottom-6
                  -left-5
                  sm:-left-8
                  px-5
                  py-4
                  rounded-2xl
                  bg-slate-900/90
                  backdrop-blur-md
                  border
                  border-slate-700
                  shadow-xl
                "
              >

                <p
                  className="
                    text-xs
                    text-slate-500
                    uppercase
                    tracking-widest
                  "
                >
                  Currently
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  Learning & Creating
                </p>

              </div>

              {/* Decorative Dot */}

              <div
                className="
                  absolute
                  -bottom-3
                  right-10
                  w-5
                  h-5
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_25px_rgba(96,165,250,0.8)]
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}