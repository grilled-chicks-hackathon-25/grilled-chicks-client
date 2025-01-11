import { BaseInstance } from ".";
export interface IGetListProps {
  birth: string;
  email: string;
  gender: string;
  join_date: string;
  major: string;
  mbti: string;
  phone: string;
  role: string;
  unive: string;
  user_id: number;
  username: string;
  imgs: {
    img_id: number;
    img_url: string;
    upload_date: string;
    user_id: number;
  }[];
}

const GetList = async (from: number): Promise<IGetListProps[]> => {
  const { data } = await BaseInstance.get(`/matching/${from}`);
  return data.body;
};

const GetSkipUser = async (from: number, target: number) => {
  const { data } = await BaseInstance.post(
    `/matching/skip/${from}/target/${target}`
  );
  return data.body;
};
const PostRequest = async (from: number, target: number) => {
  const { data } = await BaseInstance.post(
    `/matching/request_chat/${from}/target/${target}`
  );
  return data.body;
};

export { GetList, GetSkipUser, PostRequest };
