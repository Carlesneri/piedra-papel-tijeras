export default async function() {
  const res = await fetch('http://127.0.0.1:8000/new-db')
  const data = await res.json()
  return data
}