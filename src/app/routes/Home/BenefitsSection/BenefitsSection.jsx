import styles from "./BenefitsSection.module.css";

const content = [
  {
    heading: "Made to stay.",
    description: "Thoughtful materials, timeless forms, no unnecessary noise.",
  },
  {
    heading: "Small batches.",
    description: "Produced with care by independent makers we know by name.",
  },
  {
    heading: "Feel good, too. ",
    description:
      "Free shipping on orders over $100, always packed with intention.",
  },
];

function BenefitItem({ heading, description }) {
  return (
    <li>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
    </li>
  );
}

function Benefits() {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {content.map((item) => (
          <BenefitItem
            key={item.heading}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default Benefits;
