import React from "react";
import BLOG from "../../assets/svg-images/blog.png";

function Blog() {
  return (
    <div>
      <div className="blank"></div>
      <div className="flexbox">
        <section className="blog-msg">
          <p>日々の学びのアウトプットのためにブログを運営しています。</p>
          <p>
            ブログを通して物を売り、マーケティングなどの勉強にも取り組んでいます。
          </p>
        </section>
        <section className="blog">
          <BLOG className="blog-img" />
        </section>
      </div>
    </div>
  );
}

export default Blog;
