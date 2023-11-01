import { Navbar } from "../../components/ui/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full">
      {children}
    </main>
  );
}

export default MarketingLayout;