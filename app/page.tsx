import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard id="123" name="Neura" topic="quantum science" subject="science" duration={45} color="#792caf" />
        <CompanionCard id="111" name="Plura" topic="calculus" subject="mathematics" duration={60} color="#16a26a" />
        <CompanionCard id="011" name="Verbanacular" topic="language" subject="literature" duration={35} color="#5254cf" />
      </section>
      <section className='home-section'>
        <CompanionsList
          title = "Recently Completed Sessions"
          companions = {recentSessions}
          classNames = "w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page