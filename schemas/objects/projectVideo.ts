import { defineType } from 'sanity'

export const projectVideo = defineType({
  name: 'projectVideo',
  title: 'Project Video',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      validation: (rule) => rule.required().error('A video file is required'),
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'poster',
      filename: 'video.asset.originalFilename',
    },
    prepare({ title, media, filename }) {
      return {
        title: title || filename || 'Project video',
        subtitle: 'Video',
        media,
      }
    },
  },
})
