import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'topping',
  title: 'Toppings',
  icon: () => '🌶️',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Topping name',
      type: 'string',
      description: 'Name of the topping',
    }),
    defineField({
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is the topping vegetarian?',
      options: {
        layout: 'checkbox',
      },
    }),
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare(selection) {
      const {name, vegetarian} = selection
      return {
        title: `${name} ${vegetarian ? '🌱' : ''}`,
      }
    },
  },
})
