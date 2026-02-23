import { defineType, defineField } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  icon: () => '📞',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
    }),
    defineField({
      name: 'designamicsInstagram',
      title: 'Designamics Instagram',
      type: 'url',
    }),
    defineField({
      name: 'cityBuildersInstagram',
      title: 'City Builders Instagram',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Info' }
    },
  },
})