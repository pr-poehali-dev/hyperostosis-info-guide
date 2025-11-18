import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Icon name="Activity" size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Системный диафизарный гиперостоз
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Информационная памятка для населения о причинах и факторах риска развития заболевания
          </p>
        </div>

        <Alert className="mb-8 border-primary/20 bg-primary/5">
          <Icon name="Info" className="h-5 w-5 text-primary" />
          <AlertDescription className="text-base ml-2">
            Данная информация носит ознакомительный характер. При появлении симптомов обратитесь к врачу.
          </AlertDescription>
        </Alert>

        <div className="grid gap-8 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                  <Icon name="FileSearch" size={24} />
                </div>
                <CardTitle className="text-3xl">Причины развития заболевания</CardTitle>
              </div>
              <CardDescription className="text-base">
                Основные этиологические факторы системного диафизарного гиперостоза
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <Icon name="Dna" size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Генетическая предрасположенность</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Заболевание имеет наследственный характер с аутосомно-доминантным типом передачи. 
                      Мутации в гене COL6A1 и других генах коллагенового матрикса могут приводить к 
                      патологическому костеобразованию.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <Icon name="Activity" size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Нарушение метаболизма костной ткани</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Дисбаланс процессов костного ремоделирования с преобладанием остеобластической активности. 
                      Увеличенная продукция костного матрикса приводит к утолщению кортикального слоя длинных костей.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <Icon name="TrendingUp" size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Эндокринные нарушения</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Изменения в системе паратиреоидного гормона, витамина D и других регуляторов кальциевого обмена. 
                      Повышенная чувствительность остеобластов к анаболическим стимулам.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <Icon name="Flame" size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Хронические воспалительные процессы</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Длительное субклиническое воспаление в периостальных тканях может стимулировать 
                      избыточное костеобразование и оссификацию мягких тканей.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <CardHeader className="bg-accent/5 border-b border-accent/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground">
                  <Icon name="AlertTriangle" size={24} />
                </div>
                <CardTitle className="text-3xl">Факторы риска</CardTitle>
              </div>
              <CardDescription className="text-base">
                Условия и обстоятельства, повышающие вероятность развития заболевания
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-base px-3 py-1 bg-accent/10 text-accent border-accent/20">
                      Демографические факторы
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="User" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Возраст старше 40 лет</p>
                        <p className="text-sm text-muted-foreground">Наиболее часто манифестирует в среднем возрасте</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="Users" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Мужской пол</p>
                        <p className="text-sm text-muted-foreground">Соотношение мужчины/женщины составляет 2:1</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-base px-3 py-1 bg-accent/10 text-accent border-accent/20">
                      Медицинские факторы
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="Stethoscope" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Сахарный диабет 2 типа</p>
                        <p className="text-sm text-muted-foreground">Метаболические нарушения повышают риск</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="Weight" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Избыточная масса тела</p>
                        <p className="text-sm text-muted-foreground">ИМТ более 30 увеличивает нагрузку на скелет</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="Activity" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Эндокринопатии</p>
                        <p className="text-sm text-muted-foreground">Дисфункция щитовидной и паращитовидных желез</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="Bone" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Остеоартроз</p>
                        <p className="text-sm text-muted-foreground">Дегенеративные заболевания суставов</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-base px-3 py-1 bg-accent/10 text-accent border-accent/20">
                      Образ жизни
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="Dumbbell" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Тяжелый физический труд</p>
                        <p className="text-sm text-muted-foreground">Хроническая механическая перегрузка костей</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                      <Icon name="FileWarning" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Гиподинамия</p>
                        <p className="text-sm text-muted-foreground">Недостаточная физическая активность</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-base px-3 py-1 bg-accent/10 text-accent border-accent/20">
                      Семейный анамнез
                    </Badge>
                  </div>
                  <div className="flex gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Heart" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Наследственная отягощенность</p>
                      <p className="text-sm text-muted-foreground">
                        Наличие заболевания у близких родственников увеличивает риск в 3-5 раз
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                  <Icon name="Phone" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Важно помнить</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  При появлении болей в костях, ограничении подвижности суставов или других тревожных симптомов 
                  необходимо обратиться к врачу-ревматологу или ортопеду для проведения диагностики.
                </p>
                <p className="text-sm text-muted-foreground">
                  Ранняя диагностика и своевременное лечение помогают предотвратить осложнения и улучшить качество жизни.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Информационная памятка • Для общего ознакомления • Не является медицинской консультацией</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
