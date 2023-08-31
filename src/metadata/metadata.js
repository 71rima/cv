module.exports = {
  name: 'Amir El-Shennawy',
  title: 'Junior Cloud-Entwickler',
  facts: {
    "Ak. Grad": {
      icon: "graduation-cap",
      text: "B. Sc. Informatik",
    },
    Geburtstag: {
      icon: "asterisk",
      text: "17.06.1996",
    },
    Wohnort: {
      icon: "home",
      text: "Darmstadt",
    },
    "E-Mail": {
      icon: "envelope",
      text: '<a href="mailto:amir@el-shennawy.de">amir@el-shennawy.de</a>',
    },
  },
  techskills: [
    ["Terraform", "++"],
    ["Kubernetes", "++"],
    ["Prometheus", "+++"],
    ["Grafana", "++"],
    ["AWS", "++"],
    ["Git", "+++"],
    ["CI/DevOps", "++"],
  ],
  methodskills: [
    ["Scrum", "++++"],
    ["Kanban", "+"],
    ["Clean Code", "++"],
    ["TDD", "+"],
    ["XP", "+"],
    ["DDD", "+"],
  ],


  jobs: [
    {
      title: "Bachelorand",
      company: "AUSY Technologies Germany AG, Frankfurt am Main",
      datespan: "August 2022 bis Okt. 2022",
      badges: ["IaC", "CI/CD", "Kubernetes", "AWS", "Terraform", "Automatisierung", "Monitoring"],
      contents: `
* Entwurf und Implementierung einer Cloud-Infrastruktur in AWS EKS zur Untersuchung der automatischen Skalierungsmethoden
* Entwicklung eines SpringBoot RESTful Services, Nutzung von Kubernetes-Skalierung (HPA, VPA, CA) zur automatischen Skalierung in AWS EKS
* Monitoring mit Prometheus und Grafana. Automatisierte IaaS-Bereitstellung des EKS-Clusters durch Terraform, GitLab CI/CD
* Dynamische Pod- und Node-Skalierung von AWS EC2-Instanzen und deren Ressourcen
* Anwendung von DevOps-Prinzipien für rasche Bereitstellung, kontinuierliche Optimierung und höhere Qualität
      `,
    },
    {
title: "Anwendungsentwickler, Cloud-Entwickler",
      company: "AUSY Technologies Germany AG, Frankfurt am Main",
      datespan: "April 2022 bis Juli 2022",
      badges: ["javascript", "html", "css", "kanban", "cleancode", "magnolia"],
      contents: `
* Technische Verantwortung und Betrieb der Unternehmenswebsite sowie des zugrunde liegenden Content Management Systems Magnolia als Mitglied des neu gegründeten CMS Platform Teams im Bereich Digitalisierung und Systeme
* Weiterentwicklung des Magnolia Frontends mittels HTML5, Javascript, CSS3 und Freemarker 
* Mitglied der A11Y Taskforce, welche die Verbesserung der Barrierefreiheit von Portalen und der Unternehmenswebsite sowie die Festlegung von A11Y Standards für das Unternehmen zum Ziel hatte
* Beratung bei der Auswahl von Bewerbern
* Durchführung von Bewerbungsgesprächen und Coding Interviews
      `,
    },
  
  ],

education: [
    {
      title: "Bachelor of Science Informatik",
      org: "Hochschule Darmstadt",
      datespan: "Oktober 2018 - April 2023",
      contents: `
* Note: 1,7

* Dissertation: "Automatische Skalierung in Kubernetes unter AWS-EKS – Vergleich von automatischen Skalierungsmethoden", 
* Bachelormodul Note: 1.2
`,
    },
    {
      title: "Abitur",
      org: "Goethe Gymnasium, Bensheim",
      datespan: "August 2006 - August 2016",
      contents: ``,
    },
  ],

  experience: [
    {
      header: "Sprachkenntnisse",
      contents: `
* Deutsch (C2)
* Englisch (B2-C1) 
`,
    },

    {
      header: "Hobbies",
      contents: `
*	Kochen 
*	Reisen
*	DIY (Automatisierung, Smart Home, Handwerk)
      `,
    },
  ],
};
