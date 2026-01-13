import React from 'react';
import './Resume.css';
import { useEffect, useState } from "react";

const API_BASE = "https://natalie.nataliethinks.workers.dev"; 

export default function Resume() {


const [count, setCount] = useState(null);

useEffect(() => {
  const run = async () => {
    try {
   
      await fetch(`${API_BASE}/count`, { method: "POST" });

      const res = await fetch(`${API_BASE}/count`);
      const data = await res.json();
      setCount(data.count);
    } catch (e) {
      console.error("Failed to load visitor count", e);
    }
  };
  run();
}, []);

  const resume = {
    name: "Wan Kei Chiu (Natalie Chiu)",
    // title: "Software Engineer",
    summary: "Application Support Specialist with over 5 years of hands-on experience supporting SAP SD Order-to-Cash (O2C) processes and 3 years of experience supporting Electronic Data Interchange (EDI) in enterprise environments. Strong background in end-to-end incident resolution, EDI transaction troubleshooting, and maintaining system stability across sales, shipping, and billing workflows. Known for independently handling the majority of support tickets, performing root cause analysis, and escalating issues only when required. Brings a solid understanding of business processes, data flows, and system interfaces, with a practical and detail-oriented approach to supporting reliable day-to-day operations and continuous improvement",
    contact: {
      email: "nataliekeichiu@gmail.com",
      phone: "+1 (647) 927 0927",
      location: "Toronto, Canada",
    //   linkedin: "linkedin.com/in/johnsmith"
    },
   skills: [
  "SAP SD / Order-to-Cash (O2C) Support",
  "EDI Production Support",
  "EDI Transaction & Data Issue Troubleshooting",
  "IDoc (OTC-related EDI Messages)",
  "Basic ABAP Analysis",
  "Incident Management & Root Cause Analysis",
  "UAT & Post-Go-Live Support",
  "Cross-Functional & Trading Partner Coordination",
  "Basic SQL (Data Checks & Reporting Support)",
  "Analytical & Problem-Solving Skills",
  "Collaboration & Communication Skills",
  "Windows & Google Workspace Environments",
  "Cloud Exposure (AWS / Azure)",
  "E-commerce & Integration Platforms (Elemica)"
],
    experience: [
    {
  title: "Senior Solution Specialist",
  company: "Covestro Hong Kong Ltd",
  period: "April 2022 - April 2025",
  responsibilities: [
    "Provided day-to-day application support for SAP SD Order-to-Cash (O2C) processes, supporting sales order creation, transactional data issues, and downstream process coordination",
    "Acted as the primary resolver for SAP and EDI-related production issues, independently handling the majority of tickets from analysis through resolution and closure",
    "Supported EDI production operations and trading partner onboarding by monitoring transactions, investigating data and message issues, and resolving integration errors using EDIFACT, ANSI X12, XML, and JSON formats",
    "Led issue investigation and root cause analysis for recurring O2C and EDI incidents, coordinating with internal technical teams and external partners when escalation was required",
    "Supported SAP system changes and EDI mapping enhancements by validating configurations, supporting integration testing, and assisting with UAT and post-go-live stabilization",
    "Participated in regional system rollouts and remote SAP implementation activities, providing stabilization support across multiple sites",
    "Ensured data accuracy, system continuity, and compliance by following documented technical standards, ITIL-aligned change processes, and quality guidelines",
    "Identified operational improvement opportunities by analyzing ticket trends and supporting process enhancements to reduce recurring issues"
  ]
},
{
  title: "Application Support Analyst",
  company: "Vistra Hong Kong Ltd",
  period: "Dec 2020 - Feb 2022",
  responsibilities: [
    "Provided L1/L2 application support for SAP systems, supporting order-related processes including billing issues, order creation issues, and downstream operational activities",
    "Handled user requests via service desk tools, troubleshooting application and data issues and resolving tickets within agreed SLAs",
    "Supported user-requested reporting and data extraction by maintaining standard reports within SAP and related business systems",
    "Independently investigated issues and escalated to specialized teams only when required, ensuring clear communication and proper handover",
    "Created and maintained knowledge base articles and support documentation to improve self-service capabilities and support efficiency",
    "Managed routine user administration requests and provided guidance to new team members on support processes and best practices"
  ]
},
{
  title: "Application Support",
  company: "Bluebell Hong Kong Ltd",
  period: "Jan 2019 - Dec 2020",
  responsibilities: [
    "Provided onsite and in-store application support for retail business systems, including POS, CRM, and inventory-related applications",
    "Supported daily operational activities by troubleshooting application issues, performing routine system checks, and maintaining data accuracy",
    "Assisted with inventory and order-related data checks and supported reporting activities",
    "Created user guides and internal documentation to support end users and improve operational efficiency",
    "Supported systems across Windows and Google environments with exposure to cloud-based infrastructure"
  ]
}
    ],
    education: [
      {
        degree: "Graduate Certificate in Information Technology System Analyst",
        school: "Humber College ",
        // year: "2025",
        // gpa: "3.8/4.0"
      },
       {
        degree: "Bachelor of Science in Business Information Technology",
        school: "Staffordshire University",
      }
    ],
    // certifications: [
    //   "AWS Certified Solutions Architect",
    //   "Google Cloud Professional Developer",
    //   "Certified Kubernetes Administrator (CKA)"
    // ]
    languages: [
      {
        languages: "English (Fluent) • Chinese (Fluent) • Mandarin (Proficient)",
      }
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">{resume.name}</h1>
          <p className="text-xl mb-4">{resume.title}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span>{resume.contact.email}</span>
            <span>{resume.contact.phone}</span>
            <span>{resume.contact.location}</span>
            {/* <span>{resume.contact.linkedin}</span> */}
          </div>
        </div>

        <div className="p-8">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
              Experience
            </h2>
            {resume.experience.map((job, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-600 text-sm">{job.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
              Education
            </h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600">{edu.school}</p>
                    {edu.gpa && (
                      <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  <span className="text-gray-600">{edu.year}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Certifications */}
          {/* <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {resume.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section> */}

            {/* Languages */}
             <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-600 pb-2">
              Languages
            </h2>
            {resume.languages.map((lang, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-gray-700 leading-relaxed">
                      {lang.languages}
                    </h3> 
                  </div>
                
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        Visitors: {count === null ? "…" : count}
      </p>
    </div>
  );
}