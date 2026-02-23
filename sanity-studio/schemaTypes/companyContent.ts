export const companyContentSchema = {
  name: 'companyContent',
  title: 'Company Content',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
        { name: 'primaryCta', title: 'Primary CTA', type: 'string' },
        { name: 'secondaryCta', title: 'Secondary CTA', type: 'string' }
      ]
    },
    {
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'tag', title: 'Tag', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'storySteps',
      title: 'Story Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 }
          ]
        }
      ]
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', title: 'Quote', type: 'text', rows: 4 },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
        { name: 'button', title: 'Button', type: 'string' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.badge'
    }
  }
} as const;
