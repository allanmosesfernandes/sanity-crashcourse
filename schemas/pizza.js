import {defineField, defineType} from 'sanity'

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
   })
  ],
})
