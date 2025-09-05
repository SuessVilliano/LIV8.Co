import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail, formatContactEmail, formatBookingEmail, formatRDCreditsEmail, formatEventEmail, formatJoinEmail } from "./email";
import { trackReferral, trackSale, getAffiliateIdFromRequest } from "./affiliate";
import { sendToWebhook, formatContactWebhook, formatBookingWebhook, formatRDCreditsWebhook, formatJoinWebhook, formatEventWebhook } from "./webhook";

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

      // Track affiliate referral
      const affiliateId = getAffiliateIdFromRequest(req);
      await trackReferral({
        affiliateId,
        name,
        email,
        plan: service || "Contact Inquiry",
        status: "lead"
      });

      // Send to webhook for automation
      const webhookData = formatContactWebhook({ name, email, phone, company, service, message }, affiliateId);
      await sendToWebhook(webhookData);

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

      // Track affiliate referral for booking
      const affiliateId = getAffiliateIdFromRequest(req);
      await trackReferral({
        affiliateId,
        name,
        email,
        plan: service || "Booking Request",
        status: "qualified_lead"
      });

      // Send to webhook for automation
      const webhookData = formatBookingWebhook({ name, email, phone, company, service, date, time, message }, affiliateId);
      await sendToWebhook(webhookData);

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

      // Track affiliate referral for R&D credits
      const affiliateId = getAffiliateIdFromRequest(req);
      await trackReferral({
        affiliateId,
        name,
        email,
        plan: `R&D Credits - ${industry}`,
        status: "high_value_lead",
        referredUserExternalId: company
      });

      // Send to webhook for automation
      const webhookData = formatRDCreditsWebhook({ company, industry, revenue, rd_spend, name, email, phone }, affiliateId);
      await sendToWebhook(webhookData);

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

      // Track affiliate referral for event request
      const affiliateId = getAffiliateIdFromRequest(req);
      await trackReferral({
        affiliateId,
        name,
        email,
        plan: `Event - ${eventType}`,
        status: "qualified_lead",
        referredUserExternalId: company
      });

      // Send to webhook for automation
      const webhookData = formatEventWebhook({ eventType, eventDate, eventLocation, guestCount, budget, name, email, phone, company, description }, affiliateId);
      await sendToWebhook(webhookData);

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

      // Track affiliate referral for join application
      const affiliateId = getAffiliateIdFromRequest(req);
      await trackReferral({
        affiliateId,
        name,
        email,
        plan: `Join Application - ${interest}`,
        status: "application"
      });

      // Send to webhook for automation
      const webhookData = formatJoinWebhook({ name, email, phone, experience, interest, background }, affiliateId);
      await sendToWebhook(webhookData);

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

  // Affiliate tracking endpoints
  app.post("/api/affiliate/referral", async (req, res) => {
    try {
      const { affiliateId, name, email, plan, status, referredUserExternalId } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      const success = await trackReferral({
        affiliateId,
        name,
        email,
        plan,
        status,
        referredUserExternalId
      });

      if (success) {
        res.json({ message: "Referral tracked successfully" });
      } else {
        res.status(500).json({ error: "Failed to track referral" });
      }
    } catch (error) {
      console.error("Affiliate referral tracking error:", error);
      res.status(500).json({ error: "Failed to process referral tracking" });
    }
  });

  app.post("/api/affiliate/sale", async (req, res) => {
    try {
      const { referralId, externalId, externalInvoiceId, totalEarned, commissionRate } = req.body;
      
      if (!referralId || !totalEarned) {
        return res.status(400).json({ error: "Referral ID and total earned are required" });
      }

      const success = await trackSale({
        referralId,
        externalId,
        externalInvoiceId,
        totalEarned,
        commissionRate
      });

      if (success) {
        res.json({ message: "Sale tracked successfully" });
      } else {
        res.status(500).json({ error: "Failed to track sale" });
      }
    } catch (error) {
      console.error("Affiliate sale tracking error:", error);
      res.status(500).json({ error: "Failed to process sale tracking" });
    }
  });

  // Newsletter signup form
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email, firstName, interests } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      // Track affiliate referral for newsletter signup
      const affiliateId = getAffiliateIdFromRequest(req);
      await trackReferral({
        affiliateId,
        name: firstName || "Newsletter Subscriber",
        email,
        plan: `Newsletter - ${interests || "General"}`,
        status: "subscriber"
      });

      // Send to webhook for automation
      const webhookData = {
        form_type: 'newsletter',
        timestamp: new Date().toISOString(),
        affiliate_id: affiliateId,
        name: firstName,
        email,
        interests
      };
      await sendToWebhook(webhookData);

      // Send confirmation email
      const emailData = {
        subject: "New Newsletter Subscription - LIV8",
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Name:</strong> ${firstName || 'Not provided'}</p>
          <p><strong>Interests:</strong> ${interests || 'Not specified'}</p>
          <p><strong>Affiliate ID:</strong> ${affiliateId || 'Direct'}</p>
        `,
        text: `New Newsletter Subscription\nEmail: ${email}\nName: ${firstName || 'Not provided'}\nInterests: ${interests || 'Not specified'}\nAffiliate: ${affiliateId || 'Direct'}`
      };

      const success = await sendEmail({
        to: "liv8ent@gmail.com",
        from: "noreply@liv8.co",
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      });

      res.json({ message: "Newsletter subscription successful" });
    } catch (error) {
      console.error("Newsletter signup error:", error);
      res.status(500).json({ error: "Failed to process newsletter signup" });
    }
  });

  // Service inquiry form
  app.post("/api/service-inquiry", async (req, res) => {
    try {
      const { name, email, phone, company, service, budget, timeline, message } = req.body;
      
      if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Track affiliate referral for service inquiry
      const affiliateId = getAffiliateIdFromRequest(req);
      await trackReferral({
        affiliateId,
        name,
        email,
        plan: `Service Inquiry - ${service}`,
        status: "high_value_lead",
        referredUserExternalId: company
      });

      // Send to webhook for automation
      const webhookData = {
        form_type: 'service_inquiry',
        timestamp: new Date().toISOString(),
        affiliate_id: affiliateId,
        name,
        email,
        phone,
        company,
        service,
        budget,
        timeline,
        message
      };
      await sendToWebhook(webhookData);

      // Send notification email
      const emailData = {
        subject: `New Service Inquiry - ${service} - LIV8`,
        html: `
          <h2>New Service Inquiry</h2>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <p><strong>Affiliate ID:</strong> ${affiliateId || 'Direct'}</p>
        `,
        text: `New Service Inquiry\nService: ${service}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'Not provided'}\nBudget: ${budget || 'Not specified'}\nTimeline: ${timeline || 'Not specified'}\nMessage: ${message}\nAffiliate: ${affiliateId || 'Direct'}`
      };

      const success = await sendEmail({
        to: "liv8ent@gmail.com",
        from: "noreply@liv8.co",
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text
      });

      res.json({ message: "Service inquiry submitted successfully" });
    } catch (error) {
      console.error("Service inquiry error:", error);
      res.status(500).json({ error: "Failed to process service inquiry" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
