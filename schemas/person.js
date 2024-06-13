import {defineType, defineField} from 'sanity'

export const person = defineType({
  title: "People",
  name: "person",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      title: "Title",
      name: "roleTitle",
      type: "string"
    }),
    defineField({
      title: "Website",
      name: "website",
      type: "url"
    })
  ]
})

export default person;
