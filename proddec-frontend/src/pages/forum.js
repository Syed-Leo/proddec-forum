import react,{ useEffect, useState } from "react";
import PostCard from "../components/postcard";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "All" || post.category === category)
    );
  });

  return (
    <div className="container">
      <div className="hero">
  <h1>Welcome to PRODDEC Forum</h1>
  <p>
    PRODDEC (Product Development & Innovation Community) is a collaborative
    platform built to empower developers, AI enthusiasts, designers,
    researchers, and tech visionaries. Our mission is to create an ecosystem
    where ideas evolve into real-world solutions through discussion,
    experimentation, and shared learning.
  </p>

  <p className="hero-sub">
    Whether you're exploring Artificial Intelligence, Frontend development,
    Backend systems, emerging technologies, or product innovation — PRODDEC
    provides a space to ask questions, share knowledge, build projects, and
    grow together as a community.
  </p>

  <p className="hero-sub">
    Join meaningful conversations, discover insights from peers, and
    contribute to a culture of continuous improvement and technical
    excellence.
  </p>
</div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="AI/ML">AI/ML</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
      </select>

      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Forum;