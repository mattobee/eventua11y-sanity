import {defineType, defineField} from 'sanity'

export const course = defineType({
  title: "Courses",
  name: "course",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
        title: "Provider",
        name: "provider",
        type: "array",
        of: [{ type: "reference", to: [{ type: "provider" }] }],
        validation: Rule => Rule.required()
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
      validation: Rule => Rule.required()
    }),
    defineField({
        title: 'Cost',
        name: 'cost',
        type: 'string',
        validation: Rule => Rule.required(),
        initialValue: 'paid',
        options: {
            list: [
                { title: 'Paid', value: 'paid' },
                { title: 'Free', value: 'free' }
            ]
        }
    }),
    defineField({
        title: 'Format',
        name: 'format',
        type: 'string',
        options: {
            list: [
            { title: 'Talk', value: 'talk' },
            { title: 'Workshop', value: 'workshop' },
            { title: 'Tutorial', value: 'tutorial' },
            { title: 'Roundtable', value: 'roundtable' },
            { title: 'Competition', value: 'competition' },
            { title: 'Panel', value: 'panel' },
            { title: 'Interview', value: 'interview' },
            { title: 'Demo', value: 'demo' },
            { title: 'Keynote', value: 'keynote' },
            { title: 'Announcement', value: 'announcement' },
            { title: 'Other', value: 'other' }
            ]
        }
    }),
    defineField({
        title: 'Level',
        name: 'level',
        type: 'string',
        validation: Rule => Rule.required(),
        initialValue: 'beginner',
        options: {
            list: [
                { title: 'Beginner', value: 'beginner' },
                { title: 'Intermediate', value: 'intermediate' },
                { title: 'Advanced', value: 'advanced' }
            ]
        }
    }),
    defineField({
      title: "Attendance Mode",
      name: "attendanceMode",
      type: "string",
      validation: Rule => Rule.required(),
      initialValue: "online",
      options: {
        list: [
          { title: 'Online', value: 'online' },
          { title: 'Offline', value: 'offline' },
          { title: 'Mixed', value: 'mixed'},
          { title: 'None', value: 'none'}
        ],
        layout: 'radio'
      }
    }),
    defineField({
      title: "Exam",
      name: "exam",
      type: "boolean"
    }),
    defineField({
      title: "Certificate",
      name: "certificate",
      type: "boolean"
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string",
      hidden: ({document}) => document?.attendanceMode === 'online'
    }),
    defineField({
      title: "Website",
      name: "website",
      type: "url"
    })
  ]
})

export default course;
