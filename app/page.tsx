import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getBookmarkedCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

const Page = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions(10);
  const bookmarkedCompanions = await getBookmarkedCompanions(userId);

  const bookmarkedIds = new Set(bookmarkedCompanions.map((c: Companion) => c.id));

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            bookmark={bookmarkedIds.has(companion.id)}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessionCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
