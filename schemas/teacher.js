import {defineType, defineField} from 'sanity'

export const teacher = defineType({
  title: "Teachers",
  name: "teacher",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      title: "Website",
      name: "website",
      type: "url"
    })
  ]
})

export default teacher;
