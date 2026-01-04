import { Button } from "@/components/ui/button";

interface HeaderProps {
  navItems: Array<{ id: string; label: string; icon: string }>;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Header = ({ navItems, activeSection, onNavigate }: HeaderProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-3xl">🌿</div>
            <h1 className="text-2xl font-bold text-heather">Вереск</h1>
          </div>
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className="text-sm"
              >
                {item.label}
              </Button>
            ))}
          </div>
          <Button size="lg" className="bg-heather hover:bg-heather/90">
            Купить билет
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
