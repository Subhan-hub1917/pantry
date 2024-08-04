'use client'
import React, { useState } from 'react';
import { useMyContext } from '../_components/Context';

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
          "model": "meta-llama/llama-3.1-405b",
          "messages": [
            {"role": "user", "content": `Provide me the recipes of the these Items${JSON.stringify(items)}.If Items are not Given then Response that Your Pantry Might be Empty.I am Unable to get Response`},
          ],
        })
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get error details
        setLoading(false);
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const data = await response.json();
      setRecipes(JSON.stringify(data.choices[0].message.content, null, 2));
      console.log('Response data:', data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching suggestions:', error);
      alert(`Error fetching suggestions: ${error.message}`);
    }
  };

  return (
    <section className='text-lg text-blue-950 font-semibold space-y-3'>
      <h1>We will provide you the <span className='text-2xl text-blue-950'>Recipe Suggestions</span> based on the items available in your <span className='text-2xl text-blue-950'>Pantry</span></h1>
      <button onClick={()=>handleSuggestions()} className={`flex items-center bg-blue-950 px-3 py-2 text-white rounded-xl font-medium ${loading ? 'bg-green-700' : ''}`}>
        <i className='me-2 bi bi-magic'></i>
        {loading ? <h1>Generating Recipes...</h1> : <h1>Get Suggestion</h1>}
      </button>
      {recipes
        ? <h1 className='text-sm font-light'>{recipes}</h1>
        : <h1 className='text-sm font-light'>Click on the button to get recipe suggestions based on the items available in your pantry.</h1>}
    </section>
  );
}

export default Page;
