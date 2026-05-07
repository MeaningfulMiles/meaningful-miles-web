import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPolicyPage = () => (
  <PageLayout>
    <Helmet>
      <title>Privacy Policy — Meaningful Miles</title>
      <meta
        name="description"
        content="How Meaningful Miles Volunteering and Travel Ltd collects, uses, and protects your personal information."
      />
    </Helmet>
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-10">Privacy Policy</h1>
        <div className="max-w-2xl mx-auto space-y-8 font-body text-base leading-relaxed">
          <div>
            <h3>1. Introduction</h3>
            <p>
              This Privacy Policy explains how Meaningful Miles Volunteering and Travel Ltd ("we", "our", or "us") collects, uses, and protects your personal information when you visit our website.
            </p>
            <p className="mt-3">
              We are committed to protecting your privacy and handling your personal data transparently and responsibly in accordance with applicable UK data protection laws, including the UK GDPR and Data Protection Act 2018.
            </p>
          </div>

          <div>
            <h3>2. Information We Collect</h3>
            <p>We may collect and process the following information:</p>
            <ul className="space-y-2 mt-3 list-disc pl-6">
              <li>Contact information you voluntarily provide (such as name and email address)</li>
              <li>Website usage data and analytics</li>
              <li>Device and browser information</li>
              <li>IP address and approximate location data</li>
              <li>Information submitted through forms or enquiries</li>
            </ul>
          </div>

          <div>
            <h3>3. How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul className="space-y-2 mt-3 list-disc pl-6">
              <li>Respond to enquiries and communications</li>
              <li>Improve our website and services</li>
              <li>Monitor website performance and visitor behaviour</li>
              <li>Maintain website security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h3>4. Analytics and Tracking</h3>
            <p>
              We use third-party analytics services, including Google Analytics, to understand how visitors use our website. These services may use cookies and similar technologies to collect information about website interactions.
            </p>
            <p className="mt-3">
              You can control cookie preferences through our cookie banner and your browser settings.
            </p>
          </div>

          <div>
            <h3>5. Sharing Your Information</h3>
            <p>
              We do not sell your personal information. We may share data with trusted third-party service providers who support our website operations, analytics, hosting, or communications, where necessary.
            </p>
          </div>

          <div>
            <h3>6. International Visitors</h3>
            <p>
              As our website is accessible globally, your information may be processed in countries outside your own jurisdiction. We take reasonable measures to ensure appropriate protection of personal data.
            </p>
          </div>

          <div>
            <h3>7. Data Security</h3>
            <p>
              We take reasonable technical and organisational measures designed to help protect personal information from unauthorised access, misuse, disclosure, alteration, or loss.
            </p>
          </div>

          <div>
            <h3>8. Your Rights</h3>
            <p>Depending on your location, you may have rights relating to your personal data, including:</p>
            <ul className="space-y-2 mt-3 list-disc pl-6">
              <li>Access to your data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Withdrawal of consent</li>
              <li>Objection to certain processing activities</li>
            </ul>
          </div>

          <div>
            <h3>9. Contact</h3>
            <p>If you have questions about this Privacy Policy or your personal data, please contact:</p>
            <p className="mt-3">
              Meaningful Miles Volunteering and Travel Ltd<br />
              <a href="mailto:hello@meaningfulmiles.travel" className="text-burnt-orange hover:underline">
                hello@meaningfulmiles.travel
              </a>
              <br />
              71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
            </p>
          </div>

          <div>
            <h3>10. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy periodically. Any updates will be posted on this page with a revised effective date.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default PrivacyPolicyPage;
