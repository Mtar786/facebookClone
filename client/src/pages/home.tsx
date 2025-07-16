import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/Header";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { PostCreator } from "@/components/PostCreator";
import { PostFeed } from "@/components/PostFeed";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-facebook-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-facebook-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will be redirected to login
  }

  return (
    <div className="min-h-screen bg-facebook-bg">
      <Header />
      
      <main className="pt-14 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            <LeftSidebar />
            
            <div className="flex-1 max-w-2xl">
              <PostCreator />
              <PostFeed />
            </div>
            
            <RightSidebar />
          </div>
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center p-2">
            <i className="fas fa-home text-facebook-blue text-xl"></i>
          </button>
          <button className="flex flex-col items-center p-2">
            <i className="fas fa-users text-gray-500 text-xl"></i>
          </button>
          <button className="flex flex-col items-center p-2">
            <i className="fas fa-plus text-gray-500 text-xl"></i>
          </button>
          <button className="flex flex-col items-center p-2">
            <i className="fab fa-facebook-messenger text-gray-500 text-xl"></i>
          </button>
          <button className="flex flex-col items-center p-2">
            <i className="fas fa-bell text-gray-500 text-xl"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
