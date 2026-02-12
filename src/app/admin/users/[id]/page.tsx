"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { adminFetch } from "@/lib/admin-fetch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { ArrowLeft, Crown, Key, Trash2, Shield } from "lucide-react";

interface UserDetail {
  _id: string;
  name: string;
  email: string;
  tier: "free" | "pro";
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripeCurrentPeriodEnd?: string;
  createdAt: string;
  updatedAt: string;
  hashedPassword?: string;
}

export default function AdminUserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [user, setUser] = useState<UserDetail | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    adminFetch(`/api/admin/users/${id}`)
      .then((res) => res.json())
      .then(setUser)
      .catch(() => toast.error("Failed to load user"));
  }, [id]);

  async function handleToggleTier() {
    if (!user) return;
    const newTier = user.tier === "pro" ? "free" : "pro";
    setLoading(true);
    try {
      const res = await adminFetch(`/api/admin/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ tier: newTier }),
      });
      const updated = await res.json();
      setUser(updated);
      toast.success(`User ${newTier === "pro" ? "upgraded" : "downgraded"} to ${newTier}`);
    } catch {
      toast.error("Failed to update tier");
    }
    setLoading(false);
  }

  async function handleResetPassword() {
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await adminFetch(`/api/admin/users/${id}/reset-password`, {
        method: "POST",
        body: JSON.stringify({ newPassword }),
      });
      if (res.ok) {
        toast.success("Password reset successfully");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to reset password");
      }
    } catch {
      toast.error("Failed to reset password");
    }
    setLoading(false);
  }

  async function handleDelete() {
    setLoading(true);
    try {
      const res = await adminFetch(`/api/admin/users/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("User deleted");
        router.push("/admin/users");
      } else {
        toast.error("Failed to delete user");
      }
    } catch {
      toast.error("Failed to delete user");
    }
    setLoading(false);
    setDeleteOpen(false);
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <Button variant="ghost" onClick={() => router.push("/admin/users")} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to Users
      </Button>

      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <Badge variant={user.tier === "pro" ? "default" : "secondary"}>
          {user.tier}
        </Badge>
      </div>

      {/* User Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-4 w-4" />
            User Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Email</span>
              <p className="font-medium">{user.email}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Tier</span>
              <p className="font-medium capitalize">{user.tier}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Created</span>
              <p className="font-medium">{new Date(user.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Updated</span>
              <p className="font-medium">{new Date(user.updatedAt).toLocaleString()}</p>
            </div>
            {user.stripeCustomerId && (
              <div>
                <span className="text-muted-foreground">Stripe Customer</span>
                <p className="font-medium text-xs font-mono">{user.stripeCustomerId}</p>
              </div>
            )}
            {user.stripeCurrentPeriodEnd && (
              <div>
                <span className="text-muted-foreground">Billing Period End</span>
                <p className="font-medium">
                  {new Date(user.stripeCurrentPeriodEnd).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Tier Management */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Crown className="h-4 w-4" />
            Tier Management
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-sm">
              Current tier: <span className="font-bold capitalize">{user.tier}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {user.tier === "free"
                ? "Upgrade to pro for cloud sync, backups, and sharing"
                : "Downgrade to free tier"}
            </p>
          </div>
          <Button
            onClick={handleToggleTier}
            disabled={loading}
            variant={user.tier === "free" ? "default" : "outline"}
          >
            {user.tier === "free" ? "Upgrade to Pro" : "Downgrade to Free"}
          </Button>
        </CardContent>
      </Card>

      {/* Reset Password */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Key className="h-4 w-4" />
            Reset Password
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
          <Button onClick={handleResetPassword} disabled={loading || !newPassword}>
            Reset Password
          </Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-lg text-destructive flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Delete this user</p>
              <p className="text-xs text-muted-foreground">
                Permanently remove this user and all their data. This cannot be undone.
              </p>
            </div>
            <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  Delete User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete User</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete <strong>{user.name}</strong> ({user.email})?
                    This will permanently remove their account, notes, folders, and shared content.
                  </DialogDescription>
                </DialogHeader>
                <Separator />
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDeleteOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleDelete} disabled={loading}>
                    {loading ? "Deleting..." : "Delete Permanently"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
