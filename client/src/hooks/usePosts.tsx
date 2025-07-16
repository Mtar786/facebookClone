import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, InsertPost, InsertLike, InsertComment } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ['/api/posts'],
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (post: InsertPost) => {
      const response = await apiRequest('POST', '/api/posts', post);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/posts'] });
    },
  });
}

export function useLikePost() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (like: InsertLike) => {
      const response = await apiRequest('POST', '/api/likes', like);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/posts'] });
    },
  });
}

export function useUnlikePost() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ userId, postId }: { userId: number; postId: number }) => {
      const response = await apiRequest('DELETE', `/api/likes/${userId}/${postId}`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/posts'] });
    },
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (comment: InsertComment) => {
      const response = await apiRequest('POST', '/api/comments', comment);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/posts'] });
    },
  });
}
