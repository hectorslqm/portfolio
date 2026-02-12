export type PositionType = {
  position: string;
  location?: string;
  locationCoordinates?: { lat: number; lng: number };
  contractType?:
    | "full-time"
    | "part-time"
    | "contract"
    | "freelance"
    | "internship";
  start: Date;
  end?: Date;
  content?: string[];
  tags?: string[];
};

export type WorkHistoryType = {
  company: string;
  companyWebsite?: string;
  logo?: string;
  companyDescription?: string;
  positions: PositionType[];
}[];

const createDateUTC = (dateString: string) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month, day));
};

export const WorkHistory: WorkHistoryType = [
  {
    company: "Volkswagen de México",
    companyWebsite: "https://www.vw.com.mx/",
    logo: "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_retina_2400.jpg?1649155356",
    companyDescription:
      "One of the world's leading automobile manufacturers. The company operates a large manufacturing plant in Puebla, Mexico, producing a range of vehicles for both domestic and international markets. With a strong commitment to quality and innovation, Volkswagen de México plays a key role in the global operations of the Volkswagen Group.",
    positions: [
      {
        position: "Internship at Betriebsmanagement",
        location: "Puebla, Puebla, Mexico",
        contractType: "internship",
        start: createDateUTC("2017-02-01"),
        end: createDateUTC("2017-08-01"),
        content: [
          "Contributed to the development of graphical interfaces using PHP supporting the administrative operations of the Betriebsmanagement system",
          "Took a leading role in advising students at the Learnstation, fostering cross-functional collaboration to redesign the door subjection device used in the VW Golf paint shop, achieving 2 USD savings per device and demonstrating strong problem-solving and process improvement skills.",
        ],
        tags: ["PHP", "CSS", "HTML", "Office 365"],
      },
    ],
  },
  {
    company: "El Faro Ferreterias",
    logo: "./images/faro.jpg",
    companyDescription:
      "One of the world's leading automobile manufacturers. The company operates a large manufacturing plant in Puebla, Mexico, producing a range of vehicles for both domestic and international markets. With a strong commitment to quality and innovation, Volkswagen de México plays a key role in the global operations of the Volkswagen Group.",
    positions: [
      {
        position: "Software Developer (Freelance)",
        location: "Ciudad mendoza, Veracruz, Mexico",
        contractType: "freelance",
        start: createDateUTC("2017-09-01"),
        end: createDateUTC("2018-07-01"),
        content: [
          "Designed and implemented a comprehensive personnel and attendance control system using Java and MySQL with biometric authentication, enhancing HR processes and improving administrative efficiency",
          "Enhanced and customized the company’s MyBusiness POS software by correcting and extending its Visual Basic code to meet specific operational needs, streamlining daily workflows and ensuring reliable performance. Additionally, redesigned the company’s logo and brand identity, delivering a modern and professional corporate image.",
        ],
        tags: [
          "Java Swing",
          "MySQL",
          "Biometric Scanner",
          "HTML",
          "CSS",
          "My Business POS",
          "Illustrator",
        ],
      },
    ],
  },
  {
    company: "BURY Technologies",
    companyWebsite: "https://bury.com",
    logo: "https://www.bury.com/wp-content/uploads/2020/05/logo_BURY_2020_ciemne_v2.svg",
    companyDescription:
      "​BURY is a global automotive supplier specializing in the development and production of advanced communication and connectivity systems for vehicles. Founded in 1987, the company operates across Europe, Asia, and North America, with facilities in Poland located in Mielec and Rzeszów.",
    positions: [
      {
        position: "Maintenance Engineer",
        location: "Huamantla, Tlaxcala, Mexico",
        contractType: "full-time",
        start: createDateUTC("2019-01-01"),
        end: createDateUTC("2019-08-01"),
        content: [
          "Performed preventive maintenance on production equipment to ensure operational uptime.",
        ],
        tags: ["PLC"],
      },
      {
        position: "Automation Engineer",
        location: "Mielec, Poland",
        contractType: "full-time",
        start: createDateUTC("2019-01-01"),
        end: createDateUTC("2019-08-01"),
        content: [
          "Designed and implemented C# interfaces for Modbus communication and Mitsubishi PLC integration, enabling precise monitoring of signals and cameras across the production line. I also configured sensors and developed production monitoring software using Delta PLC, ensuring real-time visibility of operational performance.",
          "Performed preventive maintenance on production equipment, proactively identifying and addressing potential issues to maximize operational uptime and support smooth manufacturing processes. My work contributed to both the reliability of automation systems and the efficiency of production monitoring.",
        ],
        tags: ["PLC", "Delta", "C#"],
      },
    ],
  },
  {
    company: "SOFICO",
    companyWebsite: "https://sofico.be",
    logo: "./images/sofico.png",
    companyDescription:
      "Sofico is the world's leading supplier of mission-critical software solutions for automotive finance, leasing, fleet, and mobility management companies, and its software is used by a broad range of renowned leasing companies all over the world. Sofico was founded in 1988 in Ghent, Belgium, and has over 35 years of experience and business expertise in the industry. It is semi-privately owned, independent and currently employs 550 people in 11 offices worldwide. The company has installed its systems in 27 countries worldwide.",
    positions: [
      {
        position: "Java Core Developer",
        location: "Puebla, Puebla, Mexico",
        contractType: "full-time",
        start: createDateUTC("2019-12-01"),
        end: createDateUTC("2022-04-01"),
        content: [
          "Addressed and resolved complex debugging challenges through systematic root cause analysis, delivering high-impact solutions and reducing technical debt by refactoring and modernizing legacy code, significantly raising system stability and code quality.",
          "Collaborated with distributed international teams across multiple countries and time zones, delivering backend solutions in Agile sprints for various automotive clients worldwide.",
          "Improved critical business logic and ensured reliability across mission-critical processes, including a major update to the Annex 20 electronic invoicing module to meet regulatory compliance requirements in Mexico.",
        ],
        tags: ["Java", "OracleSQL", "Bitbucket", "Git", "Jira", "Agile"],
      },
    ],
  },
  {
    company: "Texas A&M Transportation Institute",
    companyWebsite: "https://tti.tamu.edu",
    logo: "./images/TTI.png",
    companyDescription:
      "Texas A&M Transportation Institute (TTI) is a state agency and a member of The Texas A&M University System. The research program at TTI addresses the mobility challenges of the 21st century, with an emphasis on safety and security, reliability and resiliency, and sustainability.",
    positions: [
      {
        position: "Software Applications Developer II",
        contractType: "full-time",
        location: "College Station, Texas, USA",
        start: createDateUTC("2024-04-01"),
        content: [
          "Promoted to Software Developer II to lead the development of a mission-critical data infrastructure for monitoring international border crossings (US-Mexico).",
          "Architected a high-throughput ingestion engine using multithreaded Python to process real-time UDP streams from 100+ WiFi, Bluetooth, and RFID sensors, handling thousands of concurrent data packets per minute.",
          'Developed a specializedAnalytics APIthat transforms raw database records into structured insights using Polars and Pandas; implemented complex mathematical models to generate accurate "typical travel time" benchmarks and predictive traffic metrics.',
          "Managed the delivery of high-fidelity datasets to support large-scale transportation research and binational logistics, enabling border agencies to make data-driven decisions regarding international trade.",
          "Built real-time monitoring dashboards withNext.js and TypeScript, visualizing sensor health and traffic flow to ensure 24/7 operational visibility of border infrastructure.",
        ],
        tags: [
          "Python",
          "Javascript",
          "React",
          "PostgreSQL",
          "Azure",
          "Github",
          "ClickUp",
        ],
      },
    ],
  },
];
