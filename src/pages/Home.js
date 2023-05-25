import React from "react";
import NotionImg from "../assets/NotionImg.png";

function Home() {
  return (
    <div class="flex flex-col justify-center items-center text-white p-2">
      <img
        src={NotionImg}
        alt="Study Notion"
        class=" h-auto bg-gray-600 rounded-3xl"
      />
      <div class="text-center mt-8">
        <h1 class="text-4xl font-bold">Study Notion</h1>
        <p class="text-lg mt-4">Your ultimate study companion</p>
      </div>
    </div>
  );
}

export default Home;
