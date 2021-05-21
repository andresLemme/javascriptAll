export function PostCard(props){
    let{date, title, link} = props
    return `
        <article class="post-card">
            <img src="https://placeimg.com/200/200/any" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
            <time datetime="${date}">${date}</time>
            <a href="${link}" target="_blank">Ver publicacion</a>
            </p>
        <article>
    `
}