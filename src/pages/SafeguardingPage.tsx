import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";
import SafeguardingBox from "@/components/SafeguardingBox";

const SafeguardingPage = () => (
  <PageLayout>
    <Helmet>
      <title>Safeguarding & DBS — Meaningful Miles</title>
      <meta name="description" content="DBS checks and UNICEF safeguarding training requirements for Meaningful Miles volunteering placements in Delhi." />
    </Helmet>
    <section className="section-padding bg-off-white">
      <SectionDivider />
      <ScrollReveal>
        <h1 className="text-center mb-10">Safeguarding & DBS</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="font-body">
            If your volunteering placement involves working with adults with disabilities or children, you will need to complete safeguarding checks before your placement can begin. This is a non-negotiable requirement designed to protect vulnerable people.
          </p>
          <h3>What is a DBS Check?</h3>
          <p className="font-body">
            A Disclosure and Barring Service (DBS) check is a background check carried out by the UK government. An Enhanced DBS is required for anyone working with vulnerable adults or children. If you are based outside the UK, an equivalent police clearance from your country of residence may be accepted — please contact us to discuss.
          </p>
          <SafeguardingBox />
          <p className="font-body text-mid-text italic text-sm">
            Both your DBS certificate and safeguarding training certificate must be uploaded at the time of application.
          </p>
        </div>
      </ScrollReveal>
    </section>
  </PageLayout>
);

export default SafeguardingPage;
