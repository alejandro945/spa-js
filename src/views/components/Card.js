let Card = {
    render: async (id,name, avatar, title, content) => {
        let view = /*html*/`
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src=${avatar} alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                    <p class="title is-4">${content}</p>
                     <p class="subtitle is-6">${name}</p>
                    </div>
                </div>
                <div class="content">
                   ${title}
                   <a href="#/p/${post.id}"></a>
                </div>
            </div>
        </div>
        `
        return view
    },
    after_render: async () => { }

}
export default Card;