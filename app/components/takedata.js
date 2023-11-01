

async function  Takedata() {
    try {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
  .then(()=>{ result.map(result=>{
    <div key={result.id}>
    <span> {result.id}</span>
    <span> {result.body}</span>
    </div>})})
}
catch (err) {
    <div>Sorry some this error {err}</div>
 }
}
export default Takedata