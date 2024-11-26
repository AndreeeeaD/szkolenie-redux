

type UserPreferencesContainerProps = {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export const UserPreferencesContainer = ({ theme, setTheme }: UserPreferencesContainerProps) => {
  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <div>
      <p>Wybrany theme to: {theme}</p>
      <button onClick={handleSwitchTheme}>Swith theme</button>
    </div>
  )
}
