import React, { useEffect, useRef, useState } from "react";

function PostCard({ post }) {
  const cardRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`card ${visible ? "show" : ""}`}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>
        {post.author} | {post.category}
      </small>
    </div>
  );
}

export default PostCard;