"use client";

import { usePathname } from "next/navigation";
import { AdminAuthProvider } from "@/components/admin/admin-auth-context";
import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <AdminAuthProvider>
      {isLoginPage ? (
        children
      ) : (
        <AdminGuard>
          <div className="flex h-screen overflow-hidden">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              {children}
            </main>
          </div>
        </AdminGuard>
      )}
    </AdminAuthProvider>
  );
}
