import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail, formatContactEmail, formatBookingEmail, formatRDCreditsEmail, formatEventEmail, formatJoinEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, company, service, message } = req.body;
      
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const emailData = formatContactEmail({ name, email, phone, company, service, message });
      const success = await sendEmail({
        to: "liv8ent@gmail.com",
        from: "noreply@liv8.co",
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      });

      if (success) {
        res.json({ message: "Contact form submitted successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  // Booking form submission
  app.post("/api/booking", async (req, res) => {
    try {
      const { name, email, phone, company, service, date, time, message } = req.body;
      
      if (!name || !email || !phone || !service || !date || !time) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const emailData = formatBookingEmail({ name, email, phone, company, service, date, time, message });
      const success = await sendEmail({
        to: "liv8ent@gmail.com",
        from: "noreply@liv8.co",
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      });

      if (success) {
        res.json({ message: "Booking request submitted successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Booking form error:", error);
      res.status(500).json({ error: "Failed to process booking request" });
    }
  });

  // R&D Credits form submission
  app.post("/api/rd-credits", async (req, res) => {
    try {
      const { company, industry, revenue, rd_spend, name, email, phone, authorize } = req.body;
      
      if (!company || !industry || !revenue || !rd_spend || !name || !email || !phone || !authorize) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const emailData = formatRDCreditsEmail({ company, industry, revenue, rd_spend, name, email, phone, authorize });
      const success = await sendEmail({
        to: "liv8ent@gmail.com",
        from: "noreply@liv8.co",
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      });

      if (success) {
        res.json({ message: "R&D credits request submitted successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      console.error("R&D credits form error:", error);
      res.status(500).json({ error: "Failed to process R&D credits request" });
    }
  });

  // Event request form submission
  app.post("/api/event", async (req, res) => {
    try {
      const { eventType, eventDate, eventLocation, guestCount, budget, name, email, phone, company, description } = req.body;
      
      if (!eventType || !eventDate || !eventLocation || !guestCount || !name || !email || !phone) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const emailData = formatEventEmail({ eventType, eventDate, eventLocation, guestCount, budget, name, email, phone, company, description });
      const success = await sendEmail({
        to: "liv8ent@gmail.com",
        from: "noreply@liv8.co",
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      });

      if (success) {
        res.json({ message: "Event request submitted successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Event form error:", error);
      res.status(500).json({ error: "Failed to process event request" });
    }
  });

  // Join application form submission
  app.post("/api/join", async (req, res) => {
    try {
      const { name, email, phone, experience, interest, background } = req.body;
      
      if (!name || !email || !phone || !experience || !interest) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const emailData = formatJoinEmail({ name, email, phone, experience, interest, background });
      const success = await sendEmail({
        to: "liv8ent@gmail.com",
        from: "noreply@liv8.co",
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      });

      if (success) {
        res.json({ message: "Join application submitted successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      console.error("Join form error:", error);
      res.status(500).json({ error: "Failed to process join application" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
