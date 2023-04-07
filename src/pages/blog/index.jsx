import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Newsletter } from '@/components/Newsletter'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>The RevOps Handbook - Dan Guenet</title>
        <meta
          name="description"
          content="In the world of revenue operations, forming your opinions can help you advance your career. That's why I created this blog - to share my own insights and inspire others to think critically about important topics. By developing well-informed opinions, you can differentiate yourself as a revenue operations professional and take your skills to the next level."
        />
      </Head>
      <SimpleLayout
        title="The RevOps Handbook"
        intro="In the world of revenue operations, forming your opinions can help you advance your career. That's why I created this blog - to share my own insights and inspire others to think critically about important topics. By developing well-informed opinions, you can differentiate yourself as a revenue operations professional and take your skills to the next level."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <div class="md:flex md:flex-row md:space-x-6">
          <div class="md:w-3/4">
            <div class="space-y-10 mt-20">
              <Newsletter 
                CTA="Don't miss a blog post"
                description="Get notified when I publish something new, and unsubscribe at any time."
              />
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
