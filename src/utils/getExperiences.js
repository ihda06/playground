import { CareerList } from "@/commons/constants/career";

export default function getExperiences(search) {
  const datas = CareerList;
  return datas.find((item) => {
    return item.routeName === search;
  });
}
