import {MessageBody} from './types';

export async function sendMessage(sendMsgBody: MessageBody, jwt: string): Promise<MessageBody> {
  // pre prcess body
  console.log('Request body:', sendMsgBody);
  // send request
  console.log('Request URL:', process.env.REACT_APP_MAIVC_URL!);
  const response = await fetch(process.env.REACT_APP_MAIVC_URL! + 'chat/message', {
    method: 'POST',
    body: JSON.stringify(sendMsgBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': jwt
    },
  });
  // post process body
  const responseBody = (await response.json()) as any;
  console.log('Response body:', responseBody);
  const retMsgBody: MessageBody = {
    username: responseBody.username,
    role: responseBody.role,
    content: responseBody.content,
    datetime: new Date().getTime(),
    sessionId: sendMsgBody.sessionId // 返回的sessionId和发送的sessionId一样
  }
  return retMsgBody;
}


