import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import {
  LinkedInIcon, GitHubIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dan Guenet</title>
        <meta
          name="description"
          content="I’m Dan Guenet - Revenue Operations professional and amatuer developer. Come learn more about me and my work."
        />
      </Head>
      <Container className="mt-12 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Dan Guenet.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              I graduated from college with degrees in Marketing and Computer Science, which 
              led me to pursue a career in Revenue Operations. My first major project was migrating 
              our company from a legacy CRM system to Salesforce. This experience taught 
              me many valuable lessons, primarily through trial and error and making many mistakes along the way. 
              </p>
              <p>
              My initial mistake was in finding excitement in solving problems in overly complex ways. 
              While this approach sounded great in theory, I soon realized that it was not practical. 
              I ended up creating many brittle solutions that were difficult to debug and iterate on.
              </p>
              <p>
              As I gained more experience in my role, I discovered the value of simplicity in solving 
              complex problems. I had actually learned this lesson years ago while studying computer science 
              in college, but it wasn't until I realized that I could apply software engineering principles to 
              Revenue Operations that everything clicked into place. This realization has been the driving force 
              behind my career, allowing me to approach challenges in a more structured and effective way, and 
              ultimately helping me to achieve great success.
              </p>
              <p>
              As a Revenue Operations professional, I see myself as a software engineer for the revenue teams 
              who utilizes no-code or low-code tools to solve problems and build systems. Applying this mindset 
              has led to great success in my work, and I am thrilled to share my insights and experiences through this blog.
            </p>
            </div>
          </div>
          <div className="sticky top-20 lg:pl-20">
          <div className="space-y-10 mb-10">
            <Newsletter 
              CTA="Don't miss a blog post"
              description="Get notified when I publish something new, and unsubscribe at any time."
            />
          </div>
            <ul role="list">
              <SocialLink href="https://www.linkedin.com/in/danguenet/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com/danguenet/personal-website" icon={GitHubIcon} className="mt-4">
                Check out this website on GitHub
              </SocialLink>
              <li className={clsx("mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40", 'flex')}>
                <Link
                  href="mailto:danguenet@gmail.com"
                  className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                >
                  <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                  <span className="ml-4">danguenet@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
