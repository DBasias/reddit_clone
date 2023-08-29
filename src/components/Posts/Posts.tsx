import { Community } from "@/src/atoms/communitiesAtom";
import { Post } from "@/src/atoms/postsAtom";
import { firestore } from "@/src/firebase/clientApp";
import usePosts from "@/src/hooks/usePosts";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  // useAuthState
  const [loading, setLoading] = useState(false);
  const { postStateValue, setPostStateValue } = usePosts();

  const getPosts = async () => {
    try {
      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postDocs = await getDocs(postsQuery);
      const posts = postDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPostStateValue(prev => ({ ...prev, posts: posts as Post[] }));
    } catch (error: any) {
      console.log("getPosts error:", error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>Posts</div>;
};

export default Posts;
