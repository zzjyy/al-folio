// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "history, mission, governance, and external accreditation of ZZOK College.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-programmes",
          title: "programmes",
          description: "Bachelor&#39;s, Master&#39;s, and doctoral programmes offered by the Faculties of Computer Science and Cognitive Studies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/programmes/";
          },
        },{id: "nav-faculty",
          title: "faculty",
          description: "Senior academic staff across the Faculties of Computer Science and Cognitive Studies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Research clusters, active grants, and the seminar calendar at ZZOK.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "refereed research output of the academic staff of ZZOK, in reverse chronological order. The list is generated automatically from our internal BibTeX file.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-admissions",
          title: "admissions",
          description: "Application procedure, deadlines, fees, and scholarships for the 2026/27 intake.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/admissions/";
          },
        },{id: "nav-news",
          title: "news",
          description: "announcements, calls and updates from across the college.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "Postal address, key offices, and how to reach the right person at ZZOK.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-autumn-open-house-for-prospective-bachelor-s-applicants-saturday-23-november-10-00-14-00-main-building-registration-via-the-admissions-page",
          title: 'Autumn Open House for prospective Bachelor’s applicants: Saturday 23 November, 10:00–14:00, main building....',
          description: "",
          section: "News",},{id: "news-call-for-papers-11th-baltic-workshop-on-computation-and-mind",
          title: 'Call for papers — 11th Baltic Workshop on Computation and Mind',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-15-baltic-workshop/";
            },},{id: "news-dr-hab-joanna-krzemińska-prof-zzok-has-been-elected-to-the-committee-on-neurobiology-of-the-polish-academy-of-sciences-polska-akademia-nauk-for-the-2026-2029-term",
          title: 'Dr hab. Joanna Krzemińska, prof. ZZOK, has been elected to the Committee on...',
          description: "",
          section: "News",},{id: "news-bsc-in-cognitive-science-accredited-and-opens-for-2026-27-admissions",
          title: 'BSc in Cognitive Science accredited and opens for 2026/27 admissions',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-22-bsc-cognitive-launch/";
            },},{id: "news-erasmus-agreement-signed-with-ku-leuven-for-student-and-staff-mobility-in-computer-science-and-cognitive-science-effective-from-the-2026-27-academic-year",
          title: 'Erasmus+ agreement signed with KU Leuven for student and staff mobility in computer...',
          description: "",
          section: "News",},{id: "news-ncn-opus-22-grant-awarded-to-the-algorithmic-logic-group",
          title: 'NCN OPUS-22 grant awarded to the algorithmic logic group',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-the-2026-27-application-portal-at-irk-zzok-edu-pl-opens-on-1-june-2026-see-the-admissions-page-for-deadlines-and-entry-requirements",
          title: 'The 2026/27 application portal at irk.zzok.edu.pl opens on 1 June 2026. See the...',
          description: "",
          section: "News",},{id: "projects-bsc-in-computer-science",
          title: 'BSc in Computer Science',
          description: "6 semesters · 180 ECTS · full-time · taught in English",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-bsc-in-cognitive-science",
          title: 'BSc in Cognitive Science',
          description: "6 semesters · 180 ECTS · full-time · taught in English",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-bsc-inż-in-software-engineering",
          title: 'BSc + Inż. in Software Engineering',
          description: "7 semesters · 210 ECTS · full-time · taught in English",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-msc-in-applied-artificial-intelligence",
          title: 'MSc in Applied Artificial Intelligence',
          description: "4 semesters · 120 ECTS · full-time · taught in English",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-msc-in-cognitive-systems-engineering",
          title: 'MSc in Cognitive Systems Engineering',
          description: "4 semesters · 120 ECTS · full-time · taught in English",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-msc-in-computer-science",
          title: 'MSc in Computer Science',
          description: "4 semesters · 120 ECTS · full-time · taught in English (Polish track available)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-phd-in-computer-science",
          title: 'PhD in Computer Science',
          description: "4-year doctoral school · taught in English · stipend-funded",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-phd-in-cognitive-sciences",
          title: 'PhD in Cognitive Sciences',
          description: "4-year doctoral school · taught in English · stipend-funded",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-postgraduate-certificate-in-data-engineering",
          title: 'Postgraduate certificate in Data Engineering',
          description: "2 semesters · 60 ECTS · part-time · evenings &amp; weekends",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%66%66%69%63%65@%7A%7A%6F%6B.%65%64%75.%70%6C", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zzok-college-szczecin", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zzok-edu", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@zzok-edu", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
