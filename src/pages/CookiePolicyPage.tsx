import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

const CookiePolicyPage = () => (
  <PageLayout>
    <Helmet>
      <title>Cookie Policy — Meaningful Miles</title>
      <meta
        name="description"
        content="How Meaningful Miles Volunteering and Travel Ltd uses cookies and similar technologies."
      />
    </Helmet>
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-10">Cookie Policy</h1>
        <div className="max-w-2xl mx-auto space-y-8 font-body text-base leading-relaxed">
          <div>
            <h3>1. What Are Cookies?</h3>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help websites function properly, improve user experience, and provide analytics information.
            </p>
          </div>

          <div>
            <h3>2. How We Use Cookies</h3>
            <p>We use cookies to:</p>
            <ul className="space-y-2 mt-3 list-disc pl-6">
              <li>Ensure website functionality</li>
              <li>Analyse website traffic and usage</li>
              <li>Improve website performance and user experience</li>
              <li>Remember user preferences</li>
            </ul>
          </div>

          <div>
            <h3>3. Types of Cookies We Use</h3>
            <h4 className="mt-4 font-semibold">Essential Cookies</h4>
            <p>
              These cookies are necessary for the website to operate correctly and cannot usually be disabled.
            </p>
            <h4 className="mt-4 font-semibold">Analytics Cookies</h4>
            <p>
              We use analytics tools such as Google Analytics to understand how visitors interact with our website. These cookies help us improve content, navigation, and performance.
            </p>
            <p className="mt-3">Analytics cookies may collect information such as:</p>
            <ul className="space-y-2 mt-3 list-disc pl-6">
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Device/browser type</li>
              <li>Approximate geographic location</li>
            </ul>
          </div>

          <div>
            <h3>4. Managing Cookies</h3>
            <p>You can control or delete cookies through:</p>
            <ul className="space-y-2 mt-3 list-disc pl-6">
              <li>Our cookie consent banner</li>
              <li>Your browser settings</li>
            </ul>
            <p className="mt-3">Please note that disabling some cookies may affect website functionality.</p>
          </div>

          <div>
            <h3>5. Third-Party Cookies</h3>
            <p>
              Some third-party services embedded on our website may place cookies on your device, including analytics and media services.
            </p>
          </div>

          <div>
            <h3>6. Changes to This Cookie Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h3>7. Contact</h3>
            <p>If you have questions about our use of cookies, please contact:</p>
            <p className="mt-3">
              Meaningful Miles Volunteering and Travel Ltd<br />
              <a href="mailto:hello@meaningfulmiles.travel" className="text-burnt-orange hover:underline">
                hello@meaningfulmiles.travel
              </a>
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default CookiePolicyPage;
