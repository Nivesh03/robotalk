import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions, getBookmarkedCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";
  const bookmarkedCompanions = await getBookmarkedCompanions(userId);
  const bookmarkedIds = new Set(bookmarkedCompanions.map((c: Companion) => c.id));
  const companions = await getAllCompanions({ subject: subject, topic: topic });
  return (
    <main>
      <section className="flex justify-center gap-4 max-sm:flex-col">
        <h1>Companions</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            bookmark={bookmarkedIds.has(companion.id)}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
