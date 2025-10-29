import { defineCollection, z } from 'astro:content';

const articoliCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const pagineCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    backgroundImage: z.string().optional(),
    backgroundOverlay: z.number().optional(),
    order: z.number().optional(),
  }),
});

const eventiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    eventDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    heroImage: z.string().optional(),
    featured: z.boolean().optional(),
    registrationUrl: z.string().optional(),
  }),
});

const pubblicazioniCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    pubDate: z.coerce.date(),
    publisher: z.string(),
    abstract: z.string(),
    doi: z.string().optional(),
    pdfUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string(),
    logoText: z.string(),
    logoImage: z.string().optional(),
    logoVariant: z.enum(['full', 'icon', 'horizontal']).optional(),
    showLogoImage: z.boolean().optional(),
    showLogoText: z.boolean().optional(),
    logoAlt: z.string().optional(),
    contactEmail: z.string(),
    website: z.string(),
    twitterUsernames: z.string().optional(),
    showTwitter: z.boolean().optional(),
    twitterHeight: z.number().optional(),
    twitterTheme: z.enum(['light', 'dark']).optional(),
    twitterMode: z.enum(['embed', 'link']).optional(),
    twitterSource: z.enum(['users', 'list']).optional(),
    twitterListUrl: z.string().optional(),
    linkedinUsernames: z.string().optional(),
    showLinkedin: z.boolean().optional(),
    linkedinHeight: z.number().optional(),
    linkedinMode: z.enum(['embed', 'link']).optional(),
    linkedinEmbedHtml: z.string().optional(),
    facebookUsernames: z.string().optional(),
    showFacebook: z.boolean().optional(),
    facebookHeight: z.number().optional(),
    footerText: z.string().optional(),
    copyrightYear: z.number().optional(),
  }),
});

const navigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    url: z.string(),
    order: z.number(),
    showDesktop: z.boolean().optional(),
    showMobile: z.boolean().optional(),
    isExternal: z.boolean().optional(),
  }),
});

const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroBgFrom: z.string().optional(),
    heroBgTo: z.string().optional(),
    heroBackgroundImage: z.string().optional(),
    heroOverlayOpacity: z.number().optional(),
    ctaButton1Label: z.string().optional(),
    ctaButton1Url: z.string().optional(),
    ctaButton2Label: z.string().optional(),
    ctaButton2Url: z.string().optional(),
    showAboutSection: z.boolean().optional(),
    aboutTitle: z.string().optional(),
    aboutContent: z.string().optional(),
    featuredArticlesCount: z.number().optional(),
    featuredPublicationsCount: z.number().optional(),
    featuredEventsCount: z.number().optional(),
    articlesSectionTitle: z.string().optional(),
    publicationsSectionTitle: z.string().optional(),
    eventsSectionTitle: z.string().optional(),
    showSocialMedia: z.boolean().optional(),
    socialMediaTitle: z.string().optional(),

    // Drag-and-drop ordered sections (optional; fallback to defaults when absent)
    sections: z
      .array(
        z.object({
          type: z.enum(['hero', 'brand', 'articles', 'publications', 'events', 'social', 'about']),
          enabled: z.boolean().optional(),

          // Hero overrides (used when type === 'hero')
          heroBackgroundImage: z.string().optional(),
          heroOverlayOpacity: z.number().optional(),
          title: z.string().optional(),
          subtitle: z.string().optional(),
          ctaButton1Label: z.string().optional(),
          ctaButton1Url: z.string().optional(),
          ctaButton2Label: z.string().optional(),
          ctaButton2Url: z.string().optional(),

          // Brand (logo) section options (used when type === 'brand')
          logoVariant: z.enum(['full', 'horizontal', 'icon']).optional(),
          showLogoImage: z.boolean().optional(),
          showLogoText: z.boolean().optional(),
          align: z.enum(['left', 'center', 'right']).optional(),
          maxWidth: z.enum(['sm', 'md', 'lg']).optional(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  'articoli': articoliCollection,
  'pagine': pagineCollection,
  'eventi': eventiCollection,
  'pubblicazioni': pubblicazioniCollection,
  'settings': settingsCollection,
  'navigation': navigationCollection,
  'homepage': homepageCollection,
};
