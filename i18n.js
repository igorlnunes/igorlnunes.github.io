/**
 * Internationalization (i18n) Module
 * Handles language switching, persistence, and DOM updates
 */

let currentLanguage = 'pt';
let translations = {};

/**
 * Initialize i18n system
 * Loads translations and sets up initial language
 */
async function initI18n() {
  try {
    // Load translations
    const response = await fetch('./translations.json');
    translations = await response.json();

    // Get saved language preference or default to 'pt'
    currentLanguage = localStorage.getItem('language') || 'pt';

    // Set initial language
    setLanguage(currentLanguage, false); // false = don't save again on init
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

/**
 * Get translation value for a given key path
 * @param {string} keyPath - Dot notation path to translation (e.g., 'header.navWork')
 * @returns {string} Translated text or the keyPath if not found
 */
function getTranslation(keyPath) {
  const keys = keyPath.split('.');
  let value = translations;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return keyPath; // Return key path if not found
    }
  }

  // If value is an object with language keys, return the current language value
  if (value && typeof value === 'object' && 'pt' in value && 'en' in value) {
    return value[currentLanguage];
  }

  return value;
}

/**
 * Set the current language and update DOM
 * @param {string} lang - Language code ('pt' or 'en')
 * @param {boolean} shouldSave - Whether to save preference to localStorage
 */
function setLanguage(lang, shouldSave = true) {
  if (lang !== 'pt' && lang !== 'en') {
    console.warn(`Invalid language: ${lang}. Using 'pt' instead.`);
    lang = 'pt';
  }

  currentLanguage = lang;

  // Save preference
  if (shouldSave) {
    localStorage.setItem('language', lang);
  }

  // Update HTML lang attribute
  document.documentElement.lang = getTranslation('meta.htmlLang');

  // Update all translatable elements
  updatePageTranslations();

  // Update toggle button state
  updateLanguageToggle();
}

/**
 * Toggle between languages
 */
function toggleLanguage() {
  const newLang = currentLanguage === 'pt' ? 'en' : 'pt';
  setLanguage(newLang, true);
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
  return currentLanguage;
}

// Make functions globally available
window.toggleLanguage = toggleLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.setLanguage = setLanguage;
window.getTranslation = getTranslation;

/**
 * Update all elements with data-i18n attributes
 */
function updatePageTranslations() {
  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const keyPath = element.getAttribute('data-i18n');
    const translation = getTranslation(keyPath);

    // Handle different element types
    if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
      element.value = translation;
      element.textContent = translation;
    } else if (element.tagName === 'A' && element.hasAttribute('data-i18n-title')) {
      // For links with title attribute
      element.textContent = translation;
    } else {
      element.textContent = translation;
    }
  });

  // Update elements with data-i18n-title attribute (for title attributes)
  const titleElements = document.querySelectorAll('[data-i18n-title]');
  titleElements.forEach((element) => {
    const keyPath = element.getAttribute('data-i18n-title');
    const translation = getTranslation(keyPath);
    element.setAttribute('title', translation);
  });

  // Update meta tags
  updateMetaTags();

  // Update project descriptions and other complex content
  updateComplexContent();
}

/**
 * Update meta tags for SEO
 */
function updateMetaTags() {
  // Update title
  document.title = getTranslation('meta.title');

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', getTranslation('meta.description'));
  }

  // Update keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', getTranslation('meta.keywords'));
  }

  // Update Open Graph tags
  updateOGTags();

  // Update Twitter tags
  updateTwitterTags();
}

/**
 * Update Open Graph meta tags
 */
function updateOGTags() {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', getTranslation('meta.og:title'));
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', getTranslation('meta.og:description'));
  }
}

/**
 * Update Twitter Card meta tags
 */
function updateTwitterTags() {
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', getTranslation('meta.twitter:title'));
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', getTranslation('meta.twitter:description'));
  }
}

/**
 * Update complex content like project descriptions, skills, etc.
 */
function updateComplexContent() {
  // Update work section projects
  updateProjects();

  // Update skills section
  updateSkills();
}

/**
 * Update project titles, descriptions, and buttons
 */
function updateProjects() {
  const projects = translations.work.projects;

  projects.forEach((project) => {
    const projectElement = document.querySelector(`[data-project-id="${project.id}"]`);
    if (!projectElement) return;

    // Update project title
    const titleElement = projectElement.querySelector('[data-project-title]');
    if (titleElement) {
      titleElement.textContent = project.title[currentLanguage];
    }

    // Update project description
    const descElement = projectElement.querySelector('[data-project-desc]');
    if (descElement) {
      descElement.textContent = project.description[currentLanguage];
    }

    // Update visit button if it exists
    const visitBtn = projectElement.querySelector('[data-project-visit-btn]');
    if (visitBtn) {
      visitBtn.textContent = `${project.visitBtn[currentLanguage]} ${'→'}`;
    }

    // Update source code link text
    const sourceCodeLink = projectElement.querySelector('[data-project-source-code]');
    if (sourceCodeLink) {
      sourceCodeLink.setAttribute('title', project.sourceCodeAlt[currentLanguage]);
      sourceCodeLink.setAttribute('alt', project.sourceCodeAlt[currentLanguage]);
    }
  });
}

/**
 * Update skills section
 */
function updateSkills() {
  const skillsGroups = translations.skills.groups;

  skillsGroups.forEach((group) => {
    const groupElement = document.querySelector(`[data-skills-group-id="${group.id}"]`);
    if (!groupElement) return;

    // Update group heading
    const groupHeading = groupElement.querySelector('[data-skills-group-heading]');
    if (groupHeading) {
      groupHeading.textContent = group.heading[currentLanguage];
    }

    // Update individual skills
    const skillElements = groupElement.querySelectorAll('[data-skill-item]');
    skillElements.forEach((skillElement, index) => {
      if (index < group.items.length) {
        const item = group.items[index];

        const titleElement = skillElement.querySelector('[data-skill-title]');
        if (titleElement) {
          titleElement.textContent = item.title[currentLanguage];
        }

        const descElement = skillElement.querySelector('[data-skill-description]');
        if (descElement) {
          descElement.textContent = item.description[currentLanguage];
        }
      }
    });
  });
}

/**
 * Update language toggle button to show current language
 */
function updateLanguageToggle() {
  const toggleBtn = document.getElementById('language-toggle');
  if (toggleBtn) {
    if (currentLanguage === 'pt') {
      toggleBtn.textContent = '🇧🇷 PT-BR';
      toggleBtn.setAttribute('title', 'Switch to English');
      toggleBtn.setAttribute('aria-label', 'Switch to English');
    } else {
      toggleBtn.textContent = '🇬🇧 EN';
      toggleBtn.setAttribute('title', 'Mudar para Português');
      toggleBtn.setAttribute('aria-label', 'Mudar para Português');
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
