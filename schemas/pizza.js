import {defineField, defineType} from 'sanity'
import toppings from './toppings';

export default defineType({
  name: 'pizza',
  title: 'Pizzas',
  icon: () => "🍕",
  type: 'document',
  fields: [
   defineField({
    name: 'name',
    title: 'Pizza name',
    type: 'string',
    description: 'Name of the pizza'
   }),
   defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
        source: 'name',
        maxLength: 96
    }
   }),
   defineField({
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: true,
    }
   }),
   defineField({
    name: 'price',
    title: 'Price',
    type: 'number',
    description: 'Price of the Pizza in cents',
    validation: Rule => Rule.min(1000).max(5000),
   }),
   defineField({
    name: 'topping',
    title: 'Toppings',
    type: 'array',
    of: [{type: 'reference', to: [{type: 'topping'}]}],
   })
  ],
  preview: {
    select: {
        name: 'name',
        media: 'image',
        toppings0: 'topping.0.name',
        toppings1: 'topping.1.name',
        toppings2: 'topping.2.name',
        toppings3: 'topping.3.name',
    },
    prepare(selection) {
        const {name, media, ...toppings} = selection;
        const filterToppings = Object.values(toppings).filter(topping => topping !== undefined)
        return {
          title: `${name}`,
          media,
          subtitle: filterToppings.join(','),
        }
    }
  },
})
