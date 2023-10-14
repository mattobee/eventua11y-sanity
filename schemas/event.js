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
      title: "Attendance Mode",
      name: "attendanceMode",
      type: "string",
      validation: Rule => Rule.required(),
      initialValue: "hybrid",
      options: {
        list: [
          { title: 'Online', value: 'online' },
          { title: 'Offline', value: 'offline' },
          { title: 'Mixed', value: 'mixed'},
          { title: 'None', value: 'none'}
        ]
      }
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string",
      hidden: ({document}) => document?.attendanceMode === 'online' || document?.attendanceMode === 'none'
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
      type: "datetime"
    }),
    defineField({
      title: "Ends",
      name: "dateEnd",
      type: "datetime"
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