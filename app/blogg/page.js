async function getComents(){
    const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
        next: {
            revalidate: 35,
        }
    })
    return response.json()
}
export const metadata = {
    title: "BLOG"
}
export default async function  Blogg () {
    const coments = await getComents()
    return (
            <>
            <h1>BLOG_FIRST</h1>
            {coments.map((coment)=>{
                return  <div key={coment.id}>
                          <p className={`${coment.postId}`}>
                              {coment.body}
                          </p>
                        </div>
            })}
            </>
    )
}