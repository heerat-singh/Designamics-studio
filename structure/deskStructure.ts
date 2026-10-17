import type { StructureBuilder } from 'sanity/structure'

// Helper for singleton documents
const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon?: string
) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // ── Singletons ──
      singletonListItem(S, 'homepage', 'Homepage'),
      singletonListItem(S, 'aboutPage', 'About Page'),
      singletonListItem(S, 'contactInfo', 'Contact Info'),

      S.divider(),

      // ── Projects ──
      S.listItem()
        .title('Projects')
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('All Projects')
                .child(
                  S.documentTypeList('project').title('All Projects')
                ),
              S.listItem()
                .title('Designamics Projects')
                .child(
                  S.documentTypeList('project')
                    .title('Designamics Projects')
                    .filter('_type == "project" && brand == "designamics"')
                ),
              S.listItem()
                .title('City Builders Projects')
                .child(
                  S.documentTypeList('project')
                    .title('City Builders Projects')
                    .filter('_type == "project" && brand == "cityBuilders"')
                ),
            ])
        ),

      // ── Services ──
      S.documentTypeListItem('service').title('Services'),

      // ── Team ──
      S.documentTypeListItem('teamMember').title('Team Members'),

      // ── Testimonials ──
      S.documentTypeListItem('testimonial').title('Testimonials'),
    ])
