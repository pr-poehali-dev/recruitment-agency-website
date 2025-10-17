import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const articles = [
    {
      id: 1,
      title: 'Тренды рынка труда 2024: что нужно знать работодателю',
      excerpt: 'Анализ основных тенденций и изменений на рынке труда, которые влияют на стратегии подбора персонала.',
      date: '15 октября 2024',
      image: 'https://cdn.poehali.dev/projects/6b311d0d-10f5-4b09-a3a4-0c86ef0d6865/files/d6d3aff4-de89-4267-be7b-587c8796846a.jpg',
      category: 'Рынок труда'
    },
    {
      id: 2,
      title: 'Эффективные методы оценки кандидатов',
      excerpt: 'Проверенные техники и инструменты для качественной оценки профессиональных компетенций соискателей.',
      date: '10 октября 2024',
      image: 'https://cdn.poehali.dev/projects/6b311d0d-10f5-4b09-a3a4-0c86ef0d6865/files/a6ce86f5-bf1c-4896-bb7e-31dca5bbd137.jpg',
      category: 'Подбор персонала'
    },
    {
      id: 3,
      title: 'Адаптация новых сотрудников: лучшие практики',
      excerpt: 'Как организовать процесс онбординга, чтобы новый сотрудник быстро влился в команду и показал результат.',
      date: '5 октября 2024',
      image: 'https://cdn.poehali.dev/projects/6b311d0d-10f5-4b09-a3a4-0c86ef0d6865/files/222d3ee1-6463-4ec4-bde6-f4f21f61f857.jpg',
      category: 'HR-практики'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Briefcase" className="text-primary" size={28} />
              <span className="text-xl font-bold text-foreground">HR Агентство</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'services' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'pricing' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Цены
              </button>
              <button 
                onClick={() => scrollToSection('articles')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'articles' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Статьи
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Контакты
              </button>
            </div>

            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться с нами
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Профессиональный подбор персонала</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Находим лучших специалистов для вашего бизнеса
                </h1>
                <p className="text-lg text-muted-foreground">
                  Более 10 лет опыта в рекрутинге. Индивидуальный подход к каждому клиенту. Гарантия качества подбора.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('services')} className="group">
                    Наши услуги
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                    Оставить заявку
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/6b311d0d-10f5-4b09-a3a4-0c86ef0d6865/files/a6ce86f5-bf1c-4896-bb7e-31dca5bbd137.jpg"
                  alt="HR команда"
                  className="rounded-2xl shadow-2xl w-full animate-scale-in"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <CardTitle>500+ компаний</CardTitle>
                  <CardDescription>Довольных клиентов по всей России</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <CardTitle>95% успеха</CardTitle>
                  <CardDescription>Закрытых вакансий в первый месяц</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <CardTitle>10+ лет опыта</CardTitle>
                  <CardDescription>На рынке рекрутинговых услуг</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="mb-4">О нас</Badge>
              <h2 className="text-3xl md:text-5xl font-bold">Профессиональное кадровое агентство</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы специализируемся на подборе высококвалифицированных специалистов для компаний различного масштаба. 
                Наша команда экспертов использует современные методы оценки кандидатов и глубокое понимание рынка труда, 
                чтобы найти идеальное соответствие между работодателем и соискателем.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                За годы работы мы выстроили обширную базу проверенных специалистов и разработали эффективные процессы подбора, 
                которые экономят время наших клиентов и гарантируют высокое качество кандидатов.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Услуги</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Что мы предлагаем</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр услуг по подбору и оценке персонала для вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Search" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Подбор персонала</CardTitle>
                  <CardDescription className="text-base">
                    Поиск и подбор специалистов любого уровня: от линейного персонала до топ-менеджеров
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Executive Search</CardTitle>
                  <CardDescription className="text-base">
                    Поиск руководителей высшего звена с использованием эксклюзивных каналов привлечения
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="ClipboardCheck" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Оценка персонала</CardTitle>
                  <CardDescription className="text-base">
                    Комплексная оценка компетенций и потенциала сотрудников и кандидатов
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="UserCheck" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Массовый подбор</CardTitle>
                  <CardDescription className="text-base">
                    Быстрый набор большого количества специалистов для масштабных проектов
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="FileText" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">HR-консалтинг</CardTitle>
                  <CardDescription className="text-base">
                    Экспертная помощь в построении HR-процессов и стратегии управления персоналом
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">Аутстаффинг</CardTitle>
                  <CardDescription className="text-base">
                    Предоставление персонала для работы на вашем объекте с нашим юридическим сопровождением
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Цены</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Прозрачное ценообразование</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите оптимальный тариф для вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Базовый</CardTitle>
                  <CardDescription>Для небольших компаний</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">15%</span>
                    <span className="text-muted-foreground ml-2">от годовой зарплаты</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Подбор линейного персонала</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Гарантия 3 месяца</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Базовая оценка кандидатов</span>
                  </div>
                  <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contacts')}>
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-lg scale-105">
                <CardHeader>
                  <Badge className="w-fit mb-2">Популярный</Badge>
                  <CardTitle className="text-2xl">Стандарт</CardTitle>
                  <CardDescription>Для средних компаний</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">20%</span>
                    <span className="text-muted-foreground ml-2">от годовой зарплаты</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Подбор специалистов и менеджеров</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Гарантия 6 месяцев</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Расширенная оценка кандидатов</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Сопровождение в период адаптации</span>
                  </div>
                  <Button className="w-full mt-6" onClick={() => scrollToSection('contacts')}>
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Премиум</CardTitle>
                  <CardDescription>Для крупных компаний</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">25%</span>
                    <span className="text-muted-foreground ml-2">от годовой зарплаты</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Executive Search</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Гарантия 12 месяцев</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Комплексная оценка и ассессмент</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">Персональный менеджер проекта</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-0.5" size={20} />
                    <span className="text-sm">HR-консалтинг</span>
                  </div>
                  <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contacts')}>
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="articles" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Блог</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Статьи о рынке труда</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Экспертные материалы о подборе персонала и управлении командой
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-primary hover:bg-white">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={16} />
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto group/btn">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Контакты</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                        <CardDescription className="text-base">+7 (495) 123-45-67</CardDescription>
                        <CardDescription className="text-base">Пн-Пт: 9:00 - 18:00</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Email</CardTitle>
                        <CardDescription className="text-base">info@hragency.ru</CardDescription>
                        <CardDescription className="text-base">Ответим в течение 24 часов</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                        <CardDescription className="text-base">Москва, Пресненская наб., 12</CardDescription>
                        <CardDescription className="text-base">БЦ "Федерация", офис 2301</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>Заполните форму, и наш менеджер свяжется с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <input 
                        type="text" 
                        placeholder="Иван Петров"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <textarea 
                        placeholder="Расскажите о ваших потребностях"
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Briefcase" size={24} />
                <span className="text-xl font-bold">HR Агентство</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональный подбор персонала с 2014 года
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Подбор персонала</li>
                <li>Executive Search</li>
                <li>Оценка персонала</li>
                <li>HR-консалтинг</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Вакансии</li>
                <li>Блог</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@hragency.ru</li>
                <li>Москва, Пресненская наб., 12</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            <p>© 2024 HR Агентство. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
