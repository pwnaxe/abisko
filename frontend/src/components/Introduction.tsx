import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Everything starts from somewhere, journey with me to the beginning. What is Abisko and Why Abisko, you ask?
        </p>
        <p className="mt-4">
          One of the most beautiful places in the world, Abisko is a small village in the north of Sweden. It is a place where the sun never sets in the summer and the Northern Lights dance across the sky in the winter. It is a place where the air is clean and the water is pure. It is a place where you can hike, ski, fish, and explore the wilderness. It is a place where you can relax, unwind, and recharge. It is a place where you can be yourself.
        </p>
        <p className="mt-4">
          Travel is a journey, a journey that takes you to places you never thought you would go. Abisko is a place that is not just a place, it is an experience. An experience that will take you to the edge of the world and back.
        </p>
        <p className="mt-4">
          Abisko is a place that is not just a place, it is an experience. An experience that will take you to the edge of the world and back.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'You can see the Northern Lights from the village',
            'The village is surrounded by the Abisko National Park',
            'The village is located in the Arctic Circle',
            'The village is a great place to see the Midnight Sun',
            'You can hike, ski, fish, and explore the wilderness',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-cyan-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Abisko is a place that is not just a place, it is an experience. An experience that will take you to the edge of the world and back. It is a place where you can see the Northern Lights from the village, where you can hike, ski, fish, and explore the wilderness. It is a place where you can relax, unwind, and recharge. It is a place where you can be yourself. It is a place where you can see the Northern Lights from the village, where you can hike, ski, fish, and explore the wilderness. It is a place where you can relax, unwind, and recharge. It is a place where you can be yourself.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-cyan-600 hover:text-blue-800"
          >
            Want to see some Real Photos?{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
