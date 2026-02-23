import { defineType, defineField } from 'sanity'

export const instagramConfig = defineType({
  name: 'instagramConfig',
  title: 'Instagram Config',
  type: 'document',
  icon: () => '📸',
  fields: [
    defineField({
      name: 'syncEnabled',
      title: 'Sync Enabled',
      type: 'boolean',
      initialValue: true,
      description: 'Kill switch — disable to stop all Instagram syncing',
    }),

    // ── Designamics (@designamics_) ──
    defineField({
      name: 'designamicsToken',
      title: 'Designamics Access Token',
      type: 'string',
      description: 'Long-lived token for @designamics_',
    }),
    defineField({
      name: 'designamicsTokenExpiresAt',
      title: 'Designamics Token Expires At',
      type: 'datetime',
    }),

    // ── City Builders (@city__builders) ──
    defineField({
      name: 'cityBuildersToken',
      title: 'City Builders Access Token',
      type: 'string',
      description: 'Long-lived token for @city__builders',
    }),
    defineField({
      name: 'cityBuildersTokenExpiresAt',
      title: 'City Builders Token Expires At',
      type: 'datetime',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Instagram Config' }
    },
  },
})
