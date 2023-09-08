
import { MenuItem } from "./MenuItem";

export const Menu = ({ list }) => {
  return (
    <div className="flex flex-col space-y-1 lg:p-0">
      {list.map((item, index) => (
        <MenuItem key={index} item={item}></MenuItem>
      ))}
    </div>
  );
};
