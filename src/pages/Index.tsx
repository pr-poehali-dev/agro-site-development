import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [hectares, setHectares] = useState([500]);
  const [fuelSavings, setFuelSavings] = useState(15);

  const calculateROI = () => {
    const avgFuelCost = 60;
    const fuelPerHectare = 8;
    const annualSavings = hectares[0] * fuelPerHectare * (fuelSavings / 100) * avgFuelCost;
    const systemCost = 850000;
    const paybackMonths = Math.round((systemCost / annualSavings) * 12);
    return { annualSavings, paybackMonths };
  };

  const { annualSavings, paybackMonths } = calculateROI();

  const products = [
    {
      brand: 'Navmopo',
      model: 'NV-3000 Pro',
      price: '850 000 ₽',
      accuracy: '2.5 см',
      features: ['RTK-сигнал', 'Автоповорот', 'Картирование полей', 'Работа 24/7'],
      image: 'https://cdn.poehali.dev/projects/af26a07c-00a4-4510-afe9-ac92b8c9cadf/files/45596cfa-9dba-41f6-b672-c70e33860062.jpg'
    },
    {
      brand: 'Allynav',
      model: 'AN-450 Elite',
      price: '720 000 ₽',
      accuracy: '3 см',
      features: ['GPS/ГЛОНАСС', 'Параллельное вождение', 'Контроль высева', 'Простая установка'],
      image: 'https://cdn.poehali.dev/projects/af26a07c-00a4-4510-afe9-ac92b8c9cadf/files/bedb5cb8-3f30-4c5f-bd34-2e2974b944c9.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Иван Петрович',
      farm: 'КФХ "Золотое поле", 2500 га',
      text: 'Установили Navmopo на три трактора. Экономия топлива за сезон составила более 400 000 рублей. Окупилось за 1.5 года.',
      rating: 5
    },
    {
      name: 'Сергей Николаев',
      farm: 'Агрохолдинг "Урожай", 5000 га',
      text: 'Allynav показал себя отлично. Механизаторы работают в любую погоду, даже ночью. Производительность выросла на 30%.',
      rating: 5
    },
    {
      name: 'Александр Федоров',
      farm: 'ООО "Нива", 1200 га',
      text: 'Сначала сомневался, но после первого сезона понял — это необходимость. Точность обработки и экономия ресурсов впечатляют.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Tractor" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">Агроточка</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/af26a07c-00a4-4510-afe9-ac92b8c9cadf/files/bf42d738-efc7-4b61-a3f8-3c49cfe2de3d.jpg)' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">Официальный дилер</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary leading-tight">
              Автопилоты для вашей техники
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Навигационные системы Navmopo и Allynav — точность до 2.5 см, экономия топлива до 20%, окупаемость за 1-2 сезона
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Выбрать систему
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать выгоду
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center animate-scale-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Target" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle>Точность 2.5 см</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">RTK-навигация обеспечивает сантиметровую точность вождения</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Fuel" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle>Экономия до 20%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Снижение расхода топлива, удобрений и семян за счёт точных проходов</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle>Работа 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Обработка полей в любое время суток и в любую погоду</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Каталог автопилотов</h2>
            <p className="text-xl text-muted-foreground">Навигационные системы для тракторов, комбайнов и опрыскивателей</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.model}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{product.brand}</Badge>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <CardTitle className="text-2xl">{product.model}</CardTitle>
                  <CardDescription className="text-lg">Точность: {product.accuracy}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Отзывы фермеров</h2>
            <p className="text-xl text-muted-foreground">Реальный опыт использования автопилотов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.farm}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <Icon name="Calculator" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl">Калькулятор окупаемости</CardTitle>
                <CardDescription className="text-lg">Рассчитайте экономическую выгоду от установки автопилота</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-lg mb-4 block">Площадь обработки: {hectares[0]} га</Label>
                  <Slider 
                    value={hectares} 
                    onValueChange={setHectares}
                    min={100}
                    max={5000}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>100 га</span>
                    <span>5000 га</span>
                  </div>
                </div>

                <div>
                  <Label className="text-lg mb-4 block">Экономия топлива: {fuelSavings}%</Label>
                  <Slider 
                    value={[fuelSavings]} 
                    onValueChange={(val) => setFuelSavings(val[0])}
                    min={10}
                    max={25}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>10%</span>
                    <span>25%</span>
                  </div>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Годовая экономия:</span>
                    <span className="text-2xl font-bold text-secondary">{annualSavings.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Окупаемость:</span>
                    <span className="text-2xl font-bold text-primary">{paybackMonths} мес.</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  * Расчёт приблизительный. Точные значения зависят от культур, типа техники и условий работы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl">Получить консультацию</CardTitle>
                <CardDescription className="text-lg">
                  Оставьте заявку, и наш специалист свяжется с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванович" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="area">Площадь хозяйства (га)</Label>
                  <Input id="area" type="number" placeholder="500" />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea id="message" placeholder="Интересует установка на 2 трактора John Deere..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Tractor" size={32} />
                <h3 className="text-xl font-bold">Агроточка</h3>
              </div>
              <p className="opacity-90">Официальный дилер систем точного земледелия Navmopo и Allynav</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (800) 555-35-35
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@agrotochka.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Краснодар, ул. Полевая, 15
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 opacity-90">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб: 9:00 - 18:00</p>
                <p>Вс: 10:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-75">
            <p>&copy; 2024 Агроточка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
