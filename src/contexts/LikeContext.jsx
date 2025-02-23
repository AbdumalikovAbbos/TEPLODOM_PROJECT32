import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [likedItems, setLikedItems] = useState(
    JSON.parse(localStorage.getItem("likedItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const addToLike = (product) => {
    setLikedItems((prevLiked) => {
      if (!prevLiked.some((item) => item.id === product.id)) {
        const updatedLikes = [...prevLiked, product];
        localStorage.setItem("likedItems", JSON.stringify(updatedLikes));
        return updatedLikes;
      }
      return prevLiked;
    });
  };

  const removeFromLike = (id) => {
    setLikedItems((prevLiked) => {
      const updatedLikes = prevLiked.filter((item) => item.id !== id);
      localStorage.setItem("likedItems", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  return (
    <LikeContext.Provider value={{ likedItems, addToLike, removeFromLike }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLike() {
  return useContext(LikeContext);
}
