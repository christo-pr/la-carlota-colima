export async function registerNewStore(data) {
  const baseUrl = process.env.GATSBY_SERVERLESS_HOST

  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}
