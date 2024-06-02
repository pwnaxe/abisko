import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Łukasz is a great guy. He is very knowledgeable and passionate about travel. He has a lot of experience and is always willing to share it with others. He is a great person to work with and I would recommend him to anyone looking for a travel expert.',
      author: {
        name: 'Antonio Littel',
        role: 'Frontend Developer',
        image: avatarImage3,
      },
    },
    {
      content:
        'Best travel experience ever! It was a great way to see the world and meet new people. I would recommend it to anyone who loves to travel.',
      author: {
        name: 'Lynn Nolan',
        role: 'Growth Marketer',
        image: avatarImage4,
      },
    },
    {
      content:
        'Abisko is a great place to visit. It is a beautiful place with a lot of history and culture. The people are friendly and the food is great. I would recommend it to anyone looking for a unique travel experience.',
      author: {
        name: 'Krista Prosacco',
        role: 'Professional Designer',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'Im not sure how i would have gotten through the last year without the support of the Abisko community. It’s been a great way to connect with other designers and learn from their experiences.',
      author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
    {
      content:
        'Your best trip advisor ever! I have been to many places around the world, but Abisko is my favorite. It is a place that is not just a place, it is an experience. An experience that will take you to the edge of the world and back. It is a place where you can see the Northern Lights from the village, where you can hike, ski, fish, and explore the wilderness. It is a place where you can relax, unwind, and recharge. It is a place where you can be yourself.',
      author: {
        name: 'Regina Wisoky',
        role: 'Design Student',
        image: avatarImage11,
      },
    },
    {
      content:
        'Want to visit abisko again? Take me with you! I have been to many places around the world, but Abisko is my favorite. It is a place that is not just a place, it is an experience. An experience that will take you to the edge of the world and back. It is a place where you can see the Northern Lights from the village, where you can hike, ski, fish, and explore the wilderness. It is a place where you can relax, unwind, and recharge. It is a place where you can be yourself.',
      author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'ready? steady? go! I have been to many places around the world, but Abisko is my favorite. It is a place that is not just a place, it is an experience. An experience that will take you to the edge of the world and back. It is a place where you can see the Northern Lights from the village, where you can hike, ski, fish, and explore the wilderness. It is a place where you can relax, unwind, and recharge. It is a place where you can be yourself.',
      author: {
        name: 'Steven Hackett',
        role: 'Bootcamp Instructor',
        image: avatarImage5,
      },
    },
    {
      content:
        'I never thought I would be able to travel the world and work at the same time. But with Abisko, I was able to do just that. I was able to work from anywhere in the world and still have time to explore new places and meet new people. It was an amazing experience and I would recommend it to anyone who loves to travel.',
      author: {
        name: 'Carla Schoen',
        role: 'Startup Founder',
        image: avatarImage10,
      },
    },
    {
      content:
        'Abisko is a great place to visit. It is a beautiful place with a lot of history and culture. The people are friendly and the food is great. I would recommend it to anyone looking for a unique travel experience.',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Director',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({
  author,
  children,
}: {
  author: { name: string; role: string; image: ImageProps['src'] }
  children: React.ReactNode
}) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          I worked with a small group of early access customers to make sure all
          of the content in the book was exactly what they needed. Hears what
          they had to say about the finished product.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more testimonials</ExpandableButton>
      </Expandable>
    </section>
  )
}
