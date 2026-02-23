import { defineType } from 'sanity'

export const beforeAfter = defineType({
  name: 'beforeAfter',
  title: 'Before & After',
  type: 'object',
  fields: [
    {
      name: 'before',
      title: 'Before Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
    {
      name: 'after',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
  preview: {
    select: { caption: 'caption' },
    prepare({ caption }) {
      return { title: caption || 'Before & After' }
    },
  },
})