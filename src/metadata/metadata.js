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
    "Github": {
      icon: "github",
      text: '<a href="https://github.com/71rima">71rima</a>',
    },
    "GitLab": {
      icon: "gitlab",
      text: '<a href="https://gitlab.com/71rima">71rima</a>',
    },
  },
  techskills: [
    ["Terraform", "++"],
    ["Kubernetes", "+++"],
    ["Prometheus", "++"],
    ["Grafana", "++"],
    ["AWS", "++"],
    ["Git", "+++"],
    ["CI/DevOps", "++"],
    ["C++", "+++"],
    ["CI/DevOps", "++"],
    ["JavaScript", "+"],
  ],
  methodskills: [
    ["Scrum", "++++"],
    ["Kanban", "+"],
    ["Clean Code", "++"],
    ["TDD", "+"],
  ],


  jobs: [
    {
      title: "Bachelorand",
      company: "AUSY Technologies Germany AG, Frankfurt am Main",
      datespan: "August 2022 bis Okt. 2022",
      badges: ["IaC", "CI/CD", "Kubernetes", "AWS", "Terraform", "Automatisierung", "Monitoring"],
      contents: `
* Entwurf und Implementierung einer Cloud-Infrastruktur in AWS EKS zur Untersuchung der automatischen Skalierungsmethoden
* Entwicklung eines SpringBoot RESTful Services 
* Monitoring und Visualisierung mit Prometheus und Grafana
* Automatisierte Bereitstellung des EKS-Clusters durch Terraform, GitLab CI/CD
* Nutzung von Kubernetes-Skalierung (HPA, VPA, CA) zur dynamischen Pod- und Node-Skalierung von AWS EC2-Instanzen und -Ressourcen
* Anwendung von DevOps-Prinzipien für rasche Bereitstellung, kontinuierliche Optimierung und höhere Qualität
      `,
    },
    {
title: "Cloud-Entwickler, Praktikum",
      company: "AUSY Technologies Germany AG, Frankfurt am Main",
      datespan: "April 2022 bis Juli 2022",
      badges: ["Infrastructure as code (IaC)", "Kanban", "AWS EKS", "Terraform", "Kubernetes", "DevOps"],
      contents: ` 
* Einblicke in größere Projekte namhafter Kunden in der Transport- und Logistikbranche 
* Entwicklung eines IaaS-Produktes unter Verwendung von u.a. Kubernetes & AWS EKS 
* IaC und Automatisierung mithilfe von u.a. Terraform & GitLab CI/CD 
* Nutzung von agilen Entwicklungsmethoden (Kanban, SCRUM), Pair-Programming, DevOps-Prinzipien 

      `,
    },
  
  ],

education: [
    {
      title: "B. Sc. Informatik",
      org: "Hochschule Darmstadt",
      datespan: "Oktober 2018 - April 2023",
      contents: `
* Bachelorzeugnis Note: 1,7

* Bachelormodul Note: 1.2
* Dissertation: "Automatische Skalierung in Kubernetes unter AWS-EKS – Vergleich von automatischen Skalierungsmethoden", 
 
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
