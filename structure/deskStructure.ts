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
      singletonListItem(S, 'siteSettings', 'Site Settings'),
      singletonListItem(S, 'homepage', 'Homepage'),
      singletonListItem(S, 'contactInfo', 'Contact Info'),
      singletonListItem(S, 'instagramConfig', 'Instagram Config'),

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
      S.listItem()
        .title('Services')
        .child(
          S.list()
            .title('Services')
            .items([
              S.listItem()
                .title('Designamics Services')
                .child(
                  S.documentTypeList('service')
                    .title('Designamics Services')
                    .filter('_type == "service" && brand == "designamics"')
                ),
              S.listItem()
                .title('City Builders Services')
                .child(
                  S.documentTypeList('service')
                    .title('City Builders Services')
                    .filter('_type == "service" && brand == "cityBuilders"')
                ),
              S.listItem()
                .title('All Services')
                .child(
                  S.documentTypeList('service').title('All Services')
                ),
            ])
        ),

      // ── Team ──
      S.documentTypeListItem('teamMember').title('Team Members'),

      // ── Testimonials ──
      S.documentTypeListItem('testimonial').title('Testimonials'),
    ])