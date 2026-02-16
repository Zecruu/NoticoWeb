"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { adminFetch } from "@/lib/admin-fetch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Search, ChevronLeft, ChevronRight, Key } from "lucide-react";

interface UserRow {
  _id: string;
  name: string;
  email: string;
  tier: "free" | "pro";
  createdAt: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [tier, setTier] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [passwordUser, setPasswordUser] = useState<UserRow | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchUsers = useCallback(async () => {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    params.set("limit", "20");
    if (search) params.set("search", search);
    if (tier !== "all") params.set("tier", tier);

    try {
      const res = await adminFetch(`/api/admin/users?${params}`);
      const data = await res.json();
      setUsers(data.users || []);
      setTotalPages(data.totalPages || 1);
      setTotal(data.total || 0);
    } catch {
      // handled by adminFetch
    }
  }, [page, search, tier]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(searchInput);
      setPage(1);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  async function handleResetPassword() {
    if (!passwordUser) return;
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setSaving(true);
    try {
      const res = await adminFetch(`/api/admin/users/${passwordUser._id}/reset-password`, {
        method: "POST",
        body: JSON.stringify({ newPassword }),
      });
      if (res.ok) {
        toast.success(`Password updated for ${passwordUser.name}`);
        setPasswordUser(null);
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to reset password");
      }
    } catch {
      toast.error("Failed to reset password");
    }
    setSaving(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
        <span className="text-sm text-muted-foreground">{total} total</span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          value={tier}
          onValueChange={(v) => {
            setTier(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Filter tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tiers</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/40">
              <th className="text-left p-3 font-medium">Name</th>
              <th className="text-left p-3 font-medium">Email</th>
              <th className="text-left p-3 font-medium">Tier</th>
              <th className="text-left p-3 font-medium">Created</th>
              <th className="text-right p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-muted/30 transition-colors border-t"
              >
                <td className="p-3">
                  <Link
                    href={`/admin/users/${user._id}`}
                    className="font-medium hover:underline"
                  >
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
                <td className="p-3 text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1.5"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPasswordUser(user);
                    }}
                  >
                    <Key className="h-3.5 w-3.5" />
                    Password
                  </Button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-muted-foreground">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}
      <Dialog
        open={!!passwordUser}
        onOpenChange={(open) => {
          if (!open) {
            setPasswordUser(null);
            setNewPassword("");
            setConfirmPassword("");
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Set a new password for <strong>{passwordUser?.name}</strong> ({passwordUser?.email})
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Min 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPasswordUser(null)}>
              Cancel
            </Button>
            <Button onClick={handleResetPassword} disabled={saving || !newPassword}>
              {saving ? "Saving..." : "Change Password"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
