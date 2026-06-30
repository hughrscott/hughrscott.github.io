const siteContent = {
  profile: {
    displayName: "Hugh Scott",
    heading:
      "Technology strategist, operator, and builder focused on AI and critical infrastructure.",
    intro: [
      "I work at the intersection of software, energy systems, and intelligent infrastructure. Over the course of my career I have helped turn complex technical systems into commercial products, build new technology strategies, and lead teams through periods of growth and transition.",
      "Today I am particularly interested in how artificial intelligence will reshape physical infrastructure and the software systems that coordinate it."
    ],
    portrait: {
      src: "./assets/images/HughPortrait.jpeg",
      alt: "Portrait of Hugh Scott"
    }
  },
  about: [
    "My work has consistently centered on one theme: helping organizations turn complex technology into clear strategy, executable systems, and commercial value.",
    "I have worked across financial technology, renewable energy, and grid-scale battery software, often in situations where technology, product, and business strategy had to evolve together."
  ],
  experience: [
    {
      company: "FlexGen",
      role: "Chief Technology Officer",
      description:
        "Led technology strategy for a grid-scale battery software platform. Helped shape HybridOS into a differentiated commercial product while advancing analytics, software architecture, and AI-driven operational capabilities."
    },
    {
      company: "Together Solar",
      role: "Founder",
      description:
        "Helped launch and build a solar energy company focused on distributed energy solutions."
    },
    {
      company: "Dresdner Bank",
      role: "Technology Strategy",
      description:
        "Developed technology strategy supporting the launch of a stock borrow and lending business line."
    }
  ],
  experienceLink: {
    label: "View full resume",
    href: "./resume.html"
  },
  writing: {
    intro: [
      "I occasionally write about the evolution of energy infrastructure, software systems, and artificial intelligence."
    ],
    articles: [
      {
        title: "The Grid Transition Is Not a Hardware Problem",
        description:
          "An essay exploring how the evolution of the electric grid is increasingly driven by software, coordination, and system adaptability rather than physical infrastructure alone.",
        href: https://hughrscott.substack.com/p/the-grid-transition-is-not-a-hardware,
        meta: "https://hughrscott.substack.com/p/the-grid-transition-is-not-a-hardware"
      },
      {
        title: "Why do Batteries Need Software,
        description:
          "An explanation of what battery control software is, what it does, and why it's necessary",
        href: https://hughrscott.substack.com/p/why-do-batteries-need-software,
        meta: "https://hughrscott.substack.com/p/why-do-batteries-need-software"
      },
      {
        title: "Does Anyone Need Artisinal Hand Crafter Code",
        description:
          "Why the move to agentic software is inevitable",
        href: https://hughrscott.substack.com/p/does-anyone-need-artisanal-hand-crafted,
        meta: "https://hughrscott.substack.com/p/does-anyone-need-artisanal-hand-crafted"
      },
      {
        title: "The Most Important Metric in a Battery is an Estimate",
        description:
          "Battery operators rely on knowing the state of charge accurately. Did you know it was an estimate?",
        href: https://hughrscott.substack.com/p/the-most-important-metric-in-a-battery,
        meta: "https://hughrscott.substack.com/p/the-most-important-metric-in-a-battery"
      }
    ]
  },
  interests: [
    "AI and the future of critical infrastructure",
    "The software-defined electric grid",
    "Battery systems and energy storage economics",
    "Reinforcement learning and control systems",
    "The convergence of energy, compute, and communications networks"
  ],
  projects: {
    body: [
      "I maintain a small public lab of technical experiments exploring complex systems including energy infrastructure, reinforcement learning, signal processing, and applied AI."
    ],
    github: {
      label: "Explore the GitHub lab",
      href: "https://github.com/hughrscott"
    }
  },
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hughscott/"
    },
    {
      label: "GitHub",
      href: "https://github.com/hughrscott"
    }
  ]
};

function renderParagraphs(elementId, paragraphs) {
  const container = document.getElementById(elementId);
  container.replaceChildren(
    ...paragraphs.map((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    })
  );
}

function renderProfile(profile) {
  document.getElementById("name").textContent = profile.displayName;
  document.getElementById("title").textContent = profile.heading;
  renderParagraphs("hero-body", profile.intro);

  const portrait = document.getElementById("portrait");
  portrait.src = profile.portrait.src;
  portrait.alt = profile.portrait.alt;
}

function renderExperience(items) {
  const container = document.getElementById("experience-list");
  container.replaceChildren(
    ...items.map((item) => {
      const article = document.createElement("article");
      article.className = "experience-item";

      const heading = document.createElement("h3");
      heading.className = "experience-heading";
      heading.textContent = `${item.company} — ${item.role}`;

      const description = document.createElement("p");
      description.className = "experience-description";
      description.textContent = item.description;

      article.append(heading, description);
      return article;
    })
  );
}

function renderSectionLink(elementId, item) {
  const wrapper = document.getElementById(elementId);
  const link = document.createElement("a");
  link.href = item.href;
  link.textContent = item.label;

  if (/^https?:\/\//.test(item.href)) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  wrapper.replaceChildren(link);
}

function renderWriting(writing) {
  renderParagraphs("writing-body", writing.intro);

  const container = document.getElementById("writing-list");
  container.replaceChildren(
    ...writing.articles.map((article) => {
      const card = document.createElement("article");
      card.className = "writing-card";

      const title = document.createElement(article.href ? "a" : "h3");
      title.className = "writing-title";
      title.textContent = article.title;

      if (article.href) {
        title.href = article.href;
        title.target = "_blank";
        title.rel = "noreferrer";
      }

      const description = document.createElement("p");
      description.className = "writing-description";
      description.textContent = article.description;

      const meta = document.createElement(article.href ? "a" : "p");
      meta.className = "writing-meta";
      meta.textContent = article.meta;

      if (article.href) {
        meta.href = article.href;
        meta.target = "_blank";
        meta.rel = "noreferrer";
      }

      card.append(title, description, meta);
      return card;
    })
  );
}

function renderBulletList(elementId, items) {
  const list = document.getElementById(elementId);
  list.replaceChildren(
    ...items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    })
  );
}

function renderProjects(projects) {
  renderParagraphs("projects-body", projects.body);

  const wrapper = document.getElementById("projects-link");
  const link = document.createElement("a");
  link.href = projects.github.href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = projects.github.label;
  wrapper.replaceChildren(link);
}

function renderLinks(links) {
  const list = document.getElementById("links-list");
  list.replaceChildren(
    ...links.map((item) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;

      if (/^https?:\/\//.test(item.href)) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }

      listItem.appendChild(link);
      return listItem;
    })
  );
}

renderProfile(siteContent.profile);
renderParagraphs("about-body", siteContent.about);
renderExperience(siteContent.experience);
renderSectionLink("experience-link", siteContent.experienceLink);
renderWriting(siteContent.writing);
renderBulletList("interests-list", siteContent.interests);
renderProjects(siteContent.projects);
renderLinks(siteContent.links);
