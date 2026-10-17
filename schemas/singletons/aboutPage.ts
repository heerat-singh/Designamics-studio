import { defineType, defineField } from 'sanity'

const philosophyFields = [
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',
    rows: 4,
  }),
  defineField({
    name: 'points',
    title: 'Bullet Points',
    type: 'array',
    of: [{ type: 'string' }],
  }),
]

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => '📖',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'story', title: 'Story' },
    { name: 'philosophy', title: 'Philosophy' },
    { name: 'team', title: 'Team' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── Hero ──
    defineField({
      name: 'heroLabel',
      title: 'Small Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Headline',
      type: 'string',
      group: 'hero',
      initialValue: 'Two Brands, One Vision',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Intro',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue:
        'Born from a shared belief that great spaces transform lives, Designamics and City Builders bring together the art of interior design and the science of construction under one roof.',
    }),

    // ── Story ──
    defineField({
      name: 'storyHeadline',
      title: 'Headline',
      type: 'string',
      group: 'story',
      initialValue: 'From Ludhiana, for Ludhiana — and beyond.',
    }),
    defineField({
      name: 'storyBody',
      title: 'Text',
      type: 'text',
      rows: 8,
      group: 'story',
      description: 'Leave an empty line between paragraphs.',
      initialValue:
        "What started as a passion for creating beautiful living spaces has grown into a comprehensive design and construction practice. We don't just design interiors or build structures — we craft experiences that families and businesses live in every day.\n\nOur dual-brand approach means clients get the best of both worlds: the creative vision of an interior design studio with the structural expertise of an engineering firm. Every project benefits from this integrated perspective.",
    }),
    defineField({
      name: 'storyImage',
      title: 'Image',
      type: 'image',
      group: 'story',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    }),

    // ── Philosophy ──
    defineField({
      name: 'philosophyLabel',
      title: 'Small Label',
      type: 'string',
      group: 'philosophy',
      initialValue: 'What Drives Us',
    }),
    defineField({
      name: 'philosophyTitle',
      title: 'Title',
      type: 'string',
      group: 'philosophy',
      initialValue: 'Our Philosophy',
    }),
    defineField({
      name: 'philosophySubtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'philosophy',
      initialValue: 'Two distinct approaches, unified by excellence.',
    }),
    defineField({
      name: 'designamicsPhilosophy',
      title: 'Designamics',
      type: 'object',
      group: 'philosophy',
      fields: philosophyFields,
      initialValue: {
        description:
          'We believe interiors should tell a story — your story. Every material, every texture, every color is chosen with intention to create spaces that feel both luxurious and genuinely yours. Our approach blends contemporary aesthetics with warmth and functionality.',
        points: [
          'Residential Interior Design',
          'Commercial Space Design',
          'Furniture & Fixture Curation',
          'Turnkey Interior Solutions',
        ],
      },
    }),
    defineField({
      name: 'cityBuildersPhilosophy',
      title: 'City Builders',
      type: 'object',
      group: 'philosophy',
      fields: philosophyFields,
      initialValue: {
        description:
          "Construction isn't just about bricks and mortar — it's about building trust. Every structure we create is engineered for longevity, built with precision, and delivered with transparency. We bring your architectural vision to structural reality.",
        points: [
          'Residential Construction',
          'Commercial Building',
          'Renovation & Remodeling',
          'Project Management',
        ],
      },
    }),

    // ── Team ──
    defineField({
      name: 'teamLabel',
      title: 'Small Label',
      type: 'string',
      group: 'team',
      initialValue: 'Leadership',
    }),
    defineField({
      name: 'teamTitle',
      title: 'Title',
      type: 'string',
      group: 'team',
      initialValue: 'The People Behind It All',
    }),
    defineField({
      name: 'teamSubtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'team',
      description: 'Founders are picked from Team Members marked "Is Founder".',
      initialValue: 'Meet the founders driving our vision forward.',
    }),
    defineField({
      name: 'teamButtonLabel',
      title: 'Button Text',
      type: 'string',
      group: 'team',
      initialValue: 'Meet the Full Team',
    }),

    // ── SEO ──
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Page' }
    },
  },
})
