function Route({path, component}: {path: string, component: React.ReactNode}) {
  return window.location.pathname === path ? component : null;
}

export default Route;
