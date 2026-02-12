"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { adminFetch } from "@/lib/admin-fetch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, User, CalendarPlus, CalendarDays, CalendarRange } from "lucide-react";

interface Stats {
  totalUsers: number;
  proUsers: number;
  freeUsers: number;
  newUsersToday: number;
  newUsersThisWeek: number;
  newUsersThisMonth: number;
}

interface UserRow {
  _id: string;
  name: string;
  email: string;
  tier: "free" | "pro";
  createdAt: string;
}

const statCards = [
  { key: "totalUsers" as const, label: "Total Users", icon: Users, color: "text-blue-500" },
  { key: "proUsers" as const, label: "Pro Users", icon: Crown, color: "text-yellow-500" },
  { key: "freeUsers" as const, label: "Free Users", icon: User, color: "text-muted-foreground" },
  { key: "newUsersToday" as const, label: "New Today", icon: CalendarPlus, color: "text-green-500" },
  { key: "newUsersThisWeek" as const, label: "This Week", icon: CalendarDays, color: "text-purple-500" },
  { key: "newUsersThisMonth" as const, label: "This Month", icon: CalendarRange, color: "text-orange-500" },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentUsers, setRecentUsers] = useState<UserRow[]>([]);

  useEffect(() => {
    adminFetch("/api/admin/stats")
      .then((res) => res.json())
      .then(setStats)
      .catch(() => {});

    adminFetch("/api/admin/users?limit=10")
      .then((res) => res.json())
      .then((data) => setRecentUsers(data.users || []))
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((card) => (
          <Card key={card.key} className="hover:border-primary/40 hover:shadow-md transition-all">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{card.label}</p>
                <p className="text-2xl font-bold">
                  {stats ? stats[card.key] : "..."}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Signups</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/40">
                  <th className="text-left p-3 font-medium">Name</th>
                  <th className="text-left p-3 font-medium">Email</th>
                  <th className="text-left p-3 font-medium">Tier</th>
                  <th className="text-left p-3 font-medium">Created</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-muted/30 transition-colors cursor-pointer border-t"
                  >
                    <td className="p-3">
                      <Link href={`/admin/users/${user._id}`} className="hover:underline">
                        {user.name}
                      </Link>
                    </td>
                    <td className="p-3 text-muted-foreground">{user.email}</td>
                    <td className="p-3">
                      <Badge variant={user.tier === "pro" ? "default" : "secondary"}>
                        {user.tier}
                      </Badge>
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {recentUsers.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
