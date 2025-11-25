import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AutumnProvider } from "autumn-js/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./styles/global.css";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "@/components/ui/toaster";
import CartSidebar from "@/components/CartSidebar";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AutumnProvider betterAuthUrl={import.meta.env.VITE_BETTER_AUTH_URL}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <App />
            <CartSidebar />
            <Toaster />
          </CartProvider>
        </QueryClientProvider>
      </AutumnProvider>
    </ThemeProvider>
  </StrictMode>
);
