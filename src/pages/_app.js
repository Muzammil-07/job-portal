import "@/styles/globals.css";
import { QueryClientProvider,QueryClient } from "react-query";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
  const queryClient= new QueryClient();
  return (
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>)
}
