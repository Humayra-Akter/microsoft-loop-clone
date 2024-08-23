import { currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCK_SK,
});

export async function POST(request) {
  const user = await currentUser();
  const { room } = await request.json();

  const session = liveblocks.prepareSession(
    user?.primaryEmailAddress?.emailAddress
  );

  session.allow(room, session?.FULL_ACCESS);

  // Authorize the user and return the result
  const { status, body } = await session.authorize();
  return new Response(body, { status });
}
