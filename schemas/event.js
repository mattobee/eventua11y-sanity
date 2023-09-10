export default {
    name: 'event',
    type: 'document',
      title: 'Events',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: Rule => Rule.required()
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location'
      },
      {
        name: 'online',
        type: 'boolean',
        title: 'Online',
        initialValue: false
      },
      {
        name: 'website',
        type: 'url',
        title: 'Website'
      },
      {
        name: 'dateStart',
        type: 'datetime',
        title: 'Starts'
      },
      {
        name: 'dateEnd',
        type: 'datetime',
        title: 'Ends'
      },
      {
        name: 'day',
        type: 'boolean',
        title: 'All day',
        initialValue: false
      },
      {
        title: 'Type',
        name: 'type',
        type: 'string',
        initialValue: 'normal',
        options: {
          list: [
            { title: 'Normal', value: 'normal' },
            { title: 'Theme', value: 'theme' },
          ]
        }
    },
    ]
  }