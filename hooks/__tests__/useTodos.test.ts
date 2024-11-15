import { renderHook, act, waitFor } from '@testing-library/react';

import useTodos, { Todo } from '@/hooks/useTodos';

import storage, { StorageKeys } from '@/utils/storage';

jest.mock('@/utils/storage');

describe('useTodos', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with empty todos when persistence is disabled', () => {
    const { result } = renderHook(() => useTodos({ isPersistenceEnabled: false }));

    expect(result.current.todos).toEqual([]);
  });

  it('should load todos from storage when persistence is enabled', async () => {
    const mockTodos: Todo[] = [{ id: '1', title: 'Test Todo', isChecked: false }];

    (storage.getItem as jest.Mock).mockResolvedValue(mockTodos);

    const { result } = renderHook(() => useTodos({ isPersistenceEnabled: true }));

    waitFor(() => {
      expect(result.current.todos).toEqual(mockTodos);
    });

    expect(storage.getItem).toHaveBeenCalledWith(StorageKeys.TODOS);
  });

  it('should add a todo', () => {
    const { result } = renderHook(() => useTodos({ isPersistenceEnabled: false }));

    act(() => result.current.addItem('New Todo'));

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe('New Todo');
  });

  it('should remove a todo', () => {
    const { result } = renderHook(() => useTodos({ isPersistenceEnabled: false }));

    act(() => result.current.addItem('Todo to Delete'));

    const idToDelete = result.current.todos[0].id;

    act(() => result.current.removeItem(idToDelete));

    expect(result.current.todos).toHaveLength(0);
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useTodos({ isPersistenceEnabled: false }));

    act(() => {
      result.current.addItem('Todo to Toggle');
    });

    const idToToggle = result.current.todos[0].id;

    act(() => {
      result.current.toggleItem(idToToggle);
    });

    expect(result.current.todos[0].isChecked).toBe(true);
  });

  it('should update a todo', () => {
    const { result } = renderHook(() => useTodos({ isPersistenceEnabled: false }));

    act(() => {
      result.current.addItem('Todo to Update');
    });

    const idToUpdate = result.current.todos[0].id;

    act(() => {
      result.current.updateItem(idToUpdate, 'Updated Todo');
    });

    expect(result.current.todos[0].title).toBe('Updated Todo');
  });

  it('should save todos to storage on change when persistence is enabled', async () => {
    const { result } = renderHook(() => useTodos({ isPersistenceEnabled: true }));

    act(() => result.current.addItem('Persistent Todo'));

    expect(storage.setItem).toHaveBeenCalledWith(StorageKeys.TODOS, result.current.todos);
  });
});
