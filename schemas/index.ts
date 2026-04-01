// Objects
import { seo } from './objects/seo'
import { projectImage } from './objects/projectImage'
import { projectVideo } from './objects/projectVideo'
import { beforeAfter } from './objects/beforeAfter'
import { cta } from './objects/cta'

// Documents
import { project } from './documents/project'
import { service } from './documents/service'
import { teamMember } from './documents/teamMember'
import { testimonial } from './documents/testimonial'

// Singletons
import { siteSettings } from './singletons/siteSettings'
import { homepage } from './singletons/homepage'
import { contactInfo } from './singletons/contactInfo'
import { instagramConfig } from './singletons/instagramConfig'

export const schemaTypes = [
  // Objects
  seo,
  projectImage,
  projectVideo,
  beforeAfter,
  cta,
  // Documents
  project,
  service,
  teamMember,
  testimonial,
  // Singletons
  siteSettings,
  homepage,
  contactInfo,
  instagramConfig,
]
