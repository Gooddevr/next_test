

async function  Takedata() {
    try {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts")
        return result.json()
    }
catch (err) {
    <div>Sorry some this error {err}</div>
 }
}
export default Takedata