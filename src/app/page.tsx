import { ModeToggle } from "~/components/ToggleTheme";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <ModeToggle />
        <h1>Title Test</h1>
      </main>
    </HydrateClient>
  );
}
