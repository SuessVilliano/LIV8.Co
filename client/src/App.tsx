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
import FundingCredits from "@/pages/FundingCredits";
import EventsLogistics from "@/pages/EventsLogistics";
import BookConsultation from "@/pages/BookConsultation";
import NotFound from "@/pages/not-found";
import { useModals } from "@/hooks/useModals";

function Router() {
  const { setJoinModal } = useModals();

  const handleBookingClick = () => {
    window.location.href = '/book-consultation';
  };

  return (
    <Switch>
      <Route path="/" component={() => <Home onBookingClick={handleBookingClick} onJoinClick={() => setJoinModal(true)} />} />
      <Route path="/services" component={() => <Services onBookingClick={handleBookingClick} />} />
      <Route path="/divisions" component={() => <Divisions onBookingClick={handleBookingClick} />} />
      <Route path="/join" component={() => <Join onJoinClick={() => setJoinModal(true)} />} />
      <Route path="/book" component={Book} />
      <Route path="/contact" component={Contact} />
      <Route path="/book-consultation" component={BookConsultation} />
      <Route path="/funding-credits" component={() => <FundingCredits onBookingClick={handleBookingClick} />} />
      <Route path="/events-logistics" component={() => <EventsLogistics onBookingClick={handleBookingClick} />} />
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
