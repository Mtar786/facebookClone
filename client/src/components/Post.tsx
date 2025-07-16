import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useLikePost, useUnlikePost, useCreateComment } from "@/hooks/usePosts";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface PostProps {
  post: any; // Will be properly typed based on your schema
}

export function Post({ post }: PostProps) {
  const { userProfile } = useAuth();
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const likePost = useLikePost();
  const unlikePost = useUnlikePost();
  const createComment = useCreateComment();

  const isLiked = post.likes?.some((like: any) => like.userId === userProfile?.id);
  const likesCount = post.likes?.length || 0;
  const commentsCount = post.comments?.length || 0;

  const handleLike = async () => {
    if (!userProfile) return;

    try {
      if (isLiked) {
        await unlikePost.mutateAsync({
          userId: userProfile.id,
          postId: post.id,
        });
      } else {
        await likePost.mutateAsync({
          userId: userProfile.id,
          postId: post.id,
        });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !userProfile) return;

    try {
      await createComment.mutateAsync({
        userId: userProfile.id,
        postId: post.id,
        content: newComment.trim(),
      });
      setNewComment("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.user?.profilePicture || ""} />
              <AvatarFallback>{post.user?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{post.user?.name || "Unknown User"}</h3>
              <p className="text-sm text-gray-600">
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreHorizontal className="text-gray-500" size={20} />
          </Button>
        </div>
        
        <p className="mb-3">{post.content}</p>
        
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt="Post image" 
            className="w-full rounded-lg mb-3 object-cover"
          />
        )}
      </div>
      
      <div className="px-4 py-2 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-1">
            {likesCount > 0 && (
              <>
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 bg-facebook-blue rounded-full flex items-center justify-center">
                    <ThumbsUp className="text-white" size={12} />
                  </div>
                </div>
                <span className="text-sm text-gray-600 ml-2">{likesCount} likes</span>
              </>
            )}
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            {commentsCount > 0 && <span>{commentsCount} comments</span>}
            <span>0 shares</span>
          </div>
        </div>
        
        <div className="flex justify-between border-t border-gray-200 pt-2">
          <Button 
            variant="ghost" 
            className={`flex items-center space-x-2 flex-1 justify-center py-2 ${
              isLiked ? 'text-facebook-blue' : 'text-gray-600'
            }`}
            onClick={handleLike}
            disabled={likePost.isPending || unlikePost.isPending}
          >
            <ThumbsUp size={20} />
            <span>{isLiked ? 'Liked' : 'Like'}</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex items-center space-x-2 flex-1 justify-center py-2 text-gray-600"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle size={20} />
            <span>Comment</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex items-center space-x-2 flex-1 justify-center py-2 text-gray-600"
          >
            <Share size={20} />
            <span>Share</span>
          </Button>
        </div>
        
        {showComments && (
          <div className="mt-4 space-y-3">
            {post.comments?.map((comment: any) => (
              <div key={comment.id} className="flex space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={comment.user?.profilePicture || ""} />
                  <AvatarFallback>{comment.user?.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <p className="font-medium text-sm">{comment.user?.name || "Unknown User"}</p>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}
            
            <form onSubmit={handleComment} className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={userProfile?.profilePicture || ""} />
                <AvatarFallback>{userProfile?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="rounded-full bg-gray-100 border-none"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </article>
  );
}
