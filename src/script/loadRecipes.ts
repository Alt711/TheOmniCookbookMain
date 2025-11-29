import { supabase } from '../lib/supabase'

const resultsEl = document.getElementById('results')!

//script to load recipes from supabase 
async function loadRecipes() {
  resultsEl.innerHTML = `<p style="opacity:.7">Loading recipes…</p>`

  const { data, error } = await supabase
    .from('recipes')
    .select('id,name,ingredients')
    .limit(25)

  if (error) {
    console.error(error)
    resultsEl.innerHTML = `<p style="color:#b00020">Supabase error: ${error.message}</p>`
    return
  }

  if (!data || data.length === 0) {
    resultsEl.innerHTML = `<p style="opacity:.7">No recipes found.</p>`
    return
  }

  resultsEl.innerHTML = data.map(r => `
    <article style="padding:.75rem;border:1px solid #ddd;border-radius:.5rem;margin:.5rem 0;background:#fff7ef">
      <h3 style="margin:0 0 .25rem 0">${r.name ?? '(Untitled)'} <span style="opacity:.7">#${r.id}</span></h3>
      <p><strong>Ingredients:</strong> ${r.ingredients ?? '—'}</p>
    </article>
  `).join('')
}

document.addEventListener('DOMContentLoaded', loadRecipes)
