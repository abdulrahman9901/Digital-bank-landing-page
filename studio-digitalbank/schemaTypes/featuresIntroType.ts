import {defineField, defineType} from 'sanity'

export const featuresIntroType = defineType({
  name: 'featuresIntro',
  title: 'Features Section Intro',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Why choose Digitalbank?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
