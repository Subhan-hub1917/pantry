'use client'
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useMyContext } from '../_components/Context';
// import remarkGfm from 'remark-gfm';

const Page = () => {
  const [recipes, setRecipes] = useState('');
  const [loading, setLoading] = useState(false);
  const { items } = useMyContext(); 

  const handleSuggestions = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "meta-llama/llama-3.1-8b-instruct:free",
          "messages": [
            { "role": "system", "content": `You Give Recipes Suggestions Based on the Provided Items.And Give precise and concise Shortest Answers Only.If Items not available in Pantry tell the people to Add items in Pantry.` },
            { "role": "user", "content": `Items: ${JSON.stringify(items)}` }
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get error details
        setLoading(false);
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const data = await response.json();

      // Log the full data to inspect its structure
      console.log('Full response data:', data);

      // Ensure that 'choices' exists and has at least one element
      if (data.choices && Array.isArray(data.choices) && data.choices.length > 0) {
        setRecipes(data.choices[0].message.content);
      } else {
        throw new Error('No recipe suggestions found in the response.');
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching suggestions:', error);
      alert(`Error fetching suggestions: ${error.message}`);
    }
  };

  return (
    <section className='text-lg text-blue-950 font-semibold space-y-3'>
      <h1>We will provide you <span className='text-2xl text-blue-950'>Recipe Suggestions</span> based on the items available in your <span className='text-2xl text-blue-950'>Pantry</span></h1>
      {
        items.length > 0
        ?
          <button 
            onClick={handleSuggestions} 
            className={`flex items-center bg-blue-950 px-3 py-2 text-white rounded-xl font-medium ${loading ? 'bg-green-700' : ''}`} 
            disabled={loading}
          >
            <i className='me-2 bi bi-magic'></i>
            {loading ? <h1>Generating Recipes...</h1> : <h1>Get Suggestion</h1>}
          </button>
        :
          <button className='flex items-center bg-orange-600 px-3 py-2 text-white rounded-xl font-medium' disabled>
            <i className='me-2 bi bi-magic'></i>
            <h1>Empty Pantry</h1>
          </button>
      }
      {recipes
        ? <ReactMarkdown className='text-sm font-light'>{recipes}</ReactMarkdown>
        : <h1 className='text-sm font-light'>Click on the button to get recipe suggestions based on the items available in your pantry.</h1>}
    </section>
  );
}

export default Page;
