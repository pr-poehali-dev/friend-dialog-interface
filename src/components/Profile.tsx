import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import QRCode from "./QRCode";

const Profile = () => {
  return (
    <div className="h-full w-64 bg-white border-l border-gray-200 p-4 flex flex-col">
      <div className="flex items-center mb-6">
        <Avatar className="h-10 w-10 mr-2">
          <AvatarImage src="/placeholder.svg" alt="Профиль" />
          <AvatarFallback>ИП</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">Иван Петров</div>
          <div className="text-sm text-gray-500">Онлайн</div>
        </div>
      </div>
      
      <div className="flex-1">
        <Card className="p-4">
          <h3 className="text-sm font-medium mb-2">Личная информация</h3>
          <div className="text-sm text-gray-500 mb-1">example@mail.ru</div>
          <div className="text-sm text-gray-500">+7 (999) 123-45-67</div>
        </Card>
      </div>
      
      <div className="mt-4">
        <QRCode />
      </div>
    </div>
  );
};

export default Profile;
