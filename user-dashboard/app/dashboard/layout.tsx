import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 pt-20 md:pt-10">{children}</main>
    </div>
  );
}
