import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://www.cloudynights.com/uploads/monthly_09_2022/post-306923-0-13535800-1662853098.png"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Some great Jupiter
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Someone</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima
          dignissimos laborum id rem reprehenderit, corporis cumque, nisi odio
          delectus hic incidunt earum quos debitis quasi dolore, accusamus
          quibusdam mollitia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima
          dignissimos laborum id rem reprehenderit, corporis cumque, nisi odio
          delectus hic incidunt earum quos debitis quasi dolore, accusamus
          quibusdam mollitia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima
          dignissimos laborum id rem reprehenderit, corporis cumque, nisi odio
          delectus hic incidunt earum quos debitis quasi dolore, accusamus
          quibusdam mollitia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima
          dignissimos laborum id rem reprehenderit, corporis cumque, nisi odio
          delectus hic incidunt earum quos debitis quasi dolore, accusamus
          quibusdam mollitia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima
          dignissimos laborum id rem reprehenderit, corporis cumque, nisi odio
          delectus hic incidunt earum quos debitis quasi dolore, accusamus
          quibusdam mollitia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima
          dignissimos laborum id rem reprehenderit, corporis cumque, nisi odio
          delectus hic incidunt earum quos debitis quasi dolore, accusamus
          quibusdam mollitia!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
