import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { loginUser, logoutUser } from '../../store/User/slice';
import { UserName, UserNameBox } from './UserName';

export const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(loginUser());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!user?.name) {
    return <button onClick={handleLogin}>Login</button>
  }

  return user && user.tasks ? (
    <>
      <UserNameBox
        bottonContent={<div>Witaj w swoim profilu</div>}
      >
        {user.name && <UserName name={user.name}/>}
      </UserNameBox>
      <div>Zadania: [ done: {user.tasks.done}, deleted: {user.tasks.deleted}, added: {user.tasks.added}]</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  ) : null;
}
