import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, Bookmark, Calendar, Flag } from "lucide-react";

export function LeftSidebar() {
  const { user, userProfile } = useAuth();

  const menuItems = [
    {
      icon: <Avatar className="w-9 h-9">
        <AvatarImage src={userProfile?.profilePicture || user?.photoURL || ""} />
        <AvatarFallback>{userProfile?.name.charAt(0) || user?.displayName?.charAt(0) || "U"}</AvatarFallback>
      </Avatar>,
      label: userProfile?.name || user?.displayName || "User",
      href: `/profile/${userProfile?.id}`,
    },
    {
      icon: <div className="w-9 h-9 bg-facebook-blue rounded-full flex items-center justify-center">
        <Users className="text-white" size={20} />
      </div>,
      label: "Friends",
      href: "/friends",
    },
    {
      icon: <div className="w-9 h-9 bg-facebook-blue rounded-full flex items-center justify-center">
        <Users className="text-white" size={20} />
      </div>,
      label: "Groups",
      href: "/groups",
    },
    {
      icon: <div className="w-9 h-9 bg-facebook-blue rounded-full flex items-center justify-center">
        <Bookmark className="text-white" size={20} />
      </div>,
      label: "Saved",
      href: "/saved",
    },
    {
      icon: <div className="w-9 h-9 bg-facebook-blue rounded-full flex items-center justify-center">
        <Calendar className="text-white" size={20} />
      </div>,
      label: "Events",
      href: "/events",
    },
    {
      icon: <div className="w-9 h-9 bg-facebook-blue rounded-full flex items-center justify-center">
        <Flag className="text-white" size={20} />
      </div>,
      label: "Pages",
      href: "/pages",
    },
  ];

  return (
    <aside className="w-80 hidden lg:block">
      <div className="sticky top-20">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
