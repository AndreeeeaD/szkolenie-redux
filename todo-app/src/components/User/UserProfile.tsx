import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { loginUser, logoutUser } from '../../store/User/actions';

export const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(loginUser());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!user) {
    return <button onClick={handleLogin}>Login</button>
  }

  return user && (
    <>
      <div>{user?.name}</div>
      <div>Zadania: [ done: {user.tasks.done}, deleted: {user.tasks.deleted}, added: {user.tasks.added}]</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
