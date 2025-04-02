import { useState } from "react";

export default function About() {
  const [coreFocus, setCoreFocus] = useState([
    {
      title: "Skill Development:",
      des: "The primary goal is to impart practical computer skills, ranging from basic operations to advanced technical knowledge.",
    },
    {
        title:'Hands-on Learning:',
        des: 'Coaching            often emphasizes practical application through hands-on exercises and real-world scenarios.'
    },
    {
        title:'Personalized Guidance:',
        des: 'Good            coaching centers often provide individualized attention and cater to different learning paces and styles.'
    },
    {
        title:'Career Readiness:',
        des: 'Many programs            are designed to equip students with skills that are in demand in the job market.'
    },
    {
        title:'',
        des: ''
    },
    {
        title:'',
        des: ''
    },
  ]);
  return (
    <div>
      <div className="container mx-auto px-4 py-5">
        <img className="w-full" src="banner.webp" alt="banner" />
        <div className="py-5">
          <h1 className="text-3xl text-orange-500 font-[MachinaR] text-center lg:text-left">
            About
          </h1>
          <p className="text-justify">
            Computer coaching, especially in a place like Ranchi, Jharkhand,
            India, serves as a vital bridge in today's increasingly digital
            world. It encompasses a range of services and programs designed to
            equip individuals with the necessary computer skills for various
            purposes, including education, career advancement, and personal
            development.
          </p>
          <p className="my-2">
            In Ranchi, Jharkhand, where opportunities in the IT and related
            sectors are growing, computer coaching centers play a crucial role
            in empowering the local population with the skills needed to
            participate in and benefit from the digital economy. They cater to a
            diverse range of individuals, from students seeking foundational
            knowledge to professionals looking to upskill or change careers.
          </p>
          <h5 className="mb-2 mt-5 text-2xl font-medium">Core Focus:</h5>
          {coreFocus.map((e, i) => {
            return (
              <p className="text-xl" key={i}>
                <span className="font-medium">{e.title}</span>
                {e.des}
              </p>
            );
          })}

          
         
         

          <h4 className="my-2 text-2xl font-medium">
            Common Offerings (relevant to Ranchi, Jharkhand):
          </h4>
          <p className="text-xl">
            <span className="font-medium">Basic Computer Literacy:</span>{" "}
            Covering fundamental concepts, operating systems (like Windows),
            internet usage, and basic software applications.
          </p>
          <p className="text-xl">
            <span className="font-medium">Office Productivity Software:</span>{" "}
            Training in Microsoft Office Suite (Word, Excel, PowerPoint, Access)
            or similar open-source alternatives, which are crucial for many
            jobs.
          </p>
          <p className="text-xl">
            <span className="font-medium">
              Financial Accounting Software (Tally):
            </span>{" "}
            Given the business landscape in India, Tally training is often a
            popular and essential course.
          </p>
          <p className="text-xl">
            <span className="font-medium">Desktop Publishing (DTP):</span>{" "}
            Skills in design software for creating print and digital materials.
          </p>

          <p className="text-xl">
            <span className="font-medium">
              Graphic Design (Photoshop, CorelDRAW, Canva):
            </span>{" "}
            Training in visual communication and image manipulation.
          </p>
          <p className="text-xl">
            <span className="font-medium">Web Design and Development:</span>{" "}
            Courses covering HTML, CSS, JavaScript, and potentially content
            management systems.
          </p>
          <p className="text-xl">
            <span className="font-medium">
              Programming Languages (C, C++, Python, Java):
            </span>{" "}
            For those interested in software development.
          </p>
          <p className="text-xl">
            <span className="font-medium">Data Entry and Typing Skills:</span>{" "}
            Foundational skills required for many administrative roles.
          </p>
          <p>
            Digital Marketing: Training in online marketing strategies and
            tools.
          </p>
          <p>
            Hardware and Networking Basics: Understanding computer hardware and
            network fundamentals.
          </p>

          <h5 className="my-2 text-2xl font-medium">
            Benefits of Computer Coaching:
          </h5>

          <p>
            Improved Employability: In today's job market, computer skills are
            often a prerequisite. Coaching can significantly enhance career
            prospects.
          </p>
          <p>
            Enhanced Productivity: Proficiency in computer applications can lead
            to greater efficiency in various tasks.
          </p>
          <p>
            Increased Confidence: Mastering new skills builds self-assurance in
            a digital environment.
          </p>
          <p>
            Access to Information and Resources: Computer literacy opens doors
            to a vast amount of online information and learning resources.
          </p>
          <p>
            Adaptability to Technological Advancements: Coaching can help
            individuals stay current with rapidly evolving technology.
          </p>

          <p>
            Problem-Solving Skills: Learning how computers work and how to use
            software can improve logical thinking and problem-solving abilities.
          </p>
        </div>
      </div>
    </div>
  );
}
