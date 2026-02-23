import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'designamicsIntro',
      title: 'Designamics Introduction',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cityBuildersIntro',
      title: 'City Builders Introduction',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label', validation: (rule) => rule.required() },
            { name: 'value', type: 'number', title: 'Value', validation: (rule) => rule.required() },
            { name: 'suffix', type: 'string', title: 'Suffix', description: 'e.g., +, K, %' },
          ],
          preview: {
            select: { label: 'label', value: 'value', suffix: 'suffix' },
            prepare({ label, value, suffix }) {
              return { title: `${value}${suffix || ''} ${label}` }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Homepage' }
    },
  },
})