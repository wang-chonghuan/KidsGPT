import { MessageBody } from "../api/types";

type Props = {
  msgs: MessageBody[];
};
export function MessageList({ msgs }: Props) {

  const getBubbleStyle = (role: string) => {
    return role === "user" ? "chat chat-end" : "chat chat-start";
  };

  return (
    <ul className="list-none">
      {msgs.map((msgBody) => (
        <li
          key={msgBody.datetime}
        >
          <div className={getBubbleStyle(msgBody.role)}>
            <div className="chat-header">
              {msgBody.role}
            </div>
            <div className="chat-bubble">{msgBody.content}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
