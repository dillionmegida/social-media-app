import styled from "styled-components"
import { Icon } from "./Icon"

const Dialog = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;

  .user-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .post {
    width: 100%;

    &__audience {
    }

    &__text {
      width: 100%;
      font-size: 1.3rem;
      outline: none;
      padding-top: 5px;
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .actions {
      display: flex;
      gap: 5px;
    }
  
    .action-btn {
      color: var(--primary-color);
    }

    .post-btn {
      background-color: var(--primary-color);
      color: white;
      border-radius: 25px;
      padding: 7px 17px;
      
      &:disabled {
        cursor: not-allowed;
        opacity: .4;
      }
    }
  }

`

const actions = ({ size }: { size: number }) => [
  {
    id: "image",
    icon: <Icon size={size} type="image" />,
  },
  {
    id: "gif",
    icon: <Icon size={size} type="gif" />,
  },
  {
    id: "poll",
    icon: <Icon size={size} type="poll" />,
  },
  {
    id: "emoji",
    icon: <Icon size={size} type="emoji" />,
  },
  {
    id: "schedule",
    icon: <Icon size={size} type="calendar-schedule" />,
  },
  {
    id: "map",
    icon: <Icon size={size} type="map" />,
  },
  {
    id: "bold",
    icon: <Icon size={size} type="bold" />,
  },
  {
    id: "italic",
    icon: <Icon size={size} type="italic" />,
  },
]

export default function PostDialog() {
  return (
    <Dialog>
      <img
        src="https://dillionmegida.com/img/deee.jpg"
        alt=""
        className="user-icon"
      />
      <form className="post">
        <div className="post__audience"></div>
        <textarea
          placeholder="What is happening?!"
          className="post__text"
        />
        <div className="post__footer">
          <div className="actions">
            {actions({ size: 18 }).map(action => (
              <button className="action-btn" key={action.id}>
                {action.icon}
              </button>
            ))}
          </div>
          <button type="button" disabled={true} className="post-btn">
            Post
          </button>
        </div>
      </form>
    </Dialog>
  )
}
