// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
        const json = await response.json();
        console.log(json);
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render: async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
           <section class="section">
               <h1> Home </h1>
               <br/>
                   ${posts.map(post =>
                    /*html*/`
                    <div class="card">
                        <div class="card-content">
                            <div class="media">    
                                <div class="media-content">
                                <p class="title is-4">${post.content}</p>                         
                                <p class="subtitle is-6">${post.name}</p>
                                </div>
                            </div>
                            <div class="content">
                            ${post.title}                       
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#/p/${post.id}" class="card-footer-item">Edit</a>
                        </footer>
                    </div> 
                 `
                   ).join('\n ')}
           </section>
       `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;