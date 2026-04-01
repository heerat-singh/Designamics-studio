import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: () => '🏗️',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      options: {
        list: [
          { title: 'Designamics', value: 'designamics' },
          { title: 'City Builders', value: 'cityBuilders' },
          { title: 'Both', value: 'both' },
        ],
        layout: 'radio',
      },
      initialValue: 'designamics',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short one-liner for cards and previews',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
      ],
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          'Residential',
          'Commercial',
          'Office',
          'Retail',
          'Hospitality',
          'Industrial',
          'Renovation',
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'string',
      description: 'e.g., 2500 sq ft',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 6 months',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'projectImage' }],
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'projectVideo' }],
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Before & After',
      type: 'array',
      of: [{ type: 'beforeAfter' }],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),

    // ── Instagram Sync ──
    defineField({
      name: 'instagramId',
      title: 'Instagram Media ID',
      type: 'string',
      readOnly: true,
      hidden: ({ document }) => !document?.instagramId,
    }),
    defineField({
      name: 'instagramPermalink',
      title: 'Instagram Link',
      type: 'url',
      readOnly: true,
      hidden: ({ document }) => !document?.instagramPermalink,
    }),
    defineField({
      name: 'syncStatus',
      title: 'Sync Status',
      type: 'string',
      options: {
        list: [
          { title: 'Needs Review', value: 'needs_review' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'approved',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      brand: 'brand',
      media: 'coverImage',
    },
    prepare({ title, brand, media }) {
      const brandLabel = brand === 'designamics' ? '🎨 Designamics' : brand === 'cityBuilders' ? '🏗️ City Builders' : '🤝 Both'
      return { title, subtitle: brandLabel, media }
    },
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrder',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
})
