import { CombinedProviders } from "./stores/CombinedProviders";
import "./assets/tailwind/styles.css";
import AppNavigator from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      suspense: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CombinedProviders>
        <div className="app">
          <AppNavigator />
          <ToastContainer position="bottom-right"/>
        </div>
      </CombinedProviders>
    </QueryClientProvider>
  );
}

export default App;
