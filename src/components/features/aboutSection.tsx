

export  function AboutSection() {
    const skills = [ 
        { skills: "matulog"}, 
        { skills: "mo kaon"}, 
        { skills: "matulog"}, 
        { skills: "mo layat"}, 
        { skills: "mo laba"}, 
    ]

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-1 px-5 sm:px-8 md:px-12 py-10 pb-24">

        <div className="shrink 
         w-full     
          max-w-[900px]
          mx-auto
          border-2
          border-gray-300
          rounded-xl
          shadow-2xl
          shadow-gray-800
          p-6
          sm:p-8
          md:p-10
        ">

          <h1 className="
            text-3xl
            sm:text-4xl
            font-bold
            text-blue-700
            blink
            text-shadow-[0_0_10px_rgba(0,0,0,0.5)]
          ">
            ABOUT ME
          </h1>

          <p className="
            mt-6
            text-base
            sm:text-lg
            leading-relaxed
          ">
            Hello! My name is <b>Kirby Tajanlangit</b>. I am a
            <b> BSIT 3-D </b>
            student from <b>Cordova Public College</b>.
          </p>

          <p className="
            mt-4
            text-base
            sm:text-lg
            leading-relaxed
          ">
            I am currently learning web development and exploring
            technologies such as React, TypeScript, and Tailwind CSS.
            I created this portfolio to practice my skills and show
            the projects and knowledge that I have developed.
          </p>

          <h2 className="mt-8
            text-2xl sm:text-3xl font-bold
            text-blue-700
          ">
            My Skills
          </h2>

          <div className=" mt-4 flex
            flex-wrap
            gap-3
          "> 
          {skills.map((s)=>(
         <span key={s.skills} 
            className="shadow-[2px_0_10px] hover:-translate-y-3 cursor-pointer hover:shadow-[3px_3px_10px] transition duration-200 bg-blue-300 px-4 py-2 rounded-md">
             {s.skills}
            </span>
          ))}
            
          </div>

          <h2 className="
            mt-8
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
          ">
            My goal is to improve my programming skills, learn more
            about web development, and create useful and creative
            projects in the future.
          </p>

        </div>

      </main>


    </div>
  )
}