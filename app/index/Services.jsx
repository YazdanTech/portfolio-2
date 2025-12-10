// Services (modify signature to accept props)
'use client'

import ServicesList from "../../components/mine/ServicesList";
import BetweenScroll from "../../components/mine/BetweenScroll";
import Bubbles from "../../components/mine/Bubbles";

export default function Services({ setContactMessage }) {
  // remove local message state — we use the parent's setter
  // const [message, setMessage] = useState("");

  function handleShowExample(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleRequestService(prefillText) {
    // update parent state first
    if (typeof setContactMessage === "function") {
      setContactMessage(prefillText);
    }

    // then scroll to the contact form
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  }
const servicesData = [
  {
    title: "Full Website (Frontend + Backend)",
    description: "A complete production-grade website built with a modern UI, secure backend, database, authentication, and optimized deployment.",
    deliverables: [
      "Responsive UI & components",
      "API + database architecture",
      "Production deployment & monitoring"
    ],
    exampleId: "example-fullstack",
    prefillMessage:
      "I’m interested in a full website (frontend + backend). I want to understand your workflow, the technologies you use, the timeline, and what you need from me to begin. Please explain the process in detail."
  },

  {
    title: "Backend / API Development",
    description: "Clean, scalable backend development with structured routing, authentication, and reliable database models.",
    deliverables: [
      "API endpoints & controllers",
      "Database schema design",
      "Documentation & testing"
    ],
    exampleId: "example-backend",
    prefillMessage:
      "I want backend/API development. Please share the approach you follow, how the API will be designed, what tools you use, and what information you need from me to start."
  },

  {
    title: "Payments & Integrations",
    description: "Secure integration of Stripe, PayPal, subscriptions, webhooks, and automated billing flows.",
    deliverables: [
      "Payment flow setup",
      "Integration & security",
      "Testing & verification"
    ],
    exampleId: "example-payments",
    prefillMessage:
      "I’m interested in payment integration (Stripe/PayPal). Please explain the setup process, requirements, security considerations, and how we will test everything."
  },

  {
    title: "Website Redesign",
    description: "A modern, polished redesign with improved layout, visuals, usability, and mobile responsiveness.",
    deliverables: [
      "Updated UI mockup",
      "Responsive rebuilt pages",
      "Migration & refinement"
    ],
    exampleId: "example-redesign",
    prefillMessage:
      "I want a website redesign. Tell me how you approach the redesign process, what information you need from me, and the steps involved from mockup to final delivery."
  },

  {
    title: "Hosting, Domain & Deployment",
    description: "Full setup of domain, DNS, SSL, server configuration, and clean automated deployment.",
    deliverables: [
      "Domain + DNS setup",
      "Production deployment",
      "CI/CD configuration"
    ],
    exampleId: "example-hosting",
    prefillMessage:
      "I need hosting, domain, and deployment setup. Please explain how you configure the environment, what platforms you use, and what access or details you need from me."
  }
];

  return (
    <div>
      <div className="relative w-full flex justify-center">
        <div className="absolute z-30 top-0 right-0 bottom-0 left-0 bg-(--black)"></div>
        <Bubbles />
        <div className="min-h-max w-full relative border-b z-50 border-b-(--theme-2) border-t border-t-(--theme-2) shadow-(--div-shadow) pb-20 bg-transparent">
          <section id="services" className="py-16">
            <ServicesList
              services={servicesData}
              onShowExample={handleShowExample}
              onRequestService={(prefillText) => handleRequestService(prefillText)}
            />
          </section>
        </div>

        <BetweenScroll />
        <div className="between-section">
          <h1 className="text-7xl">Taste Digital Luxury With Me..</h1>
        </div>
      </div>
    </div>
  );
}
