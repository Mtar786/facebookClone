import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useCreatePost } from "@/hooks/usePosts";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Video, Image, Smile } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function PostCreator() {
  const { user, userProfile } = useAuth();
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const createPost = useCreatePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !userProfile) return;

    try {
      await createPost.mutateAsync({
        userId: userProfile.id,
        content: content.trim(),
        imageUrl: null,
      });
      
      setContent("");
      setIsExpanded(false);
      toast({
        title: "Post created successfully!",
        description: "Your post has been shared with your friends.",
      });
    } catch (error) {
      toast({
        title: "Error creating post",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user || !userProfile) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={userProfile.profilePicture || user.photoURL || ""} />
            <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {!isExpanded ? (
            <div 
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => setIsExpanded(true)}
            >
              What's on your mind, {userProfile.name}?
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-1">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`What's on your mind, ${userProfile.name}?`}
                className="min-h-[100px] border-none resize-none focus:ring-0 text-lg"
                autoFocus
              />
              <div className="flex justify-end space-x-2 mt-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsExpanded(false);
                    setContent("");
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={!content.trim() || createPost.isPending}
                  className="bg-facebook-blue hover:bg-blue-600"
                >
                  {createPost.isPending ? "Posting..." : "Post"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      {!isExpanded && (
        <div className="border-t border-gray-200 px-4 py-2">
          <div className="flex justify-between">
            <Button variant="ghost" className="flex items-center space-x-2 flex-1 justify-center py-2">
              <Video className="text-red-500" size={20} />
              <span className="text-gray-600">Live video</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2 flex-1 justify-center py-2">
              <Image className="text-green-500" size={20} />
              <span className="text-gray-600">Photo/video</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2 flex-1 justify-center py-2">
              <Smile className="text-yellow-500" size={20} />
              <span className="text-gray-600">Feeling/activity</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
