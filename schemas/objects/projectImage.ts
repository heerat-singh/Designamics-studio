import { defineType } from 'sanity'

export const projectImage = defineType({
  name: 'projectImage',
  title: 'Project Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (rule) => rule.required().error('Alt text is required for accessibility'),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
})