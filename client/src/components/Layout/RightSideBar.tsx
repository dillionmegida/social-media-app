import { Icon } from "components/Icon"
import styled from "styled-components"

const SideBar = styled.div`
  padding: 5px 20px;

  .search-section {
    height: 50px;
    width: 100%;
    position: relative;

    .search-input {
      position: absolute;
      width: 100%;

      .icon {
        position: absolute;
        top: 12px;
        left: 12px;
        color: #71767a;
      }

      input {
        width: 100%;
        border-radius: 25px;
        padding: 12px 12px 12px 45px;

        background-color: #202327;

        &::placeholder {
          color: #71767a;
        }
      }
    }
  }
`

export default function RightSideBar() {
  return (
    <SideBar>
      <div className="search-section">
        <div className="search-input">
          <Icon className="icon" size={16} type="search" />
          <input placeholder="Search" />
        </div>
      </div>
    </SideBar>
  )
}
