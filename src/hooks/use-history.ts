export function useHistory() {
  let history: string[] = [];

  const addToHistory = (operation: string, result: string) => {
    history = [...history, `${operation} = ${result}`];
  };

  const getHistory = () => history;

  return {
    addToHistory,
    getHistory
  };
}
