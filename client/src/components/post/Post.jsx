import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.cloudynights.com/uploads/monthly_09_2022/post-306923-0-13535800-1662853098.png"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        laborum eos id eligendi ipsa facilis eius aliquid laboriosam est
        sapiente itaque excepturi voluptatum cum consequuntur a voluptate
        delectus, tenetur suscipit.
      </p>
    </div>
  );
};

export default Post;
