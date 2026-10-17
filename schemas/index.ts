// Objects
import { seo } from './objects/seo'
import { projectImage } from './objects/projectImage'
import { projectVideo } from './objects/projectVideo'
import { beforeAfter } from './objects/beforeAfter'

// Documents
import { project } from './documents/project'
import { service } from './documents/service'
import { teamMember } from './documents/teamMember'
import { testimonial } from './documents/testimonial'

// Singletons
import { homepage } from './singletons/homepage'
import { aboutPage } from './singletons/aboutPage'
import { contactInfo } from './singletons/contactInfo'

export const schemaTypes = [
  // Objects
  seo,
  projectImage,
  projectVideo,
  beforeAfter,
  // Documents
  project,
  service,
  teamMember,
  testimonial,
  // Singletons
  homepage,
  aboutPage,
  contactInfo,
]
