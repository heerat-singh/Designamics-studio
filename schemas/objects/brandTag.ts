import { defineField } from 'sanity'

export const brandTagField = defineField({
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
  initialValue: 'both',
  validation: (rule) => rule.required(),
})