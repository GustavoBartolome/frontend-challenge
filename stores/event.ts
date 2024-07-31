// stores/event.ts
import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', () => {
  const eventName = ref('Amazing Tech Conference 2024')
  const eventDate = ref('October 15-17, 2024')
  const eventLocation = ref('Tech Center, San Francisco, CA')
  
  const menuItems = ref([
    { name: 'Schedule', href: '#schedule' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Location', href: '#location' },
  ])

  const footerLinks = ref([
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Contact Us', href: '#contact' },
  ])

  const schedule = ref([
    { 
      date: 'October 15, 2024',
      sessions: [
        { time: '9:00 AM', title: 'Opening Keynote', speaker: 'John Doe' },
        { time: '11:00 AM', title: 'Future of AI', speaker: 'Jane Smith' },
        // Add more sessions...
      ]
    },
    // Add more days...
  ])

  const speakers = ref([
    { name: 'John Doe', bio: 'AI Expert at Tech Corp', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Jane Smith', bio: 'CEO of Future Tech', image: 'https://randomuser.me/api/portraits/women/75.jpg' },
    // Add more speakers...
  ])

  const tickets = ref([
    { type: 'Early Bird', price: 299, available: true },
    { type: 'Regular', price: 399, available: true },
    { type: 'VIP', price: 599, available: true },
  ])

  return {
    eventName,
    eventDate,
    eventLocation,
    menuItems,
    footerLinks,
    schedule,
    speakers,
    tickets,
  }
})