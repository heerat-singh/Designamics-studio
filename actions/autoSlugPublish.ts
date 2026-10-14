import {
  useClient,
  useDocumentOperation,
  type DocumentActionComponent,
  type DocumentActionProps,
  type SanityClient,
} from 'sanity'

// Document types whose slug is generated from the title on publish.
export const AUTO_SLUG_TYPES = ['project', 'service']

const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

// "Contemporary Residence – 600 sq. yds." -> "contemporary-residence-600-sq-yds"
export function slugify(input: string) {
  return input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96)
    .replace(/-+$/g, '')
}

async function uniqueSlug(client: SanityClient, base: string, type: string, id: string) {
  const publishedId = id.replace(/^drafts\./, '')
  for (let n = 1; ; n++) {
    const candidate = n === 1 ? base : `${base}-${n}`
    const taken = await client.fetch<boolean>(
      `count(*[_type == $type && slug.current == $slug && !(_id in [$publishedId, $draftId])]) > 0`,
      { type, slug: candidate, publishedId, draftId: `drafts.${publishedId}` },
    )
    if (!taken) return candidate
  }
}

// Wraps the default Publish action: before publishing, give the document a clean slug
// built from its title if it has none or the current one isn't URL-safe. Valid slugs
// are left alone so published links don't change when a title is edited.
export function withAutoSlug(publishAction: DocumentActionComponent): DocumentActionComponent {
  const AutoSlugPublish = (props: DocumentActionProps) => {
    const original = publishAction(props)
    const { patch } = useDocumentOperation(props.id, props.type)
    const client = useClient({ apiVersion: '2024-01-01' })

    if (!original) return original

    return {
      ...original,
      onHandle: async () => {
        const doc = (props.draft || props.published) as { title?: string; slug?: { current?: string } } | null
        const current = doc?.slug?.current
        const base = slugify(doc?.title || '')

        if (base && (!current || !VALID_SLUG.test(current))) {
          const slug = await uniqueSlug(client, base, props.type, props.id)
          patch.execute([{ set: { slug: { _type: 'slug', current: slug } } }])
        }

        original.onHandle?.()
      },
    }
  }
  AutoSlugPublish.action = publishAction.action
  return AutoSlugPublish
}
