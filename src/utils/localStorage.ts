export function loadState() {
  try {
    const serialized = localStorage.getItem("tasks");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (error) {
    return undefined;
  }
}

export function saveState(state: any) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("tasks", serialized);
  } catch {}
}
