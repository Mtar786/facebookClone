import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/Header";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Edit } from "lucide-react";

export default function Profile() {
  const { user, userProfile } = useAuth();

  if (!user || !userProfile) {
    return (
      <div className="min-h-screen bg-facebook-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-facebook-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-facebook-bg">
      <Header />
      
      <main className="pt-14 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Card className="mb-6">
            <CardContent className="p-0">
              {/* Cover photo */}
              <div className="h-80 bg-gradient-to-r from-facebook-blue to-facebook-light-blue relative">
                <Button 
                  variant="secondary" 
                  className="absolute bottom-4 right-4"
                  size="sm"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Edit Cover Photo
                </Button>
              </div>
              
              {/* Profile info */}
              <div className="px-6 pb-6">
                <div className="flex items-end space-x-4 -mt-20">
                  <div className="relative">
                    <Avatar className="w-40 h-40 border-4 border-white">
                      <AvatarImage src={userProfile.profilePicture || user.photoURL || ""} />
                      <AvatarFallback className="text-4xl">{userProfile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button 
                      variant="secondary" 
                      size="icon"
                      className="absolute bottom-2 right-2 rounded-full"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex-1 pt-4">
                    <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
                    <p className="text-gray-600 mb-4">No bio yet</p>
                    <div className="flex space-x-2">
                      <Button className="bg-facebook-blue hover:bg-blue-600">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                      <Button variant="secondary">
                        Add Story
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About section */}
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-medium">{userProfile.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Joined</p>
                    <p className="font-medium">
                      {new Date(userProfile.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Posts section */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Posts</h2>
                  <div className="text-center py-8">
                    <p className="text-gray-600">No posts yet</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Posts you create will appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
