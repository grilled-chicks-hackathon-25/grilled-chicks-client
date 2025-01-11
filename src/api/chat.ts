import { BaseInstance } from ".";

interface IresChatMessageGetApi {
  messageId: number;
  content: string;
  mine: boolean;
  description: string;
}

const GetChatMessage = async (
  roomId: number
): Promise<IresChatMessageGetApi> => {
  const { data } = await BaseInstance.get(`/chat/${roomId}/messages`);
  return data;
};

export { GetChatMessage };
