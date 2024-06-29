
import {defineType, defineField} from 'sanity'

export const collection = defineType({
  title: "Collection",
  name: "collection",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text"
    }),
    defineField({
      title: "Courses",
      name: "courses",
      type: "array",
      of: [{ type: "reference", to: [{ type: "course" }] }]
    })
  ]
})

export default collection;
