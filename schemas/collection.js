
import {defineType, defineField} from 'sanity'

export const collection = defineType({
  title: "Colletion",
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
    })
  ]
})

export default collection;
