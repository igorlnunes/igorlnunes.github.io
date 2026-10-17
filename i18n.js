/**
 * Internationalization (i18n) Module
 * Handles language switching, persistence, animated UI toggle, and DOM updates
 */

// Embedded translations dictionary to ensure instant synchronous render (no FOUC)
// and allow local execution via file:// without CORS fetch errors.
const EMBEDDED_TRANSLATIONS = {
  "meta": {
    "htmlLang": {
      "pt": "pt-BR",
      "en": "en"
    },
    "title": {
      "pt": "Igor Mateus de Lima Nunes | Especialista em Governança de Dados (Júnior) | Qualidade, Metadados e LGPD",
      "en": "Igor Mateus de Lima Nunes | Data Governance Specialist (Junior) | Quality, Metadata and Privacy"
    },
    "description": {
      "pt": "Engenheiro em transição para Governança de Dados: qualidade de dados, metadados, rastreabilidade, controle de acesso e privacidade (LGPD). Portfólio com cases de integridade, proveniência e modelagem de dados.",
      "en": "Engineer moving into Data Governance: data quality, metadata, traceability, access control and privacy (LGPD/GDPR). Portfolio with cases on integrity, provenance and data modeling."
    },
    "keywords": {
      "pt": "governança de dados, qualidade de dados, data stewardship, catálogo de dados, metadados, linhagem de dados, LGPD, DAMA-DMBOK, MDM, dicionário de dados, classificação da informação, PostgreSQL, SQL, Row Level Security",
      "en": "data governance, data quality, data stewardship, data catalog, metadata, data lineage, LGPD, DAMA-DMBOK, MDM, data dictionary, information classification, PostgreSQL, SQL, Row Level Security"
    },
    "og:title": {
      "pt": "Igor Mateus de Lima Nunes | Governança de Dados",
      "en": "Igor Mateus de Lima Nunes | Data Governance"
    },
    "og:description": {
      "pt": "Dados confiáveis, seguros e rastreáveis: qualidade, metadados e privacidade (LGPD). Conheça meus cases e entre em contato.",
      "en": "Trusted, secure and traceable data: quality, metadata and privacy (LGPD). Check out my cases and get in touch."
    },
    "twitter:title": {
      "pt": "Igor Mateus de Lima Nunes | Governança de Dados",
      "en": "Igor Mateus de Lima Nunes | Data Governance"
    },
    "twitter:description": {
      "pt": "Governança de dados: qualidade, metadados, rastreabilidade e privacidade (LGPD).",
      "en": "Data governance: quality, metadata, traceability and privacy (LGPD)."
    }
  },
  "header": {
    "navWork": {
      "pt": "Cases",
      "en": "Cases"
    },
    "navSkills": {
      "pt": "Habilidades",
      "en": "Skills"
    },
    "navAbout": {
      "pt": "Sobre mim",
      "en": "About Me"
    },
    "navContact": {
      "pt": "Contato",
      "en": "Contact"
    },
    "role": {
      "pt": "Especialista em Governança de Dados (Júnior)",
      "en": "Data Governance Specialist (Junior)"
    },
    "heroSubtitle": {
      "pt": "Transformo dados em ativos confiáveis, seguros e rastreáveis: qualidade, metadados e privacidade (LGPD). Engenheiro de formação, com o front-end como diferencial para construir portais, catálogos e dashboards de governança.",
      "en": "I turn data into trusted, secure and traceable assets: quality, metadata and privacy (LGPD). Engineer by training, with front-end skills as a differentiator to build governance portals, catalogs and dashboards."
    },
    "heroCTA": {
      "pt": "Fale comigo",
      "en": "Get in touch"
    }
  },
  "highlights": {
    "heading": {
      "pt": "Competências em destaque",
      "en": "Key Competencies"
    },
    "quality": {
      "title": {
        "pt": "Qualidade de Dados",
        "en": "Data Quality"
      },
      "text": {
        "pt": "Regras de integridade e validação aplicadas na modelagem e no código, e métricas para acompanhar o resultado.",
        "en": "Integrity and validation rules applied in modeling and code, with metrics to track results."
      }
    },
    "metadata": {
      "title": {
        "pt": "Metadados e Rastreabilidade",
        "en": "Metadata & Traceability"
      },
      "text": {
        "pt": "Registro de proveniência, integridade e autoria de documentos, separando dado e metadado.",
        "en": "Provenance, integrity and authorship records for documents, separating data from metadata."
      }
    },
    "privacy": {
      "title": {
        "pt": "Privacidade e LGPD",
        "en": "Privacy & LGPD"
      },
      "text": {
        "pt": "Controle de acesso por linha (RLS), minimização de dados e atenção ao direito ao apagamento.",
        "en": "Row-level access control (RLS), data minimization and attention to the right to erasure."
      }
    },
    "policies": {
      "title": {
        "pt": "Políticas e Stewardship",
        "en": "Policies & Stewardship"
      },
      "text": {
        "pt": "Em estudo: papéis, políticas, glossário e frameworks como o DAMA-DMBOK.",
        "en": "Studying: roles, policies, glossary and frameworks such as DAMA-DMBOK."
      }
    }
  },
  "work": {
    "heading": {
      "pt": "Cases de Governança de Dados",
      "en": "Data Governance Cases"
    },
    "otherHeading": {
      "pt": "Outros projetos",
      "en": "Other Projects"
    },
    "labels": {
      "problem": {
        "pt": "Problema",
        "en": "Problem"
      },
      "data": {
        "pt": "Dados envolvidos",
        "en": "Data involved"
      },
      "controls": {
        "pt": "Controles e políticas",
        "en": "Controls & policies"
      },
      "result": {
        "pt": "Resultado",
        "en": "Result"
      }
    },
    "cases": {
      "pinvault": {
        "problem": {
          "pt": "Garantir integridade, prova de autoria e rastreabilidade de documentos sensíveis, sem expor dados pessoais.",
          "en": "Ensure integrity, proof of authorship and traceability of sensitive documents without exposing personal data."
        },
        "data": {
          "pt": "Arquivos (IPFS), CID, carimbo de existência on-chain e metadados dos documentos (Supabase/PostgreSQL).",
          "en": "Files (IPFS), CID, on-chain existence timestamp and document metadata (Supabase/PostgreSQL)."
        },
        "controls": {
          "pt": "Row Level Security (RLS) para controle de acesso; apenas o CID vai para a blockchain, metadados ficam off-chain, o que apoia minimização de dados e a discussão sobre direito ao apagamento (LGPD).",
          "en": "Row Level Security (RLS) for access control; only the CID goes on-chain, metadata stays off-chain, supporting data minimization and the right-to-erasure discussion (LGPD)."
        },
        "result": {
          "pt": "Documentos verificáveis por hash/CID, com autoria comprovável e acesso restrito ao proprietário.",
          "en": "Documents verifiable by hash/CID, with provable authorship and access restricted to the owner."
        }
      },
      "salas": {
        "problem": {
          "pt": "Evitar conflitos de reserva e dar visibilidade à ocupação das salas de aula.",
          "en": "Avoid booking conflicts and give visibility into classroom occupancy."
        },
        "data": {
          "pt": "Salas, reservas únicas e recorrentes, horários e ocupação (PostgreSQL).",
          "en": "Rooms, single and recurring bookings, schedules and occupancy (PostgreSQL)."
        },
        "controls": {
          "pt": "Modelagem relacional e regra de integridade que impede choque de horários; métrica de taxa de ocupação com definição única.",
          "en": "Relational modeling and an integrity rule that prevents schedule clashes; occupancy-rate metric with a single definition."
        },
        "result": {
          "pt": "Dashboard analítico com taxas de ocupação consistentes e dados de reserva sem sobreposição.",
          "en": "Analytical dashboard with consistent occupancy rates and booking data without overlaps."
        }
      }
    },
    "projects": [
      {
        "id": "web3-cofre",
        "title": {
          "pt": "Cofre de Documentos Descentralizado (PinVault)",
          "en": "Decentralized Document Vault (PinVault)"
        },
        "description": {
          "pt": "Aplicação web de gerenciamento de arquivos voltada para privacidade. O CID gerado pelo upload no IPFS é registrado em um Smart Contract, servindo como carimbo de existência e prova de integridade. Os metadados ficam protegidos no Supabase com Row Level Security (RLS).",
          "en": "Privacy-focused file management web application. The CID generated by the IPFS upload is recorded in a Smart Contract, serving as an existence timestamp and proof of integrity. Metadata is protected in Supabase with Row Level Security (RLS)."
        },
        "visitBtn": {
          "pt": "Visite o Site",
          "en": "Visit the Website"
        },
        "sourceCodeAlt": {
          "pt": "Código-fonte",
          "en": "Source Code"
        },
        "imageAlt": {
          "pt": "Demonstração Projeto Cofre de Documentos Descentralizado",
          "en": "Decentralized Document Vault Project Demo"
        }
      },
      {
        "id": "gestao-salas-de-aula",
        "title": {
          "pt": "Gestão de Salas de Aula",
          "en": "Classroom Management"
        },
        "description": {
          "pt": "Sistema para gerenciamento de reservas e ocupação de salas de aula, com reservas únicas e recorrentes e dashboard analítico focado em taxas de ocupação.",
          "en": "System for managing classroom reservations and occupancy, with single and recurring bookings and an analytical dashboard focused on occupancy rates."
        },
        "visitBtn": {
          "pt": "Visite o Site",
          "en": "Visit the Website"
        },
        "sourceCodeAlt": {
          "pt": "Código-fonte",
          "en": "Source Code"
        },
        "imageAlt": {
          "pt": "Demonstração Projeto Gestão de Salas de Aula",
          "en": "Classroom Management Project Demo"
        }
      },
      {
        "id": "vestigen",
        "title": {
          "pt": "Gerador de Questões de Física com Google Gemini",
          "en": "Physics Question Generator with Google Gemini"
        },
        "description": {
          "pt": "Aplicação que gera questões de múltipla escolha de Física para vestibular com IA generativa (Google Gemini), com escolha de tópico e dificuldade e acesso à resolução. Exemplo prático de uso de IA em que a qualidade do conteúdo gerado precisa ser validada.",
          "en": "Application that generates multiple-choice Physics questions for entrance exams using generative AI (Google Gemini), with topic and difficulty selection and access to the solution. A practical example of AI use where the quality of generated content needs validation."
        },
        "visitBtn": {
          "pt": "Visite o Site",
          "en": "Visit the Website"
        },
        "sourceCodeAlt": {
          "pt": "Código-fonte",
          "en": "Source Code"
        },
        "imageAlt": {
          "pt": "Demonstração Projeto Vestigen",
          "en": "Vestigen Project Demo"
        }
      },
      {
        "id": "erc20",
        "title": {
          "pt": "Obtendo saldo de um Token ERC20",
          "en": "Getting balance of a ERC20 Token"
        },
        "description": {
          "pt": "A partir de um endereço Ethereum Virtual Machine, a aplicação de terminal imprime o valor em USDC na carteira.",
          "en": "From an Ethereum Virtual Machine address, the terminal application prints the USDC value in the wallet."
        },
        "sourceCodeAlt": {
          "pt": "Código-fonte",
          "en": "Source Code"
        },
        "imageAlt": {
          "pt": "Projeto - Get balance ERC20 Rust",
          "en": "ERC20 Rust Token Balance Project"
        }
      },
      {
        "id": "ipfs",
        "title": {
          "pt": "Upload de imagem no IPFS",
          "en": "Uploading an image on IPFS"
        },
        "description": {
          "pt": "Aplicação para upload de imagens no Interplanetary File System usando o Pinata.",
          "en": "Application for uploading images to the Interplanetary File System using Pinata."
        },
        "visitBtn": {
          "pt": "Visite o Site",
          "en": "Visit the Website"
        },
        "sourceCodeAlt": {
          "pt": "Código-fonte",
          "en": "Source Code"
        },
        "imageAlt": {
          "pt": "Projeto - Upload Pinata",
          "en": "Pinata Upload Project"
        }
      }
    ]
  },
  "skills": {
    "heading": {
      "pt": "Habilidades & Tecnologias",
      "en": "Skills & Technologies"
    },
    "groups": [
      {
        "id": "governance",
        "heading": {
          "pt": "Governança de Dados",
          "en": "Data Governance"
        },
        "items": [
          {
            "title": {
              "pt": "Data Stewardship",
              "en": "Data Stewardship"
            },
            "description": {
              "pt": "Papéis e responsabilidades sobre os dados (em estudo)",
              "en": "Roles and responsibilities over data (studying)"
            }
          },
          {
            "title": {
              "pt": "Políticas e padrões",
              "en": "Policies & standards"
            },
            "description": {
              "pt": "Elaboração e aplicação de regras de uso dos dados (em estudo)",
              "en": "Writing and applying data usage rules (studying)"
            }
          },
          {
            "title": {
              "pt": "Classificação da informação",
              "en": "Information classification"
            },
            "description": {
              "pt": "Sensibilidade e ciclo de vida do dado (em estudo)",
              "en": "Sensitivity and data lifecycle (studying)"
            }
          }
        ]
      },
      {
        "id": "quality",
        "heading": {
          "pt": "Qualidade de Dados",
          "en": "Data Quality"
        },
        "items": [
          {
            "title": {
              "pt": "Regras de integridade",
              "en": "Integrity rules"
            },
            "description": {
              "pt": "Restrições no modelo relacional e validações (aplicado em projetos)",
              "en": "Relational model constraints and validations (applied in projects)"
            }
          },
          {
            "title": {
              "pt": "Métricas e KPIs",
              "en": "Metrics & KPIs"
            },
            "description": {
              "pt": "Definição de indicadores e dashboards analíticos",
              "en": "Indicator definition and analytical dashboards"
            }
          }
        ]
      },
      {
        "id": "metadata",
        "heading": {
          "pt": "Metadados & Rastreabilidade",
          "en": "Metadata & Traceability"
        },
        "items": [
          {
            "title": {
              "pt": "Proveniência e integridade",
              "en": "Provenance & integrity"
            },
            "description": {
              "pt": "Hash/CID, IPFS e registro em Smart Contract",
              "en": "Hash/CID, IPFS and Smart Contract registration"
            }
          },
          {
            "title": {
              "pt": "Catálogo e linhagem",
              "en": "Catalog & lineage"
            },
            "description": {
              "pt": "Conceitos de catálogo de dados e linhagem (em estudo)",
              "en": "Data catalog and lineage concepts (studying)"
            }
          }
        ]
      },
      {
        "id": "privacy",
        "heading": {
          "pt": "Privacidade & Conformidade",
          "en": "Privacy & Compliance"
        },
        "items": [
          {
            "title": {
              "pt": "LGPD",
              "en": "LGPD"
            },
            "description": {
              "pt": "Princípios, minimização e direito ao apagamento (em estudo)",
              "en": "Principles, minimization and right to erasure (studying)"
            }
          },
          {
            "title": {
              "pt": "Controle de acesso",
              "en": "Access control"
            },
            "description": {
              "pt": "Supabase Auth e Row Level Security (RLS)",
              "en": "Supabase Auth and Row Level Security (RLS)"
            }
          }
        ]
      },
      {
        "id": "dataeng",
        "heading": {
          "pt": "Dados & Engenharia",
          "en": "Data & Engineering"
        },
        "items": [
          {
            "title": {
              "pt": "SQL e PostgreSQL",
              "en": "SQL & PostgreSQL"
            },
            "description": {
              "pt": "Modelagem relacional, consultas, Supabase",
              "en": "Relational modeling, queries, Supabase"
            }
          },
          {
            "title": {
              "pt": "Python e Django",
              "en": "Python & Django"
            },
            "description": {
              "pt": "Aplicações orientadas a dados",
              "en": "Data-driven applications"
            }
          },
          {
            "title": {
              "pt": "Git e GitHub",
              "en": "Git & GitHub"
            },
            "description": {
              "pt": "Versionamento e documentação",
              "en": "Versioning and documentation"
            }
          }
        ]
      },
      {
        "id": "frameworks",
        "heading": {
          "pt": "Frameworks de referência",
          "en": "Reference Frameworks"
        },
        "items": [
          {
            "title": {
              "pt": "DAMA-DMBOK",
              "en": "DAMA-DMBOK"
            },
            "description": {
              "pt": "Em estudo",
              "en": "Studying"
            }
          }
        ]
      },
      {
        "id": "complementary",
        "heading": {
          "pt": "Habilidades complementares",
          "en": "Complementary Skills"
        },
        "items": [
          {
            "title": {
              "pt": "Front-end",
              "en": "Front-end"
            },
            "description": {
              "pt": "React, Angular, TypeScript, HTML5, CSS3 para portais e dashboards",
              "en": "React, Angular, TypeScript, HTML5, CSS3 for portals and dashboards"
            }
          },
          {
            "title": {
              "pt": "Web3 e IA",
              "en": "Web3 & AI"
            },
            "description": {
              "pt": "Solidity, IPFS, Google Gemini API",
              "en": "Solidity, IPFS, Google Gemini API"
            }
          },
          {
            "title": {
              "pt": "Infraestrutura",
              "en": "Infrastructure"
            },
            "description": {
              "pt": "Linux, Docker, Vercel, Firebase",
              "en": "Linux, Docker, Vercel, Firebase"
            }
          }
        ]
      },
      {
        "id": "soft",
        "heading": {
          "pt": "Soft Skills",
          "en": "Soft Skills"
        },
        "items": [
          {
            "title": {
              "pt": "Comunicação",
              "en": "Communication"
            },
            "description": {
              "pt": "Diálogo entre TI e áreas de negócio, documentação clara",
              "en": "Dialogue between IT and business, clear documentation"
            }
          },
          {
            "title": {
              "pt": "Pensamento sistêmico",
              "en": "Systems thinking"
            },
            "description": {
              "pt": "Formação em Engenharia: processos, qualidade e controle",
              "en": "Engineering background: processes, quality and control"
            }
          }
        ]
      },
      {
        "id": "languages",
        "heading": {
          "pt": "Idiomas",
          "en": "Languages"
        },
        "items": [
          {
            "title": {
              "pt": "Português (PT-BR)",
              "en": "Portuguese (PT-BR)"
            },
            "description": {
              "pt": "Nativo",
              "en": "Native"
            }
          },
          {
            "title": {
              "pt": "Inglês",
              "en": "English"
            },
            "description": {
              "pt": "Intermediário",
              "en": "Intermediate"
            }
          }
        ]
      }
    ]
  },
  "about": {
    "heading": {
      "pt": "Sobre mim",
      "en": "About Me"
    },
    "text": {
      "pt": "Sou Engenheiro por formação e estou em transição de carreira para Governança de Dados. Meu olhar de engenharia para processos, qualidade e controle se conecta ao que construí em projetos próprios: integridade e proveniência de documentos, controle de acesso com RLS e modelagem de dados com regras de consistência. Estou aprofundando qualidade de dados, metadados e LGPD, e uso o front-end como diferencial para criar catálogos, dashboards e portais que aproximam a área de negócio dos dados.",
      "en": "I am an Engineer by training, moving into Data Governance. My engineering view of processes, quality and control connects to what I built in personal projects: document integrity and provenance, access control with RLS and data modeling with consistency rules. I am deepening my knowledge in data quality, metadata and LGPD, and use front-end skills as a differentiator to build catalogs, dashboards and portals that bring business closer to data."
    },
    "cvBtn": {
      "pt": "Curriculum Vitae",
      "en": "Curriculum Vitae"
    },
    "photoAlt": {
      "pt": "Igor Mateus de Lima Nunes - Especialista em Governança de Dados",
      "en": "Igor Mateus de Lima Nunes - Data Governance Specialist"
    }
  },
  "education": {
    "heading": {
      "pt": "Educação & Experiência",
      "en": "Education & Experience"
    },
    "academic": {
      "title": {
        "pt": "Formação Acadêmica",
        "en": "Academic Background"
      },
      "degree": {
        "pt": "Engenharia",
        "en": "Engineering"
      },
      "description": {
        "pt": "Base sólida em resolução de problemas, pensamento sistêmico, processos e análise de sistemas complexos.",
        "en": "Strong foundation in problem-solving, systems thinking, processes and complex system analysis."
      }
    },
    "professional": {
      "title": {
        "pt": "Experiência Profissional",
        "en": "Professional Experience"
      },
      "position": {
        "pt": "Desenvolvedor de Software Freelancer",
        "en": "Freelance Software Developer"
      },
      "description": {
        "pt": "Desenvolvimento de aplicações web com foco em dados: modelagem em PostgreSQL, controle de acesso (RLS), integridade e rastreabilidade de documentos, e dashboards de indicadores.",
        "en": "Development of data-focused web applications: PostgreSQL modeling, access control (RLS), document integrity and traceability, and indicator dashboards."
      },
      "current": {
        "pt": "Presente",
        "en": "Present"
      }
    },
    "certifications": {
      "title": {
        "pt": "Certificações & Aprendizado em andamento",
        "en": "Certifications & Ongoing Learning"
      },
      "description": {
        "pt": "Em estudo: fundamentos de Governança de Dados (DAMA-DMBOK), qualidade de dados, metadados e LGPD.",
        "en": "Studying: Data Governance fundamentals (DAMA-DMBOK), data quality, metadata and LGPD."
      }
    }
  },
  "contact": {
    "heading": {
      "pt": "Entre em contato",
      "en": "Get in Touch"
    },
    "description": {
      "pt": "Sua equipe de dados, compliance ou privacidade busca alguém para ajudar a tornar os dados mais confiáveis, seguros e rastreáveis? Vamos conversar.",
      "en": "Is your data, compliance or privacy team looking for someone to help make data more trusted, secure and traceable? Let's talk."
    },
    "emailBtn": {
      "pt": "igorlnunes@gmail.com",
      "en": "igorlnunes@gmail.com"
    }
  },
  "footer": {
    "backToTopAlt": {
      "pt": "Voltar ao Topo",
      "en": "Back to Top"
    },
    "backToTopAria": {
      "pt": "Voltar ao topo",
      "en": "Back to top"
    },
    "githubTitle": {
      "pt": "Perfil Github",
      "en": "GitHub Profile"
    },
    "linkedinTitle": {
      "pt": "Perfil LinkedIn",
      "en": "LinkedIn Profile"
    }
  }
};

let currentLanguage = "pt";
let translations = EMBEDDED_TRANSLATIONS;
let isInitialized = false;

/**
 * Initialize i18n system
 */
async function initI18n() {
  if (isInitialized) return;
  isInitialized = true;

  // Retrieve saved language preference or default to "pt"
  try {
    currentLanguage = localStorage.getItem("language") || "pt";
  } catch (e) {
    currentLanguage = "pt";
  }

  // Set language immediately (synchronously using embedded data)
  setLanguage(currentLanguage, false, false);

  // Setup toggle event listeners
  setupLanguageToggleEvents();

  // Optionally fetch translations.json asynchronously in background to allow dynamic updates
  try {
    if (window.location.protocol.startsWith("http")) {
      const translationsUrl = new URL("translations.json", document.baseURI).href;
      const response = await fetch(translationsUrl);
      if (response.ok) {
        const remoteTranslations = await response.json();
        if (remoteTranslations && typeof remoteTranslations === "object") {
          translations = remoteTranslations;
          updatePageTranslations();
        }
      }
    }
  } catch (error) {
    // Embedded fallback is active
    console.debug("Using embedded translations dictionary.");
  }
}

/**
 * Get translation value for a given key path
 * @param {string} keyPath - Dot notation path to translation (e.g., "header.navWork")
 * @returns {string|null} Translated text or null if not found
 */
function getTranslation(keyPath) {
  if (!keyPath || !translations) return null;
  const keys = keyPath.split(".");
  let value = translations;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return null;
    }
  }

  if (value && typeof value === "object" && "pt" in value && "en" in value) {
    return value[currentLanguage] ?? null;
  }

  return typeof value === "string" ? value : null;
}

/**
 * Set the current language and update DOM
 * @param {string} lang - Language code ("pt" or "en")
 * @param {boolean} shouldSave - Whether to save preference to localStorage
 * @param {boolean} animate - Whether to apply smooth transition animation
 */
function setLanguage(lang, shouldSave = true, animate = true) {
  if (lang !== "pt" && lang !== "en") {
    lang = "pt";
  }

  currentLanguage = lang;

  if (shouldSave) {
    try {
      localStorage.setItem("language", lang);
    } catch (e) {}
  }

  // Update HTML lang attribute
  const htmlLang = getTranslation("meta.htmlLang");
  if (htmlLang) {
    document.documentElement.lang = htmlLang;
  }

  // Update UI Toggle slider and buttons
  updateLanguageToggle();

  if (animate) {
    document.body.classList.add("i18n-transitioning");
    setTimeout(() => {
      updatePageTranslations();
      document.body.classList.remove("i18n-transitioning");
    }, 120);
  } else {
    updatePageTranslations();
  }
}

/**
 * Toggle between languages
 */
function toggleLanguage() {
  const newLang = currentLanguage === "pt" ? "en" : "pt";
  setLanguage(newLang, true, true);
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
  return currentLanguage;
}

// Global functions
window.toggleLanguage = toggleLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.setLanguage = setLanguage;
window.getTranslation = getTranslation;
window.initI18n = initI18n;

/**
 * Setup event listeners on the language toggle
 */
function setupLanguageToggleEvents() {
  const toggleContainer = document.getElementById("language-toggle") || document.querySelector(".lang-switch");
  if (!toggleContainer) return;

  const buttons = toggleContainer.querySelectorAll("[data-lang]");
  if (buttons.length > 0) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetLang = btn.getAttribute("data-lang");
        if (targetLang && targetLang !== currentLanguage) {
          setLanguage(targetLang, true, true);
        }
      });
    });

    toggleContainer.addEventListener("click", (e) => {
      if (!e.target.closest("[data-lang]")) {
        toggleLanguage();
      }
    });

    toggleContainer.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleLanguage();
      }
    });
  } else {
    toggleContainer.addEventListener("click", () => {
      toggleLanguage();
    });
  }
}

/**
 * Update language toggle visual state
 */
function updateLanguageToggle() {
  const toggleContainer = document.getElementById("language-toggle") || document.querySelector(".lang-switch");
  if (!toggleContainer) return;

  const isEn = currentLanguage === "en";
  toggleContainer.classList.toggle("is-en", isEn);

  const ptBtn = toggleContainer.querySelector("[data-lang=\"pt\"]");
  const enBtn = toggleContainer.querySelector("[data-lang=\"en\"]");

  if (ptBtn && enBtn) {
    ptBtn.classList.toggle("active", !isEn);
    ptBtn.setAttribute("aria-pressed", (!isEn).toString());
    enBtn.classList.toggle("active", isEn);
    enBtn.setAttribute("aria-pressed", isEn.toString());
  } else if (toggleContainer.tagName === "BUTTON") {
    toggleContainer.textContent = isEn ? "🇬🇧 EN" : "🇧🇷 PT-BR";
    toggleContainer.setAttribute("title", isEn ? "Mudar para Português" : "Switch to English");
    toggleContainer.setAttribute("aria-label", isEn ? "Mudar para Português" : "Switch to English");
  }
}

/**
 * Update all elements with data-i18n attributes
 */
function updatePageTranslations() {
  // Update text content for [data-i18n]
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const keyPath = element.getAttribute("data-i18n");
    const translation = getTranslation(keyPath);
    if (translation === null || translation === undefined) return;

    if (element.tagName === "INPUT") {
      element.value = translation;
    } else {
      element.textContent = translation;
    }
  });

  // Update title attributes for [data-i18n-title]
  const titleElements = document.querySelectorAll("[data-i18n-title]");
  titleElements.forEach((element) => {
    const keyPath = element.getAttribute("data-i18n-title");
    const translation = getTranslation(keyPath);
    if (translation !== null && translation !== undefined) {
      element.setAttribute("title", translation);
    }
  });

  // Update alt attributes for [data-i18n-alt]
  const altElements = document.querySelectorAll("[data-i18n-alt]");
  altElements.forEach((element) => {
    const keyPath = element.getAttribute("data-i18n-alt");
    const translation = getTranslation(keyPath);
    if (translation !== null && translation !== undefined) {
      element.setAttribute("alt", translation);
    }
  });

  // Update aria-label attributes for [data-i18n-aria]
  const ariaElements = document.querySelectorAll("[data-i18n-aria]");
  ariaElements.forEach((element) => {
    const keyPath = element.getAttribute("data-i18n-aria");
    const translation = getTranslation(keyPath);
    if (translation !== null && translation !== undefined) {
      element.setAttribute("aria-label", translation);
    }
  });

  // Update meta tags and structured data
  updateMetaTags();

  // Update complex content (projects, skills)
  updateComplexContent();
}

/**
 * Update meta tags for SEO and Social previews
 */
function updateMetaTags() {
  const title = getTranslation("meta.title");
  if (title) document.title = title;

  const desc = getTranslation("meta.description");
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && desc) {
    metaDescription.setAttribute("content", desc);
  }

  const keywords = getTranslation("meta.keywords");
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && keywords) {
    metaKeywords.setAttribute("content", keywords);
  }

  const ogTitle = getTranslation("meta.og:title");
  const metaOgTitle = document.querySelector('meta[property="og:title"]');
  if (metaOgTitle && ogTitle) {
    metaOgTitle.setAttribute("content", ogTitle);
  }

  const ogDesc = getTranslation("meta.og:description");
  const metaOgDesc = document.querySelector('meta[property="og:description"]');
  if (metaOgDesc && ogDesc) {
    metaOgDesc.setAttribute("content", ogDesc);
  }

  const twTitle = getTranslation("meta.twitter:title");
  const metaTwTitle = document.querySelector('meta[name="twitter:title"]');
  if (metaTwTitle && twTitle) {
    metaTwTitle.setAttribute("content", twTitle);
  }

  const twDesc = getTranslation("meta.twitter:description");
  const metaTwDesc = document.querySelector('meta[name="twitter:description"]');
  if (metaTwDesc && twDesc) {
    metaTwDesc.setAttribute("content", twDesc);
  }

  updateJsonLd();
}

/**
 * Update Schema.org JSON-LD
 */
function updateJsonLd() {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach((script) => {
    try {
      const data = JSON.parse(script.textContent);
      if (data["@type"] === "Person") {
        const role = getTranslation("header.role");
        const subtitle = getTranslation("header.heroSubtitle");
        if (role) data.jobTitle = role;
        if (subtitle) data.description = subtitle;
        script.textContent = JSON.stringify(data, null, 2);
      } else if (data["@type"] === "WebPage") {
        const title = getTranslation("meta.title");
        const desc = getTranslation("meta.description");
        if (title) data.name = title;
        if (desc) data.description = desc;
        script.textContent = JSON.stringify(data, null, 2);
      }
    } catch (e) {}
  });
}

/**
 * Update complex content like project descriptions, skills, etc.
 */
function updateComplexContent() {
  updateProjects();
  updateSkills();
}

/**
 * Update project titles, descriptions, and buttons
 */
function updateProjects() {
  if (!translations.work || !Array.isArray(translations.work.projects)) return;
  const projects = translations.work.projects;

  projects.forEach((project) => {
    const projectElement = document.querySelector(`[data-project-id="${project.id}"]`);
    if (!projectElement) return;

    // Update project title
    const titleElement = projectElement.querySelector("[data-project-title]");
    if (titleElement && project.title && project.title[currentLanguage]) {
      titleElement.textContent = project.title[currentLanguage];
    }

    // Update project description
    const descElement = projectElement.querySelector("[data-project-desc]");
    if (descElement && project.description && project.description[currentLanguage]) {
      descElement.textContent = project.description[currentLanguage];
    }

    // Update visit button while preserving the arrow span
    const visitBtn = projectElement.querySelector("[data-project-visit-btn]");
    if (visitBtn && project.visitBtn && project.visitBtn[currentLanguage]) {
      visitBtn.innerHTML = `${project.visitBtn[currentLanguage]} <span>&rarr;</span>`;
    }

    // Update source code link text
    const sourceCodeLink = projectElement.querySelector("[data-project-source-code]");
    if (sourceCodeLink && project.sourceCodeAlt && project.sourceCodeAlt[currentLanguage]) {
      const text = project.sourceCodeAlt[currentLanguage];
      sourceCodeLink.setAttribute("title", text);
      sourceCodeLink.setAttribute("aria-label", text);
    }

    // Update project image alt text
    const imgElement = projectElement.querySelector(".work__image");
    if (imgElement && project.imageAlt && project.imageAlt[currentLanguage]) {
      imgElement.setAttribute("alt", project.imageAlt[currentLanguage]);
    }
  });
}

/**
 * Update skills section
 */
function updateSkills() {
  if (!translations.skills || !Array.isArray(translations.skills.groups)) return;
  const skillsGroups = translations.skills.groups;

  skillsGroups.forEach((group) => {
    const groupElement = document.querySelector(`[data-skills-group-id="${group.id}"]`);
    if (!groupElement) return;

    // Update group heading
    const groupHeading = groupElement.querySelector("[data-skills-group-heading]");
    if (groupHeading && group.heading && group.heading[currentLanguage]) {
      groupHeading.textContent = group.heading[currentLanguage];
    }

    // Update individual skills
    const skillElements = groupElement.querySelectorAll("[data-skill-item]");
    skillElements.forEach((skillElement, index) => {
      if (index < group.items.length) {
        const item = group.items[index];

        const titleElement = skillElement.querySelector("[data-skill-title]");
        if (titleElement && item.title && item.title[currentLanguage]) {
          titleElement.textContent = item.title[currentLanguage];
        }

        const descElement = skillElement.querySelector("[data-skill-description]");
        if (descElement && item.description && item.description[currentLanguage]) {
          descElement.textContent = item.description[currentLanguage];
        }
      }
    });
  });
}

// Auto-initialize when script loads or DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
