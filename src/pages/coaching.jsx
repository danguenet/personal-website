import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { CoachingForm } from '@/components/CoachingForm'

function Group({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-12">
        {children}
      </ul>
    </Section>
  )
}

function Item({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Coaching - Dan Guenet</title>
        <meta
          name="description"
          content="In operations, many lack a manager with a relevant background. By convincing your company to fund a coach, you can boost your career and create amazing value for the company."
        />
      </Head>
      <SimpleLayout
        title="Elevate your career and drive results with coaching."
        intro="In operations, many lack a manager with a relevant background. By convincing your company to fund a coach, you can boost your career and create amazing value for the company. I will help you solidify the operations vision at your company and help you see around the cornerrs."
      >
        <div className="space-y-20 mt-20">
          <Group title="Coaching">
            <Item title="Weekly meetings">
              Every week, we will meet for 1 hour to discuss the projects you are working 
              and planning to work on. We will break them down to identify what the intended 
              outcomes are. Then we will strategize how this should be achieved. The key benefit
              is you will do it right the first time which will save you time and the your company
              money.
            </Item>
            <Item title="Dedicated slack support">
              The slack support is for you to ask questions, get feedback, and bounce ideas off of me.
              The meetings are key for setting you up on your projects, but there will always be detail
              questions that come up throughout the week and I want to be there to help you.  
            </Item>
            <Item title="Real value">
              Operations is one of those fields where companies faces similar challenges. And 
              each challenge can be solved in a nearly infinite amount of ways. Knowing which problems
              will arise and the best ways to prepare for them and solve them is invaluable. I can confidently
              say that this service has a high ROI through better decision making and prioritization of your 
              operations work.
            </Item>
          </Group>
          <Group title="Pricing">
            <Item title="$200 a week">
              I charge $200 a week for the 1 hour of coaching and the slack support. This is an ideal
              setup for anyone who doesn't have an operations mentor at their company. You and your 
              company will instantly see the benefits. Systems and projects will be done in a proven 
              way that delivers value. Time won't have to be wasted researching or worse, through trial 
              and error. 
            </Item>
            <Item title="2 free weeks">
              Who doesn't love a free trial. I can write all the copy I want on this page, but honestly
              copy writing has never been my strong suit. Lucky for you and me, I know I my strong suit
              is operations and helping others. So I will showcase my value with action.
            </Item>
            <Item title="Cancel anytime">
              Who wants to be locked into a contract? Not me. Cancel anytime you want. You may end up 
              hiring a manager who has relevant experience and I don't want to be a redundant expense.
            </Item>
          </Group>
        </div>
        <div className="mt-20 md:mt-32 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:order-first lg:row-span-2 lg:mx-8">
                <blockquote className="text-center text-zinc-800 dark:text-zinc-100 text-lg font-thin leading-8">
                    <p>
                        "I need to write a super long example quote to test out the functionality of this page. 
                        Wow I am running out of words to type. I hope this is long enough."
                    </p>
                </blockquote>
                <figcaption className="mt-3 text-center text-base text-zinc-800 dark:text-zinc-100">
                    <p className="font-semibold">John Doe</p>
                    <p className="mt-1 font-thin">Previous Direct Report</p>
                </figcaption>
            </div>
            <div className="lg:mx-8">
              <blockquote className="text-center text-zinc-800 dark:text-zinc-100 text-lg font-thin leading-8">
                    <p>
                        "I need to write a super long example quote to test out the functionality of this page. 
                        Wow I am running out of words to type. I hope this is long enough."
                    </p>
                </blockquote>
                <figcaption className="mt-3 text-center text-base text-zinc-800 dark:text-zinc-100">
                    <p className="font-semibold">John Doe</p>
                    <p className="mt-1 font-thin">Director of Revenue Operations</p>
                </figcaption>
            </div>

        </div>
        <div className="mt-20 sm:w-3/4 mx-auto">
            <CoachingForm 
                CTA="Ready to get started?"
                description="Lets get the conversation going. Feel free to reach out with questions or to schedule a call."
                />
        </div>
      </SimpleLayout>
    </>
  )
}
