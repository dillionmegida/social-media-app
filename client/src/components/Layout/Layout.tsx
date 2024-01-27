import styled from "styled-components"
import LeftSideBar from "./LeftSideBar"
import MiddleContent from "./MiddleContent"
import RightSideBar from "./RightSideBar"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 340px;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;

  .left-side {
    position: sticky;
    top: 0;
  }

  .middle-side {
    --border-size: 1px;
    --border-color: #2f3336;
    border-left: var(--border-size) solid var(--border-color);
    border-right: var(--border-size) solid var(--border-color);
  }
`

export default function Layout() {
  return (
    <Wrapper>
      <div className="left-side">
        <LeftSideBar />
      </div>
      <main className="middle-side">
        <MiddleContent />
      </main>
      <div className="right-side">
        <RightSideBar />
      </div>
    </Wrapper>
  )
}
