import { useState } from "react";

export default function About() {
  const [coreFocus, setCoreFocus] = useState([
    {
      title: "Skill Development:",
      des: "The primary goal is to impart practical computer skills, ranging from basic operations to advanced technical knowledge.",
    },
    {
      title: "Hands-on Learning:",
      des: "Coaching            often emphasizes practical application through hands-on exercises and real-world scenarios.",
    },
    {
      title: "Personalized Guidance:",
      des: "Good            coaching centers often provide individualized attention and cater to different learning paces and styles.",
    },
    {
      title: "Career Readiness:",
      des: "Many programs            are designed to equip students with skills that are in demand in the job market.",
    },
    {
      title: "",
      des: "",
    },
    {
      title: "",
      des: "",
    },
  ]);
  const [commonOffering, setCommonOffering] = useState([
    {
      title: "Basic Computer Literacy : ",
      des: " Covering fundamental concepts, operating systems (like Windows), internet usage, and basic software applications.",
    },
    {
      title: "Office Productivity Software : ",
      des: " Training in Microsoft Office Suite (Word, Excel, PowerPoint, Access)      or similar open-source alternatives, which are crucial for many jobs.",
    },
    {
      title: "Financial Accounting Software (Tally) : ",
      des: "Given the business landscape in India, Tally training is often a            popular and essential course.",
    },
    {
      title: "Desktop Publishing (DTP):",
      des: "Skills in design software for creating print and digital materials.",
    },
    {
      title: "Graphic Design (Photoshop, CorelDRAW, Canva):",
      des: "Training in visual communication and image manipulation.",
    },
    {
      title: "Web Design and Development:",
      des: " Courses covering HTML, CSS, JavaScript, and potentially content            management systems.",
    },
    {
      title: " Programming Languages (C, C++, Python, Java):",
      des: "For those interested in software development.",
    },
    {
      title: "Data Entry and Typing Skills:",
      des: "Foundational skills required for many administrative roles.",
    },
    {
      title: " Digital Marketing:",
      des: "Training in online marketing strategies and            tools.",
    },
    {
      title: " Hardware and Networking Basics:",
      des: " Understanding computer hardware and            network fundamentals.",
    },
  ]);
  const [benefits, setBenefits] = useState([
    {
      title: 'Improved Employability:',
      des: "In today's job market, computer skills are often a prerequisite. Coaching can significantly enhance career prospects."
    },
    {
      title: 'Enhanced Productivity:',
      des: ' Proficiency in computer applications can lead to greater efficiency in various tasks.'
    },
    {
      title: 'Increased Confidence:',
      des: 'Mastering new skills builds self-assurance in a digital environment.'
    },
    {
      title: 'Access to Information and Resources:',
      des: 'Computer literacy opens doors  to a vast amount of online information and learning resources.'
    },
    {
      title: 'Adaptability to Technological Advancements:',
      des: ' Coaching can help  individuals stay current with rapidly evolving technology.'
    },
    {
      title: 'Problem-Solving Skills:',
      des: 'Learning how computers work and how to use  software can improve logical thinking and problem-solving abilities.'
    },
    {
      title: '',
      des: ''
    },
  ])
  return (
    <div>
      <div className="container mx-auto px-4 py-5">
        <img className="w-full" src="banner.webp" alt="banner" />
        <div className="py-5">
          <h1 className="text-3xl text-orange-500 font-[MachinaR] text-center lg:text-left">
            About
          </h1>
          <p className="text-justify text-xl">
            Computer coaching, especially in a place like Ranchi, Jharkhand,
            India, serves as a vital bridge in today's increasingly digital
            world. It encompasses a range of services and programs designed to
            equip individuals with the necessary computer skills for various
            purposes, including education, career advancement, and personal
            development.
          </p>
          <p className="my-2 text-xl">
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
          {commonOffering.map((e, i) => {
            return (
              <p className="text-xl" key={i}>
                <span className="font-medium">{e.title}</span>
                {e.des}
              </p>
            );
          })}
          <h5 className="my-2 text-2xl font-medium">
            Benefits of Computer Coaching:
          </h5>
          {benefits.map((e, i) => {
            return (
              <p className="text-xl" key={i}>
                <span className="font-medium">{e.title}</span>
                {e.des}
              </p>
            );
          })}
         
        </div>
      </div>
    </div>
  );
}
