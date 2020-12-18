import React from "react";
import BlogImg from "../../assets/svg-images/blog.png";
import "../../assets/styles/blog.scss";

function Blog() {
  return (
    <div>
      <div className="blank"></div>
      <div className="flexbox">
        <div className="blog">
          <img src={BlogImg} className="blogImg" alt="blog-image" />
        </div>
        <div className="blogMsg">
          <p>日々の学びのアウトプットのためにブログを運営しています。</p>
          <p>
            ブログを通して物を売り、マーケティングなどの勉強にも取り組んでいます。
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
