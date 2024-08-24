"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

export function Room({ children, params }) {
  return (
    <LiveblocksProvider
      authEndpoint={"/api/liveblocks-auth?roomId="+params?.documentid}
      resolveUsers={async ({ userIds }) => {
        const q = query(
          collection(db, "LoopUsers"),
          where("email", "in", userIds)
        );
        const userList = [];
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
          userList.push(doc.data());
        });

        return userList;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const q = query(
          collection(db, "LoopUsers"),
          where("email", "!=", null)
        );
        let userList = [];
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
          userList.push(doc.data());
        });

        if (text) {
          userList = userList?.filter((user) => user.name.includes(text));
        }
        return userList?.map((user) => user.id);
      }}
    >
      <RoomProvider id={params?.documentid}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
