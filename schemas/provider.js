import {defineType, defineField} from 'sanity'

export const provider = defineType({
  title: "Providers",
  name: "provider",
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

export default provider;
