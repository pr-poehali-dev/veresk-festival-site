const Footer = () => {
  return (
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
  );
};

export default Footer;
