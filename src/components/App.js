import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleLIst";
console.log(blogData);

function App() {
  const blogName = "Turbulence";
  const imageUrl = "/home/joshua/Downloads/jan-kopriva-IeRgPDoPpzU-unsplash.jpg"
  const aboutText = ""
  const posts = [
    { title: "First Post", date: "2022-01-01", preview: "Preview of the first post" },
    { title: "Second Post", date: "2022-02-01", preview: "Preview of the second post" },
  ];
  return (
    <div className="App">
      <Header blogName={blogName} />
      <About imageUrl={imageUrl} aboutText={aboutText} />
      <ArticleList posts={posts} />
      {/* Other components and content of your blog app */}
    </div>
    
  );
}

export default App;
