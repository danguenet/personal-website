import Head from 'next/head'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Newsletter } from '@/components/Newsletter'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read post</Card.Cta>
    </Card>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Dan Guenet - Senior Manager of Revenue Operations and Amateur Developer
        </title>
        <meta
          name="description"
          content="Hello there, I'm Dan Guenet, a revenue operations expert who also enjoys programming. Throughout my career, I've gained valuable insights about Revenue Operations by integrating software engineering principles into my work. Now, I want to share my experiences and knowledge with others to help them excel in their careers."
        />
      </Head>
      <Container className="mt-12 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Senior Manager of Revenue Operations and Amateur Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Hello there, I&apos;m Dan Guenet, a revenue operations expert who also enjoys programming. 
          Throughout my career, I&apos;ve gained valuable insights about Revenue Operations by integrating 
          software engineering principles into my work. Now, I want to share my experiences and knowledge 
          with others to help them excel in their careers.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Latest Blog Posts</h2>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter 
            CTA="Stay up to date"
            description="Get notified when I publish something new, and unsubscribe at any time."
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
