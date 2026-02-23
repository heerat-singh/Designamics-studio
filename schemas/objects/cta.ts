import { defineType } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'isExternal',
      title: 'Opens in new tab',
      type: 'boolean',
      initialValue: false,
    },
  ],
})