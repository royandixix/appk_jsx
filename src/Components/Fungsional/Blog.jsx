import React from "react";
import "./css/Blog.css";


const Blog = (props) => {
    return (
        <article className="blog-wrap">
            <img src={`/img/${props.gambar}`} alt={props.judul} />
            <time>{props.tanggal}</time>
            <h2>{props.judul}</h2>
            <p>{props.summary}</p>

        </article>
    );
};

export default Blog
