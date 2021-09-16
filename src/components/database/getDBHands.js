export default async () => {
  const res = await fetch('http://127.0.0.1:8000/hands')
  const data = await res.json()
  return data
}