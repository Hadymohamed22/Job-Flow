import { useCallback, useEffect, useRef, useState } from "react";

interface UseSoftDeleteOptions<TError = unknown> {
  deleteFn: (
    id: string,
    options?: { onError?: (error: TError) => void },
  ) => void;
  onError?: (error: TError) => void;
  delayMs?: number;
}

export function useSoftDelete<TError = unknown>({
  deleteFn,
  onError,
  delayMs = 5000,
}: UseSoftDeleteOptions<TError>) {
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  const cancelDeleteTimer = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const startDeleteTimer = useCallback(
    (id: string) => {
      cancelDeleteTimer(id);

      const timer = setTimeout(() => {
        deleteFn(id, { onError });
        timersRef.current.delete(id);
      }, delayMs);

      timersRef.current.set(id, timer);
    },
    [cancelDeleteTimer, deleteFn, onError, delayMs],
  );

  const handleDelete = useCallback(
    (id: string) => {
      setDeletedIds((prev) => new Set(prev).add(id));
      startDeleteTimer(id);
    },
    [startDeleteTimer],
  );

  const handleUndoDelete = useCallback(
    (id: string) => {
      setDeletedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      cancelDeleteTimer(id);
    },
    [cancelDeleteTimer],
  );

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach(clearTimeout);
      timers.clear();
    };
  }, []);

  const isDeleted = useCallback(
    (id: string) => deletedIds.has(id),
    [deletedIds],
  );

  return { deletedIds, isDeleted, handleDelete, handleUndoDelete };
}
