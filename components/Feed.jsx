"use client";
import {useState, useEffect} from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          />
      })}

    </div>
  )
} 
const Feed = () => {
  const [posts, setPosts] = useState([])
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    const fetchPosts = async() => {
      const response = await fetch("/api/prompt");
      const data = await response.json()

      setPosts(data)
    }
  })

  const handleSearchChange = (e) => {

  }
  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input type="text" 
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input_peer"
        />
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick = {() => {}}
      />
    </section>
  )
}

export default Feed