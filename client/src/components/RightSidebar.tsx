import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function RightSidebar() {
  // Mock data for demonstration
  const suggestions = [
    {
      id: 1,
      name: "Tom Wilson",
      mutualFriends: 5,
      profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Jessica Brown",
      mutualFriends: 3,
      profilePicture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const onlineContacts = [
    {
      id: 1,
      name: "Michael Chen",
      profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Alex Martinez",
      profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <aside className="w-80 hidden xl:block">
      <div className="sticky top-20 space-y-4">
        {/* Sponsored content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-medium text-gray-600 mb-3">Sponsored</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop" 
                alt="Latest smartphone technology" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-sm">Latest Smartphone</h4>
                <p className="text-xs text-gray-600">Discover the future of mobile technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Friend suggestions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-medium text-gray-600 mb-3">People you may know</h3>
          <div className="space-y-3">
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={suggestion.profilePicture} />
                    <AvatarFallback>{suggestion.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-sm">{suggestion.name}</h4>
                    <p className="text-xs text-gray-600">{suggestion.mutualFriends} mutual friends</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Add Friend
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Online contacts */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-medium text-gray-600 mb-3">Contacts</h3>
          <div className="space-y-2">
            {onlineContacts.map((contact) => (
              <div key={contact.id} className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={contact.profilePicture} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
