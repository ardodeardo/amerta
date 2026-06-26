import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      <main className="md:py-4 md:space-y-4">{children}</main>
      <Footer></Footer>
    </>
  );
}
