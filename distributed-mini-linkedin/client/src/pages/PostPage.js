import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';

export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost/post/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if (!postInfo) return '';

  return (
    <div className="post-page">
      <h1>{postInfo?.title}</h1>
      <time>{formatISO9075(new Date(postInfo?.createdAt))}</time>
      <div className="author">by @{postInfo?.author}</div>
      
      <div className="image">
        <img src={`http://localhost:9002/minilinkedin/${postInfo?.cover}`} alt=""/>
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo?.content}} />
    </div>
  );
}