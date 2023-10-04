import {defineType, defineField, defineArrayMember} from 'sanity'

export const event = defineType({
  title: "Events",
  name: "event",
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
      type: "text",
      validation: Rule => Rule.required()
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string"
    }),
    // defineField({
    //   title: "Country",
    //   name: "country",
    //   type: "countrieslist",
    //   options: {
    //     showStates: false,
    //     placeholder: 'Select country',
    //     showIcon: true,
    //   },
    // }),
    defineField({
      title: "Online",
      name: "online",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      title: "Website",
      name: "website",
      type: "url"
    }),
    defineField({
      title: "Starts",
      name: "dateStart",
      type: "recurringDates"
    }),
    defineField({
      title: "Ends",
      name: "dateEnd",
      type: "recurringDates"
    }),
    defineField({
      title: "All day",
      name: "day",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      title: "Type",
      name: "type",
      type: "string",
      initialValue: "normal",
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Theme', value: 'theme' },
        ]
      }
    })
  ]
})

export default event;

// export default {
//     name: 'event',
//     type: 'document',
//       title: 'Events',
//     fields: [
//       {
//         name: 'title',
//         type: 'string',
//         title: 'Title',
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'description',
//         type: 'text',
//         title: 'Description',
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'location',
//         type: 'string',
//         title: 'Location'
//       },
//       {
//         name: 'country',
//         title: 'Country',
//         type: 'countrieslist',
//         options: {
//           showStates: false,
//           placeholder: 'Select country',
//           showIcon: true,
//         },
//       },
//       {
//         name: 'online',
//         type: 'boolean',
//         title: 'Online',
//         initialValue: false
//       },
//       {
//         name: 'website',
//         type: 'url',
//         title: 'Website'
//       },
//       {
//         name: 'dateStart',
//         type: 'datetime',
//         title: 'Starts'
//       },
//       {
//         name: 'dateEnd',
//         type: 'datetime',
//         title: 'Ends'
//       },
//       {
//         name: 'day',
//         type: 'boolean',
//         title: 'All day',
//         initialValue: false
//       },
//       {
//         title: 'Type',
//         name: 'type',
//         type: 'string',
//         initialValue: 'normal',
//         options: {
//           list: [
//             { title: 'Normal', value: 'normal' },
//             { title: 'Theme', value: 'theme' },
//           ]
//         }
//     },
//     ]
//   }