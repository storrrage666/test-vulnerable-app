export async function getData() {
  const res = await fetch("http://api.example.com/data")
  return res.json()
}
