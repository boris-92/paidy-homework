import { useCallback, useReducer } from 'react';

enum TodoActionEnum {
  ADD_ITEM = 'ADD_ITEM',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
}

type TodoAction =
  | { type: TodoActionEnum.ADD_ITEM; payload: { title: string } }
  | { type: TodoActionEnum.TOGGLE_ITEM; payload: { id: string } }
  | { type: TodoActionEnum.REMOVE_ITEM; payload: { id: string } }
  | { type: TodoActionEnum.UPDATE_ITEM; payload: { id: string; title: string } };

export type Todo = { id: string; title: string; isChecked: boolean };

export type TodoState = Todo[];

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionEnum.ADD_ITEM:
      return [...state, { id: `${Math.random()}`, title: action.payload.title, isChecked: false }];
    case TodoActionEnum.TOGGLE_ITEM:
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, isChecked: !todo.isChecked } : todo));
    case TodoActionEnum.REMOVE_ITEM:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TodoActionEnum.UPDATE_ITEM:
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo));
    default:
      return state;
  }
};

const useTodos = () => {
  const [todos, dispatch] = useReducer<typeof todoReducer>(todoReducer, []);

  const addItem = useCallback((title: string) => {
    dispatch({ type: TodoActionEnum.ADD_ITEM, payload: { title } });
  }, []);

  const toggleItem = useCallback((id: string) => {
    dispatch({ type: TodoActionEnum.TOGGLE_ITEM, payload: { id } });
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: TodoActionEnum.REMOVE_ITEM, payload: { id } });
  }, []);

  const updateItem = useCallback((id: string, title: string) => {
    dispatch({ type: TodoActionEnum.UPDATE_ITEM, payload: { id, title } });
  }, []);

  return {
    todos,
    addItem,
    toggleItem,
    removeItem,
    updateItem,
  };
};

export default useTodos;
