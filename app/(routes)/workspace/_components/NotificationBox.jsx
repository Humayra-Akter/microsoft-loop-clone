"use client";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useInboxNotifications,
  useUpdateRoomNotificationSettings,
} from "@liveblocks/react/suspense";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";
import { useUnreadInboxNotificationsCount } from "@liveblocks/react";

function NotificationBox({ children }) {
  const { inboxNotifications } = useInboxNotifications();
  const updateRoomNotificationSetting = useUpdateRoomNotificationSettings();
  const { count, error, isLoading } = useUnreadInboxNotificationsCount();

  useEffect(() => {
    updateRoomNotificationSetting({ threads: "all" });
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex gap-1">
          {children}
          <span className="p-1 rounded-full bg-primary text-white text-[3px]">
            {" "}
            {count}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className={"w-[150px]"}>
        <InboxNotificationList>
          {inboxNotifications?.map((inboxNotification) => (
            <InboxNotification
              key={inboxNotification.id}
              inboxNotification={inboxNotification}
            />
          ))}
        </InboxNotificationList>
      </PopoverContent>
    </Popover>
  );
}

export default NotificationBox;
