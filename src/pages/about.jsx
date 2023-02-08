import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  LinkedInIcon, GitHubIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
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

function MailIcon2(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="sticky top-20 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon2 className="h-6 w-6 flex-none" />
        <span className="ml-3">Don&#39;t miss a blog post</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dan Guenet</title>
        <meta
          name="description"
          content="I’m Dan Guenet..."
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
                I graduated college with a degree in both Marketing and Computer Science.
                This started me down the path of Marketing Operations. My first big project was
                migrating our company from a legacy CRM to Salesforce. This was the start of 
                making a lot of mistakes and learning a lot of good lessons along the way. 
              </p>
              <p>
                My first mistake was where I found excitement in my work. I thought
                the best part of marketing ops was solving problems in a very complex and creative
                way to make sure I made the most complete solution. I realized that this is
                good in theory, but bad in practice. I created a lot of brittle solutions that
                were hard to debug. 
              </p>
              <p>
                I realized I needed to shift my mindset and find enjoyment in solving problems in
                the most simple way possible. It sounds boring, but there is a lot of satisfaction
                in designing a solution with the constraints of simplicity in mind. I also realized
                that I had learned this lesson back in college in my computer science classes. That
                is when the lightbulb went off that I could apply software engineering principles to 
                marketing operations.
              </p>
              <p>
                At the end of the day, a marketing operations professional is a software engineer 
                for the marketing team that uses no-code or low-code tools to solve problems and build
                systems. I have found much success in applying this mindset to my work and I am excited
                to share that mindset and my other learnings through this blog!
            </p>
            </div>
          </div>
          <div className="sticky top-20 lg:pl-20">
          <div className="space-y-10 mb-10">
            <Newsletter />
          </div>
            <ul role="list">
              <SocialLink href="https://www.linkedin.com/in/danguenet/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com/danguenet/personal-website" icon={GitHubIcon} className="mt-4">
                Check out this website on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:danguenet@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                danguenet@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
