'use client'

import { useState, useRef } from "react";
import ServiceList from "../../components/mine/ServicesList";
import BetweenScroll from "../../components/mine/BetweenScroll";
import Bubbles from "../../components/mine/Bubbles";

export default function Services({
  setActiveContactTab,   // you already have these setters
  setWaMessage,
  setEmMessage
}) {
  const contactSectionRef = useRef(null);

  const [pendingPrefill, setPendingPrefill] = useState("");
  const [chooseMethod, setChooseMethod] = useState(false);

  // --- Example handler ---
  function handleShowExample(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  // --- When user clicks "I want this service" ---
  function handleRequestService(prefillText) {
    setPendingPrefill(prefillText);
    setChooseMethod(true);
  }

  // --- On choosing WhatsApp or Email ---
  function confirmMethod(method) {
    // Scroll to contact section
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Fill message in correct tab
    if (method === "wa") {
      setActiveContactTab("1"); 
      setWaMessage(pendingPrefill);
    } else {
      setActiveContactTab("2");
      setEmMessage(pendingPrefill);
    }

    setChooseMethod(false);
    setPendingPrefill("");
  }

  // --- Service data ---
  const servicesData = [
    {
      title: "1. Full Website (Frontend + Backend)",
      description: "Build a production-ready web app: frontend, backend, auth, deployment.",
      deliverables: [
        "Routing & responsive UI",
        "REST/GraphQL API",
        "Deployment + monitoring"
      ],
      exampleId: "example-fullstack",
      prefillMessage: "Hi, I am interested in a full website (frontend + backend). Please give me details."
    },
    {
      title: "2. Backend / API Design",
      description: "Robust server architecture, endpoints, auth, and DB design.",
      deliverables: [
        "API spec",
        "Database schema",
        "Tests & docs"
      ],
      exampleId: "example-backend",
      prefillMessage: "Hi, I want backend/API design. I need details about structure and pricing."
    },
    {
      title: "3. Payments & Integrations",
      description: "Stripe/PayPal, subscriptions, webhooks, invoicing flows.",
      deliverables: [
        "Payment flow",
        "Fraud mitigation",
        "Integration docs"
      ],
      exampleId: "example-payments",
      prefillMessage: "I want payment integration (Stripe/PayPal). Please explain next steps."
    },
    {
      title: "4. Redesign / UI Refresh",
      description: "Polished UI with improved conversion and accessibility.",
      deliverables: [
        "Mockups",
        "Responsive HTML/CSS",
        "Rollout plan"
      ],
      exampleId: "example-redesign",
      prefillMessage: "I want a UI redesign. Tell me the process and requirements."
    },
    {
      title: "5. Animations, 3D & Interactive",
      description: "Animations, Lottie, WebGL/three.js components.",
      deliverables: [
        "Interactive demo",
        "Optimized assets",
        "Mobile fallback"
      ],
      exampleId: "example-3d",
      prefillMessage: "I’m interested in animations/3D. Please give details."
    },
    {
      title: "6. Hosting, Domain & Deployment",
      description: "DNS, SSL, CI/CD; migration to Vercel / DO.",
      deliverables: [
        "DNS config",
        "Automated deploys",
        "Rollback plan"
      ],
      exampleId: "example-hosting",
      prefillMessage: "I want hosting/domain/deployment help. Share steps."
    },
    {
      title: "7. Performance, Security & Maintenance",
      description: "Audits, speed tuning, security patches.",
      deliverables: [
        "Lighthouse report",
        "Caching strategy",
        "Monthly checks"
      ],
      exampleId: "example-maintenance",
      prefillMessage: "Hi, I'm interested in performance/security maintenance."
    },
    {
      title: "Discovery / Project Scoping",
      description: "Clear requirements, timeline, and estimate.",
      deliverables: [
        "Scope document",
        "Milestone plan",
        "Quote or estimate"
      ],
      exampleId: "example-discovery",
      prefillMessage: "I want discovery/scoping for my project."
    }
  ];

  return (
    <div>
      <div className="relative w-full flex justify-center">
        <div className="absolute z-30 top-0 right-0 bottom-0 left-0 bg-(--black)"></div>

        <Bubbles />

        <div className="min-h-max w-full relative border-b z-50 border-b-(--theme-2) border-t border-t-(--theme-2) shadow-(--div-shadow) pb-20 bg-transparent">
          <section id="services" className="py-16">

            <ServiceList
              services={servicesData}
              onShowExample={handleShowExample}
              onRequestService={handleRequestService}
            />

          </section>

          {/* Contact section reference */}
          <div id="contact" ref={contactSectionRef} />
        </div>

        <BetweenScroll />
        <div className="between-section">
          <h1 className="text-7xl">Taste Digital Luxury With Me..</h1>
        </div>
      </div>

      {/* Method choice modal (unstyled) */}
      {chooseMethod && (
        <div>
          <div>
            <p>How do you want to contact?</p>
            <button type="button" onClick={() => confirmMethod("wa")}>WhatsApp</button>
            <button type="button" onClick={() => confirmMethod("email")}>Email</button>
          </div>
        </div>
      )}
    </div>
  );
}
