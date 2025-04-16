import { Card } from "@/components/ui/card";
import FriendshipSlideshow from "./FriendshipSlideshow";

const DialogWindow = () => {
  return (
    <div className="p-6 flex-1 flex items-center justify-center">
      <Card className="max-w-md w-full shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">О дружбе</h2>
        </div>
        <div className="p-4">
          <FriendshipSlideshow />
        </div>
      </Card>
    </div>
  );
};

export default DialogWindow;
