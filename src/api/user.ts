import { BaseInstance } from ".";

const GetUserInfo = async () => {
  const { data } = await BaseInstance.get("/user/info");
  return data.data;
};
interface IAnotherProps {
  birth: string;
  email: string;
  gender: string;
  imgUrls: {
    imgId: number;
    imgUrl: string;
  }[];
  phone: string;
  userId: number;
  username: string;
}

const GetAnotherUserInfo = async (userId: number): Promise<IAnotherProps> => {
  const { data } = await BaseInstance.get(`/user/${userId}/info`);

  return data.data;
};

export { GetUserInfo, GetAnotherUserInfo };
