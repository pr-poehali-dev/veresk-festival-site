import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "О фестивале", icon: "Info" },
    { id: "history", label: "История", icon: "BookOpen" },
    { id: "program", label: "Программа", icon: "Calendar" },
    { id: "artists", label: "Участники", icon: "Users" },
    { id: "tickets", label: "Билеты", icon: "Ticket" },
    { id: "gallery", label: "Галерея", icon: "Image" },
    { id: "news", label: "Новости", icon: "Newspaper" },
    { id: "volunteers", label: "Волонтёрам", icon: "Heart" },
    { id: "press", label: "СМИ", icon: "Mic" },
    { id: "contacts", label: "Контакты", icon: "MapPin" },
  ];

  const programSchedule = [
    { time: "12:00", stage: "Главная сцена", event: "Открытие фестиваля" },
    { time: "13:00", stage: "Лесная поляна", event: "Северные напевы" },
    { time: "15:00", stage: "Главная сцена", event: "Казачьи песни" },
    { time: "17:00", stage: "Этно-шатёр", event: "Мастер-класс по гуслям" },
    { time: "19:00", stage: "Главная сцена", event: "Гала-концерт" },
    { time: "21:00", stage: "Костровая площадка", event: "Хороводы под звёздами" },
  ];

  const artists = [
    { name: "Ансамбль 'Купала'", genre: "Славянский фольклор", region: "Брянская область" },
    { name: "Группа 'Северные родники'", genre: "Поморские песни", region: "Архангельск" },
    { name: "Ансамбль 'Станица'", genre: "Казачьи песни", region: "Кубань" },
    { name: "Этно-группа 'Веретено'", genre: "Аутентичный фольклор", region: "Рязанская область" },
  ];

  const newsItems = [
    {
      date: "15 июня 2024",
      title: "Объявлена программа фестиваля",
      text: "Более 30 коллективов из 15 регионов России выступят на трёх сценах",
    },
    {
      date: "10 июня 2024",
      title: "Открыта регистрация волонтёров",
      text: "Приглашаем всех желающих помочь в организации фестиваля",
    },
    {
      date: "1 июня 2024",
      title: "Старт продажи билетов",
      text: "Билеты доступны онлайн и в кассах партнёров",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand/30 to-background">
      <Header 
        navItems={navItems} 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      <HeroSection />
      <ContentSections 
        programSchedule={programSchedule}
        artists={artists}
        newsItems={newsItems}
      />
      <Footer />
    </div>
  );
};

export default Index;
