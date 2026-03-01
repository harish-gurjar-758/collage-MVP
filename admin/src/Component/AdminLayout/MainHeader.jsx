import { Avatar, Badge } from "antd";
import React from "react";
import { NotificationOutlined, UserOutlined } from "@ant-design/icons";

export default function MainHeader() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3">

      <h2 className="text-xl font-semibold">Welcome Admin</h2>

      <div className="flex items-center gap-5">

        {/* Notification Icon */}
        <Badge
          count='11'
          size="small"
        >
          <NotificationOutlined
            style={{ fontSize: "20px", cursor: "pointer", color: "white" }}
          />
        </Badge>

        {/* User Avatar */}
        <Avatar
          size={40}
          icon={<UserOutlined />}
          className="cursor-pointer text-white"
        />

      </div>
    </div>
  );
}