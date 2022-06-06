import axios from "axios";
import { UserCard } from "./components/UserCard";
import { User }　from "./components/types/api/user";

import "./styles.css";
import { UserProfile } from "./components/types/userProfile";

const user = {
  id: 1,
  name: "じゃけぇ",
  email: "example@mail.com",
  address: "address",
}

export default function App() {
  const [ userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const onClickFetchUser = () => {
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: 
      }))
  });
  }

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>ボタン</button>
      <UserCard user = {user} />
    </div>
  );
}
