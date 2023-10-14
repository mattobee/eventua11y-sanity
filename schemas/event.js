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
      title: "Type",
      name: "type",
      type: "string",
      initialValue: "normal",
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Theme', value: 'theme' },
        ],
        layout: 'radio'
      }
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
        ],
        layout: 'radio'
      },
      // hide if type is theme
      hidden: ({document}) => document?.type === 'theme'
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string",
      hidden: ({document}) => document?.attendanceMode === 'online'
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
    })
  ]
})

export default event;
