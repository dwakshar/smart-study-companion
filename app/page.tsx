import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
      <main>
        <h1 className="text-2xl underline">Popular Companions</h1>
          <section className="home-section">
              <CompanionCard
                  id="123"
                  name="Neura the Brainy Explorer"
                  topic="Neural Network of the Brain"
                  subject="science"
                  duration={45}
                  color="#E5D0FF"
              />
              <CompanionCard
                  id="456"
                  name="Countsy the Number Wizard"
                  topic="Derivatives & Integrals"
                  subject="maths"
                  duration={30}
                  color="#FFDA6E"
              />
              <CompanionCard
                  id="789"
                  name="Verba the Vocabulary Builder"
                  topic="language"
                  subject="english"
                  duration={30}
                  color="#BDE7FF"
              />
          </section>
          <section className="home-section">
              <CompanionsList
                  title="Recently completed sessions"
                  companions={recentSessions}
                  className={"w-2/3 max-lg:w-full"}
              />
              <CTA />
          </section>
      </main>
  )
}

export default Page