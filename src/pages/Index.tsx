import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

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
                  onClick={() => scrollToSection(item.id)}
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

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl animate-fade-in-up">
          <h2 className="text-5xl font-bold text-center mb-8 text-heather">О фестивале</h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              <strong>Вереск</strong> — это уникальное событие, где звучат аутентичные народные песни, играют традиционные
              инструменты, а атмосфера наполнена духом вековых традиций. Мы собираем лучших исполнителей фольклорной
              музыки из разных уголков России и соседних стран.
            </p>
            <p className="text-lg leading-relaxed">
              Фестиваль проходит на живописной природной территории, где каждый гость может погрузиться в мир народной
              культуры, поучаствовать в мастер-классах, попробовать традиционные угощения и провести три незабываемых дня
              среди единомышленников.
            </p>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-sand/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-forest">История фестиваля</h2>
          <div className="space-y-8">
            <Card className="border-l-4 border-l-heather">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-heather">2010</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Первый фестиваль</h3>
                    <p className="text-muted-foreground">
                      Всё началось с небольшого сбора энтузиастов — 8 коллективов и 200 зрителей. Первый "Вереск" показал,
                      что традиционная культура жива и востребована.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-forest">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-forest">2015</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Расширение</h3>
                    <p className="text-muted-foreground">
                      Фестиваль вырос до 3 дней и 20 коллективов. Появились мастер-классы по народным ремёслам и
                      инструментам. Количество гостей превысило 2000 человек.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-terracotta">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-terracotta">2024</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сегодня</h3>
                    <p className="text-muted-foreground">
                      "Вереск" стал одним из крупнейших фолк-фестивалей региона. Более 30 коллективов, 5 сцен, десятки
                      мастер-классов и более 5000 гостей со всей страны.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-heather">Программа фестиваля</h2>
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1">20 июля (Пт)</TabsTrigger>
              <TabsTrigger value="day2">21 июля (Сб)</TabsTrigger>
              <TabsTrigger value="day3">22 июля (Вс)</TabsTrigger>
            </TabsList>
            <TabsContent value="day1">
              <div className="space-y-4">
                {programSchedule.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" className="text-heather" size={20} />
                          <span className="font-semibold text-lg">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" className="text-forest" size={20} />
                          <span className="text-muted-foreground">{item.stage}</span>
                        </div>
                        <div className="font-medium">{item.event}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="day2">
              <div className="text-center py-12 text-muted-foreground">
                Программа второго дня будет объявлена позже
              </div>
            </TabsContent>
            <TabsContent value="day3">
              <div className="text-center py-12 text-muted-foreground">
                Программа третьего дня будет объявлена позже
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="artists" className="py-20 px-4 bg-sand/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-forest">Участники</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artists.map((artist, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3 text-heather">{artist.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Music" className="text-forest" size={18} />
                      <span className="text-muted-foreground">{artist.genre}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-terracotta" size={18} />
                      <span className="text-muted-foreground">{artist.region}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tickets" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-heather">Билеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-forest hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Один день</h3>
                <div className="text-4xl font-bold text-forest mb-6">800₽</div>
                <ul className="space-y-2 text-left mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-forest mt-1" size={18} />
                    <span>Доступ на все площадки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-forest mt-1" size={18} />
                    <span>Участие в мастер-классах</span>
                  </li>
                </ul>
                <Button className="w-full bg-forest hover:bg-forest/90">Купить</Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-heather hover:shadow-xl transition-shadow scale-105">
              <CardContent className="pt-8 text-center">
                <div className="bg-heather text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                  Популярно
                </div>
                <h3 className="text-2xl font-semibold mb-4">Три дня</h3>
                <div className="text-4xl font-bold text-heather mb-6">2000₽</div>
                <ul className="space-y-2 text-left mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-heather mt-1" size={18} />
                    <span>Доступ на все площадки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-heather mt-1" size={18} />
                    <span>Участие в мастер-классах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-heather mt-1" size={18} />
                    <span>Место в кемпинге</span>
                  </li>
                </ul>
                <Button className="w-full bg-heather hover:bg-heather/90">Купить</Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-terracotta hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">VIP</h3>
                <div className="text-4xl font-bold text-terracotta mb-6">5000₽</div>
                <ul className="space-y-2 text-left mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-terracotta mt-1" size={18} />
                    <span>Все преимущества билета на 3 дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-terracotta mt-1" size={18} />
                    <span>VIP-зона с комфортом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-terracotta mt-1" size={18} />
                    <span>Питание включено</span>
                  </li>
                </ul>
                <Button className="w-full bg-terracotta hover:bg-terracotta/90">Купить</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-sand/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-forest">Галерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://cdn.poehali.dev/projects/1989b4c7-a676-47ca-b70d-e61ac677d8b2/files/5af977c2-5463-419b-b6aa-0094f7c7c976.jpg"
                alt="Фестиваль"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://cdn.poehali.dev/projects/1989b4c7-a676-47ca-b70d-e61ac677d8b2/files/5fda315e-9fb7-41c9-9087-6ca400219236.jpg"
                alt="Вереск"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img
                src="https://cdn.poehali.dev/projects/1989b4c7-a676-47ca-b70d-e61ac677d8b2/files/774b618a-fffc-4bb4-88ca-72e7c8190e62.jpg"
                alt="Инструменты"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-heather">Новости</h2>
          <div className="space-y-6">
            {newsItems.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Newspaper" className="text-heather mt-1" size={24} />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-2">{news.date}</div>
                      <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                      <p className="text-muted-foreground">{news.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteers" className="py-20 px-4 bg-heather/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Heart" className="mx-auto mb-6 text-heather" size={48} />
          <h2 className="text-5xl font-bold mb-8 text-heather">Волонтёрам</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Присоединяйтесь к команде "Вереска"! Мы ищем энтузиастов, готовых помочь в организации фестиваля. Волонтёры
            получают бесплатный вход, питание, фирменную футболку и незабываемый опыт работы в дружной команде.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Icon name="Users" className="text-forest mb-3" size={32} />
              <h3 className="font-semibold mb-2">Работа с гостями</h3>
              <p className="text-sm text-muted-foreground">Помощь в навигации и информировании посетителей</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Package" className="text-forest mb-3" size={32} />
              <h3 className="font-semibold mb-2">Логистика</h3>
              <p className="text-sm text-muted-foreground">Помощь в установке и организации площадок</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Camera" className="text-forest mb-3" size={32} />
              <h3 className="font-semibold mb-2">Медиа</h3>
              <p className="text-sm text-muted-foreground">Фото и видеосъёмка событий фестиваля</p>
            </div>
          </div>
          <Button size="lg" className="bg-heather hover:bg-heather/90">
            Стать волонтёром
          </Button>
        </div>
      </section>

      <section id="press" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Mic" className="mx-auto mb-6 text-terracotta" size={48} />
          <h2 className="text-5xl font-bold mb-8 text-terracotta">СМИ и блогерам</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Мы приглашаем журналистов, блогеров и представителей СМИ для освещения фестиваля. Для аккредитации
            заполните форму заявки. Аккредитованные представители СМИ получают специальный пресс-пакет, доступ на все
            площадки и зоны для интервью с участниками.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <Icon name="FileText" className="mx-auto mb-4 text-forest" size={32} />
                <h3 className="font-semibold mb-2">Пресс-релизы</h3>
                <p className="text-sm text-muted-foreground mb-4">Актуальная информация о фестивале</p>
                <Button variant="outline" size="sm">
                  Скачать
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Icon name="Image" className="mx-auto mb-4 text-forest" size={32} />
                <h3 className="font-semibold mb-2">Медиа-кит</h3>
                <p className="text-sm text-muted-foreground mb-4">Логотипы, фото и брендбук</p>
                <Button variant="outline" size="sm">
                  Скачать
                </Button>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="bg-terracotta hover:bg-terracotta/90">
            Подать заявку на аккредитацию
          </Button>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-sand/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-forest">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="MapPin" className="text-heather" size={24} />
                  Место проведения
                </h3>
                <p className="text-muted-foreground">Заповедная поляна</p>
                <p className="text-muted-foreground">Смоленская область, 50 км от города</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Phone" className="text-heather" size={24} />
                  Телефон
                </h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Ежедневно с 10:00 до 20:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Mail" className="text-heather" size={24} />
                  Email
                </h3>
                <p className="text-muted-foreground">info@veresк-fest.ru</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Share2" className="text-heather" size={24} />
                  Социальные сети
                </h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-forest text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🌿</div>
                <h3 className="text-2xl font-bold">Вереск</h3>
              </div>
              <p className="text-sand">Фолк-фестиваль традиционной музыки и культуры</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sand">
                <li><a href="#about" className="hover:text-white transition-colors">О фестивале</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Программа</a></li>
                <li><a href="#tickets" className="hover:text-white transition-colors">Билеты</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Участие</h4>
              <ul className="space-y-2 text-sand">
                <li><a href="#volunteers" className="hover:text-white transition-colors">Волонтёрам</a></li>
                <li><a href="#press" className="hover:text-white transition-colors">СМИ</a></li>
                <li><a href="#artists" className="hover:text-white transition-colors">Участникам</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sand/30 pt-8 text-center text-sand">
            <p>© 2024 Фестиваль "Вереск". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
