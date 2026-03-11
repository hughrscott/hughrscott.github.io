const siteContent = {
  profile: {
    name: "Hugh Scott",
    title:
      "Technology strategist, operator, and builder focused on AI and critical infrastructure",
    bio:
      "I work at the intersection of software, energy systems, and intelligent infrastructure. Over the course of my career I have helped turn complex technical systems into commercial products, build new technology strategies, and lead teams through periods of growth and transition. My work has spanned financial technology, renewable energy, and grid-scale battery systems. Today I am particularly interested in how artificial intelligence will reshape physical infrastructure and the software systems that coordinate it.",
    portrait: {
      src: "./assets/images/HughPortrait.jpeg",
      alt: "Portrait of Hugh Scott"
    }
  },
  resume: {
    summary:
      "My work has consistently centered on one theme: helping organizations turn complex technology into clear strategy, executable systems, and commercial value. I have often worked in environments where technology, product, and business strategy had to evolve together.",
    groups: [
      {
        heading: "Selected Experience",
        items: [
          "Chief Technology Officer — FlexGen. Led technology strategy and software development for a grid-scale battery software platform. Helped shape HybridOS into a differentiated commercial product while advancing analytics, software architecture, and AI-driven operational capabilities.",
          "Founder / Builder — Together Solar. Co-founded and helped build a solar energy company focused on delivering distributed energy solutions.",
          "Technology Strategy Lead — Dresdner Bank. Developed technology strategy to support the launch of a new stock borrow and lending business line."
        ]
      }
    ]
  },
  thinking: [
    "AI and the future of critical infrastructure",
    "The software-defined electric grid",
    "Battery systems, control software, and energy storage economics",
    "The convergence of energy, compute, and communications networks",
    "The unintended consequences of ubiquitous artificial intelligence"
  ],
  writing: {
    summary:
      "I occasionally write about the evolution of energy infrastructure, software systems, and artificial intelligence.",
    articles: [
      {
        title: "The Grid Transition Is Not a Hardware Problem",
        description:
          "An essay exploring how the evolution of the electric grid is increasingly driven by software, coordination, and system adaptability rather than physical infrastructure alone.",
        href: null,
        note: "Article link can be added here when available."
      }
    ]
  },
  projects: {
    summary:
      "I maintain a small public lab of technical experiments exploring complex systems including energy infrastructure, reinforcement learning, signal processing, and applied AI.",
    items: [
      "Battery digital twin and stochastic control experiments",
      "Reinforcement learning simulations",
      "Audio restoration using diffusion models and wavelets",
      "Computer vision experiments, including a sock matching project"
    ],
    github: {
      label: "View public experiments on GitHub",
      href: "https://github.com/hughrscott"
    }
  },
  documents: [
    {
      label: "PhD Thesis",
      href: "./assets/docs/Thesis.pdf",
      type: "Hosted file",
      note: "Doctoral thesis."
    },
    {
      label: "Resume (PDF)",
      href: "./assets/docs/resume-placeholder.txt",
      type: "Hosted file",
      note: "Replace this placeholder with your actual resume PDF."
    },
    {
      label: "Writing Samples",
      href: "./assets/docs/writing-sample-placeholder.txt",
      type: "Hosted file",
      note: "Replace this placeholder with essays, papers, or selected writing."
    }
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/hughrscott",
      detail: "Public code, experiments, and technical work"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hughscott/",
      detail: "Career history and professional background"
    },
    {
      label: "Substack",
      href: "https://hughrscott.substack.com",
      detail: "Published essays and articles"
    }
  ]
};

function renderProfile(profile) {
  document.getElementById("name").textContent = profile.name;
  document.getElementById("title").textContent = profile.title;
  document.getElementById("bio").textContent = profile.bio;

  const portrait = document.getElementById("portrait");
  portrait.src = profile.portrait.src;
  portrait.alt = profile.portrait.alt;
}

function renderResume(resume) {
  document.getElementById("resume-summary").textContent = resume.summary;

  const groups = document.getElementById("resume-groups");
  groups.replaceChildren(
    ...resume.groups.map((group) => {
      const wrapper = document.createElement("section");
      wrapper.className = "resume-group";

      const heading = document.createElement("h3");
      heading.textContent = group.heading;

      const list = document.createElement("ul");
      group.items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
      });

      wrapper.append(heading, list);
      return wrapper;
    })
  );
}

function renderTopicList(elementId, items) {
  const list = document.getElementById(elementId);
  list.replaceChildren(
    ...items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    })
  );
}

function renderWriting(writing) {
  document.getElementById("writing-summary").textContent = writing.summary;

  const writingList = document.getElementById("writing-list");
  writingList.replaceChildren(
    ...writing.articles.map((article) => {
      const wrapper = document.createElement("article");
      wrapper.className = "article-card";

      const title = document.createElement(article.href ? "a" : "h3");
      title.textContent = article.title;

      if (article.href) {
        title.href = article.href;
        title.target = "_blank";
        title.rel = "noreferrer";
      }

      const description = document.createElement("p");
      description.className = "article-description";
      description.textContent = article.description;

      const note = document.createElement("p");
      note.className = "resource-meta";
      note.textContent = article.note;

      wrapper.append(title, description, note);
      return wrapper;
    })
  );
}

function renderProjects(projects) {
  document.getElementById("projects-summary").textContent = projects.summary;
  renderTopicList("projects-list", projects.items);

  const projectsLink = document.getElementById("projects-link");
  const link = document.createElement("a");
  link.href = projects.github.href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = projects.github.label;

  projectsLink.replaceChildren(link);
}

function buildResourceItem(item, metaText) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  const meta = document.createElement("span");

  link.href = item.href;
  link.textContent = item.label;

  if (/^https?:\/\//.test(item.href)) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  meta.className = "resource-meta";
  meta.textContent = metaText;

  listItem.append(link, meta);
  return listItem;
}

function renderResources() {
  const documentsList = document.getElementById("documents-list");
  const linksList = document.getElementById("links-list");

  documentsList.replaceChildren(
    ...siteContent.documents.map((item) =>
      buildResourceItem(item, `${item.type}. ${item.note}`)
    )
  );

  linksList.replaceChildren(
    ...siteContent.links.map((item) => buildResourceItem(item, item.detail))
  );
}

renderProfile(siteContent.profile);
renderResume(siteContent.resume);
renderTopicList("thinking-list", siteContent.thinking);
renderWriting(siteContent.writing);
renderProjects(siteContent.projects);
renderResources();
