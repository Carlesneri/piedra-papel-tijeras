export default async({user, computer, result}) => {
  const res = await fetch(`http://127.0.0.1:8000/hand?user=${user}&computer=${computer}&result=${result}`)
  const data = await res.json()
  return data
}