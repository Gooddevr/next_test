
async function dataHendler(){
  const result = await fetch("https://jsonplaceholder.typicode.com/posts")
  return result.json()
}

export default async function Slupage () {
  const post = await dataHendler()

     return (
      <>
      {post.map(el => <div key={el.id}>
        {el.id}{<br/>}
        <span>{el.title}</span>
        <br />
        {el.body}</div>)}
      </>
  )
 }