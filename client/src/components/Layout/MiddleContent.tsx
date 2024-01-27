import PostDialog from "components/PostDialog"
import styled from "styled-components"

const Container = styled.div`
  /* padding: 10px; */

  .top-bar {
    position: sticky;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #2f3336;
    height: 45px;
    align-items: center;

    .content-type-btn {
      border: none;
      background: none;
      color: #2f3336;
      font-size: 1rem;

      &.active {
        font-weight: bold;
        color: white;
        position: relative;

        &::after {
          content: "";
          border-radius: 10px;
          background-color: var(--primary-color);
          height: 4px;
          width: calc(100% - 10px);
          bottom: -12px;
          left: 0;
          right: 0;
          margin: 0 auto;
          position: absolute;
        }
      }
    }
  }

  .add-post-form {
    border-bottom: 1px solid #2f3336;
  }

  .show-more-posts {
    text-align: center;
    border-bottom: 1px solid #2f3336;

    .show-more-btn {
      display: block;
      width: 100%;
      padding: 15px;
      color: var(--primary-color);
    }
  }
`

export default function MiddleContent() {
  return (
    <Container>
      <div className="top-bar">
        <button className="content-type-btn active">For you</button>
        <button className="content-type-btn">Following</button>
      </div>
      <div className="add-post-form">
        <PostDialog />
      </div>
      <div className="show-more-posts">
        <button className='show-more-btn'>Show 70 posts</button>
      </div>
    </Container>
  )
}
