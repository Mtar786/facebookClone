import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Home, 
  Users, 
  Tv, 
  Store, 
  Gamepad2, 
  Plus, 
  MessageCircle, 
  Bell, 
  Search,
  Facebook
} from "lucide-react";

export function Header() {
  const { user, userProfile, signOut } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-facebook-blue rounded-full flex items-center justify-center">
                <Facebook className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-facebook-blue hidden sm:block">
                facebook
              </span>
            </Link>
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Search Facebook"
                className="w-64 pl-10 bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-facebook-blue"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
            </div>
          </div>

          {/* Center navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/">
              <Button variant="ghost" className="p-3 border-b-2 border-facebook-blue">
                <Home className="text-facebook-blue" size={24} />
              </Button>
            </Link>
            <Button variant="ghost" className="p-3">
              <Users className="text-gray-500" size={24} />
            </Button>
            <Button variant="ghost" className="p-3">
              <Tv className="text-gray-500" size={24} />
            </Button>
            <Button variant="ghost" className="p-3">
              <Store className="text-gray-500" size={24} />
            </Button>
            <Button variant="ghost" className="p-3">
              <Gamepad2 className="text-gray-500" size={24} />
            </Button>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Plus className="text-gray-500" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageCircle className="text-gray-500" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="text-gray-500" size={20} />
            </Button>
            
            {user && (
              <div className="flex items-center space-x-2">
                <Link href={`/profile/${userProfile?.id}`}>
                  <Avatar className="w-8 h-8 cursor-pointer">
                    <AvatarImage src={userProfile?.profilePicture || user.photoURL || ""} />
                    <AvatarFallback>{userProfile?.name.charAt(0) || user.displayName?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
