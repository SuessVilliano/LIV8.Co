import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Divisions from "@/pages/Divisions";
import Join from "@/pages/Join";
import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useModals } from "@/hooks/useModals";

function Router() {
  const { setBookingModal, setJoinModal } = useModals();

  return (
    <Switch>
      <Route path="/" component={() => <Home onBookingClick={() => setBookingModal(true)} onJoinClick={() => setJoinModal(true)} />} />
      <Route path="/services" component={() => <Services onBookingClick={() => setBookingModal(true)} />} />
      <Route path="/divisions" component={() => <Divisions onBookingClick={() => setBookingModal(true)} />} />
      <Route path="/join" component={() => <Join onJoinClick={() => setJoinModal(true)} />} />
      <Route path="/book" component={Book} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
