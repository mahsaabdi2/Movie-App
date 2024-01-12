import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./components/MainRouter";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <div className="bg-black bg-cover">
      <QueryClientProvider client={queryClient}>
        <Loading />
        <BrowserRouter>
          <NavBar />
          <MainRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
