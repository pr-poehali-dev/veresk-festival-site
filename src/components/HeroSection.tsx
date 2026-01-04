import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/1989b4c7-a676-47ca-b70d-e61ac677d8b2/files/5af977c2-5463-419b-b6aa-0094f7c7c976.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h2 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">Вереск</h2>
        <p className="text-2xl md:text-3xl mb-6 drop-shadow-md">Фолк-фестиваль традиционной музыки</p>
        <p className="text-xl mb-8 drop-shadow-md">20-22 июля 2024 • Заповедная поляна</p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-heather hover:bg-heather/90 text-lg px-8">
            Билеты
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white text-lg px-8">
            Программа
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
