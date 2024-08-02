// stores/event.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface MenuItem {
  name: string;
  href: string;
}

interface Session {
  time: string;
  title: string;
  speaker: string;
}

interface ScheduleDay {
  date: string;
  sessions: Session[];
}

interface Speaker {
  name: string;
  bio: string;
  image: string;
}

export interface Ticket {
  type: string;
  price: number;
  available: boolean;
}

export const useEventStore = defineStore('event', () => {
  const eventName = ref<string>('Tech Innovators Summit 2024')
  const eventDate = ref<string>('October 15-17, 2024')
  const eventLocation = ref<string>('Tech Center, San Francisco, CA')
  
  const menuItems = ref<MenuItem[]>([
    { name: 'Schedule', href: '#schedule' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Location', href: '#location' },
  ])

  const footerLinks = ref<MenuItem[]>([
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Contact Us', href: '#contact' },
  ])

  const schedule = ref<ScheduleDay[]>([
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

  const speakers = ref<Speaker[]>([
    { name: 'John Doe', bio: 'AI Expert at Tech Corp', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Jane Smith', bio: 'CEO of Future Tech', image: 'https://randomuser.me/api/portraits/women/75.jpg' },
    // Add more speakers...
  ])

  const tickets = ref<Ticket[]>([
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
