import styled from "styled-components"
import { navLinks } from "./navLinks"
import { NavLink } from "react-router-dom"
import { Icon } from "components/Icon"

const SideBar = styled.div`
  padding: 0 25px;
  font-size: 1.2rem;
  height: 100vh;
  position: relative;

  .logo {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 5px 10px;

    img {
      width: 25px;
      aspect-ratio: 1;
    }
  }

  .links {
    padding: 20px 10px;
    .link {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 30px;

      a {
        color: white;

        &.active {
          font-weight: bold;
        }
      }
    }
  }

  .post-btn {
    display: block;
    padding: 15px 10px;
    border-radius: 30px;
    background-color: var(--primary-color);
    width: 100%;
    text-align: center;
    font-weight: bold;
  }

  .auth-user {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 25px 40px;
    display: flex;
    align-items: center;
    gap: 10px;

    .user {
      &__image {
        aspect-ratio: 1;
        width: 40px;
        border-radius: 50%;
      }

      &__info {
        flex: 1;
      }

      &__display,
      &__name {
        display: block;
        width: max-content;
        font-size: 0.9rem;
        text-align: left;
      }

      &__display {
        font-weight: bold;
      }

      &__name {
        color: #333;
      }
    }
  }
`

export default function LeftSideBar() {
  return (
    <SideBar>
      <div className="logo">
        <img src="/x-logo.png" alt="" />
      </div>
      <ul className="links">
        {navLinks({ iconSize: 25, active: "/home" }).map(navLink => (
          <li className="link" key={navLink.label}>
            {navLink.icon}
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={navLink.link}
            >
              {navLink.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="post-btn">Post</button>
      <button className="auth-user">
        <img
          src="https://dillionmegida.com/img/deee.jpg"
          alt=""
          className="user__image"
        />
        <div className="user__info">
          <span className="user__display">dillion - deeecode</span>
          <span className="user__name">@iamdillion</span>
        </div>
        <Icon type="ellipsis" size={15} />
      </button>
    </SideBar>
  )
}
