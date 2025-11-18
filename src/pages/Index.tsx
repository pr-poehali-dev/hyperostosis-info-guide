import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://cdn.poehali.dev/projects/44b03578-eeda-4203-b6ee-c6124fd5f552/files/171435b3-9c48-4ae2-abd5-ddb17e898cb8.jpg';
    link.download = 'pamyatka-giperostoz.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Icon name="FileText" size={32} className="text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Информационная памятка
          </h1>
          <p className="text-lg text-muted-foreground">
            Системный диафизарный гиперостоз
          </p>
        </div>

        <Card className="shadow-xl overflow-hidden animate-scale-in mb-6">
          <CardContent className="p-0">
            <img 
              src="https://cdn.poehali.dev/projects/44b03578-eeda-4203-b6ee-c6124fd5f552/files/171435b3-9c48-4ae2-abd5-ddb17e898cb8.jpg"
              alt="Памятка о системном диафизарном гиперостозе"
              className="w-full h-auto print:max-w-full"
            />
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-4 justify-center print:hidden">
          <Button 
            onClick={handleDownload}
            size="lg"
            className="gap-2"
          >
            <Icon name="Download" size={20} />
            Скачать памятку
          </Button>
          <Button 
            onClick={handlePrint}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Icon name="Printer" size={20} />
            Распечатать
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Информационная памятка для населения • Не является медицинской консультацией</p>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
