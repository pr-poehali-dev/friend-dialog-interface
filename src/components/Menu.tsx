import { Home, Settings, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Menu = () => {
  return (
    <div className="h-full w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Главное меню</h2>
      </div>
      
      <nav className="space-y-2 flex-1">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-5 w-5" />
          Главная
        </Button>
        
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-5 w-5" />
          Друзья
        </Button>
        
        <Button variant="ghost" className="w-full justify-start">
          <Mail className="mr-2 h-5 w-5" />
          Сообщения
        </Button>
        
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-5 w-5" />
          Настройки
        </Button>
      </nav>
      
      <div className="mt-auto">
        <div className="mb-4">
          <div className="text-sm text-gray-500">Баланс</div>
          <div className="text-xl font-bold flex items-center">
            1000 ₽ <span className="ml-2">↑</span>
          </div>
        </div>
        
        <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
          Пополнить
        </Button>
      </div>
    </div>
  );
};

export default Menu;
