import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start to Post</button>
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

      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/Share-image.jpg" />
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
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <button>
            <img src="/images/like-icon.svg" alt="celebrate"></img>
          </button>
        </Article>
      </div>
    </Container>
  );
};

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
        padding-left: 16px;
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

export default Main;

// const ArtCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   margin-bottom: 8px;
//   background-color: #fff;
//   border-radius: 5px;
//   transition: box-shadow 83ms;
//   position: relative;
//   border: none;
//   box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
// `;

// const UserInfo = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding: 12px 12px 16px;
//   word-wrap: break-word;
//   word-break: break-word;
// `;

// const CardBackground = styled.div`
//   background: url("/images/card-bg.svg");
//   background-position: center;
//   background-size: 462px;
//   height: 54px;
//   margin: -12px -12px 0;
// `;

// const Photo = styled.div`
//   box-shadow: none;
//   background-image: url("/images/photo.svg");
//   width: 72px;
//   height: 72px;
//   box-sizing: border-box;
//   background-clip: content-box;
//   background-color: white;
//   background-position: center;
//   border-size: 60%;
//   background-repeat: no-repeat;
//   border: 2px solid white;
//   margin: -38px auto 12px;
//   border-radius: 50%;
// `;

// const Link = styled.div`
//   font-size: 16px;
//   line-height: 1.5;
//   color: rgba(0, 0, 0, 0.9);
//   font-weight: 600;
// `;

// const AddPhotoText = styled.div`
//   color: #0a66c2;
//   margin-top: 4px;
//   font-size: 12px;
//   line-height: 1.33;
//   font-weight: 400;
// `;

// const Widget = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding-top: 12px;
//   padding-bottom: 12px;

//   & > a {
//     text-decoration: none;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 4px 12px;

//     &:hover {
//       background-color: rgba(0, 0, 0, 0.08);
//     }
//     div {
//       display: flex;
//       flex-direction: column;
//       text-align: left;

//       span {
//         font-size: 12px;
//         line-height: 1.333;
//         &:first-child {
//           color: rgba(0, 0, 0, 0.6);
//         }
//         &nth-child(2) {
//           color: rgba(0, 0, 0, 1);
//         }
//       }
//     }
//   }

//   svg {
//     color: rgba(0, 0, 0, 1);
//   }
// `;
// const Item = styled.a`
//   border-color: rgba(0, 0, 0, 0.8);
//   text-align: left;
//   padding: 12px;
//   font-size: 12px;
//   display: block;
//   span {
//     display: flex;
//     align-items: center;
//     color: rgba(0, 0, 0, 1);
//     svg {
//       color: rgba(0, 0, 0, 0.6);
//     }
//   }
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.08);
//   }
// `;

// const CommunityCard = styled(ArtCard)`
//   padding: 8px 0 0;
//   text-align: left;
//   display: flex;
//   flex-direction: column;
//   a {
//     color: black;
//     padding: 4px 12px 4px 12px;
//     font-size: 12px;

//     &:hover {
//       color: #0a66c2;
//     }
//     span {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//     }

//     &:last-child {
//       color: rgba(0, 0, 0, 0.6);
//       text-decoration: none;
//       border-top: 1px solid #d6cec2;
//       padding: 12px;
//       &:hover {
//         background-color: rgba(0, 0, 0, 0.08);
//       }
//     }
//   }
// `;
