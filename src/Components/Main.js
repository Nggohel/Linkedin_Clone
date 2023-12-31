import { useState, useEffect } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";
const Main = (props) => {
  const [showModel, setShowModel] = useState("close");

  useEffect(() => {
    props.getArticleAPI();
  }, []);

  const handleClick = () => {
    // Toggle the showModel state
    setShowModel((prevState) => (prevState === "open" ? "close" : "open"));
    console.log("showModel updated to:", showModel);
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>There is no article</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start to Post
              </button>
            </div>
            <div>
              <button>
                <img src="/images/media.svg"></img>
                <span>Media</span>
              </button>
              <button>
                <img src="/images/media.svg"></img>
                <span>Video</span>
              </button>
              <button>
                <img src="/images/media.svg"></img>
                <span>Event</span>
              </button>
              <button>
                <img src="/images/media.svg"></img>
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <ScrollableContainer>
            <Content>
              {props.loading && <img src="./images/Iphone-spinner.gif" />}
              {props.articles.length > 0 &&
                props.articles.map((article, key) => (
                  <Article key={key}>
                    <SharedActor>
                      <a>
                        <img src={article.actor.image} alt="" />
                        <div>
                          <span>{article.actor.title}</span>
                          <span>{article.actor.description}</span>
                          <span>
                            {article.actor.date.toDate().toLocaleDateString()}
                          </span>
                        </div>
                      </a>
                      <button>
                        <img src="/images/ellipsis.svg" alt="" />
                      </button>
                    </SharedActor>
                    <Description>{article.description}</Description>
                    <SharedImg>
                      <a>
                        {!article.sharedImg && article.video ? (
                          <ReactPlayer width={"100%"} url={article.video} />
                        ) : (
                          article.sharedImg && <img src={article.sharedImg} />
                        )}
                      </a>
                    </SharedImg>
                    <SocialCounts>
                      <li>
                        <button>
                          <img
                            src="https://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup500.png"
                            style={{ height: 24, width: 24 }}
                          ></img>
                          <img
                            src="https://static.licdn.com/sc/h/4vr7dcac5wuy4nwsxxx8tf9e7"
                            alt="celebrate"
                          ></img>
                          <span>75</span>
                        </button>
                      </li>
                      <li>
                        <a>{article.comments}</a>
                      </li>
                    </SocialCounts>
                    <SocialAction>
                      <button>
                        <img
                          src="/images/like-icon.png"
                          alt="like-icon"
                          style={{ width: 20, height: 23 }}
                        ></img>
                        <span>Like</span>
                      </button>
                      <button>
                        <img
                          src="/images/comments-icon.png"
                          alt="comment-icon"
                          style={{ width: 20, height: 23 }}
                        ></img>
                        <span>Comment</span>
                      </button>
                      <button>
                        <img
                          src="/images/retweet-icon.png"
                          alt="repost-icon"
                          style={{ width: 20, height: 23 }}
                        ></img>
                        <span>Repost</span>
                      </button>
                      <button>
                        <img
                          src="/images/share-icon.png"
                          alt="share-icon"
                          style={{ width: 20, height: 23 }}
                        ></img>
                        <span>Share</span>
                      </button>
                    </SocialAction>
                  </Article>
                ))}
            </Content>
          </ScrollableContainer>
          <PostModal showModel={showModel} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const ScrollableContainer = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 200px);
  padding-right: 12px;
`;

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 18px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.8);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    background-color: transparent;
    border: none;
    span {
      margin-left: 5px;
    }

    @media (min-width: 768px) {
      margin-left: 8px;

      span {
        margin-left: 5px;
      }
    }
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticleAPI: () => dispatch(getArticleAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
