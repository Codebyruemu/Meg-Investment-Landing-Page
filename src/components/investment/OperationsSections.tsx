import Image from "next/image";
import { GrowthChartIcon } from "./InvestmentIcons";
import FutureProjects from "./FutureProject";

type Operation = {
  id: string;
  name: string;
  status?: string;
  description: string;
  image: string;
};

const operations: Operation[] = [
  {
    id: "petroleum",
    name: "Petroleum Product\nDistribution (Tarmac Sales)",
    description:
      "Supply and distribution of quality petroleum products, ensuring reliable energy supply across our markets.",
    image: "energy-fuel-nozzle.png",
  },
  {
    id: "poultry",
    name: "Poultry\nInvestment",
    description:
      "Integrated poultry operations including cold room storage, supply chain services and practical training for sustainable growth.",
    image: "operation-poultry-img-1.jpeg",
  },
  {
    id: "fish-farm",
    name: "Fish Farm\nSettlement",
    description:
      "Modern fish farming systems designed for efficient production and consistent supply.",
    image: "project-fish.jpeg",
  },
  {
    id: "real-estate",
    name: "Real Estate Services and Consulting",
    description:
      "Property development, management and advisory services for residential, commercial and strategic investments.",
    image: "operation-property.jpeg",
  },
  {
    id: "logistics",
    name: "Local and International logistics Services",
    description:
      "Property development, management and advisory services for residential, commercial and strategic investments.",
    image: "logistics-truck.jpg",
  },
  {
    id: "business-consulting",
    name: "Business Consulting",
    description:
      "Strategic advisory services to help businesses optimise operations and unlock growth opportunities.",
    image: "operation-business.jpg",
  },
];

const projects: Operation[] = [
  {
    id: "delivery-fleet",
    name: "Delivery\nTrucks / Tankers",
    status: "IN PROGRESS",
    description:
      "A fleet of delivery trucks and tankers to improve logistics, ensure timely distribution and expand our reach across the country.",
    image: "project-delivery.jpeg",
  },
  {
    id: "retail-fuel",
    name: "Retail\nFuel Stations",
    status: "PLANNED",
    description:
      "A network of retail fuel stations to bring our quality products closer to more communities and customers.",
    image: "project-fuel-station.jpeg",
  },
  {
    id: "water-factory",
    name: "Table\nWater Factory",
    status: "PLANNED",
    description:
      "A table water factory to provide safe, high-quality drinking water for homes, businesses and communities.",
    image: "project-water.jpeg",
  },
];

function OperationCard({
  item,
  future,
}: {
  item: Operation;
  future?: boolean;
}) {
  return (
    <article className="operations-card" id={item.id}>
      <div className="operations-card-image-wrap">
        <Image
          src={`/images/investment/${item.image}`}
          alt={item.name.replace(/\n/g, " ")}
          fill
          sizes={
            future
              ? "(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 25vw"
              : "(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 20vw"
          }
          className="operations-card-image"
        />
      </div>

      <div className="operations-card-content">
        <h3>{item.name}</h3>
        {item.status && <p className="operations-card-status">{item.status}</p>}
        <p className="operations-card-description">{item.description}</p>
      </div>
    </article>
  );
}

export default function OperationsSections() {
  return (
    <>
      <section
        className="operations-section"
        id="current-operations"
        aria-labelledby="current-operations-title"
      >
        <div className="investment-container">
          <div className="operations-section-header">
            <p className="operations-eyebrow">WHAT WE OWN TODAY</p>
            <h2 id="current-operations-title">Our Current Operations</h2>
            <p>
              These are the businesses we operate and manage today, delivering
              real value, creating jobs and supporting key sectors of the
              economy.
            </p>
          </div>
          <div className="operations-grid">
            {operations.map((item) => (
              <OperationCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="operations-section operations-section-future"
        id="future-projects"
        aria-labelledby="future-projects-title"
      >
        <div className="investment-container">
          {/*
          <div className="operations-section-header">
            <p className="operations-eyebrow">OUR VISION FOR TOMORROW</p>
            <h2 id="future-projects-title">What We Are Building Towards</h2>
            <p>
              These are the key projects and expansions in progress, aimed at
              strengthening our operations, increasing our reach and creating
              more value in the years ahead.
            </p>
          </div>
          <div className="operations-grid operations-grid-projects">
            {projects.map((item) => (
              <OperationCard key={item.id} item={item} future />
            ))}
          </div> */}
          <FutureProjects />

          <div className="operations-growth-callout">
            <div>
              <h3>Let’s Grow Together</h3>
              <p>
                We are always open to strategic partnerships, investment
                opportunities and collaborations that create shared value.
              </p>
            </div>
            <GrowthChartIcon size={40} />
          </div>
        </div>
      </section>
    </>
  );
}
