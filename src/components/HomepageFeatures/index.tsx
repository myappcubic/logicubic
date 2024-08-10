import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Binary, Users, BookOpen } from "lucide-react";
import { useColorMode } from "@docusaurus/theme-common";

type FeatureItem = {
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  description: JSX.Element;
  colorLight: string;
  colorDark: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Data Structures & Algorithms",
    subtitle: "Grasp the Fundamentals",
    Icon: Binary,
    description: (
      <>
        Efficient implementations and practical applications for real-world
        problem-solving.
      </>
    ),
    colorDark: "hsl(180, 70%, 85%)",
    colorLight: "hsl(180, 70%, 30%)",
  },
  {
    title: "By AppCubic",
    subtitle: "Expert Guidance",
    Icon: Users,
    description: (
      <>
        Leverage our decade of industry experience and partnerships for
        cutting-edge solutions.
      </>
    ),
    colorDark: "hsl(120, 70%, 85%)",
    colorLight: "hsl(120, 70%, 30%)",
  },
  {
    title: "Crystal Clear Concepts",
    subtitle: "Learn with Ease",
    Icon: BookOpen,
    description: (
      <>
        Simplified explanations and intuitive examples to grasp complex topics
        effortlessly.
      </>
    ),
    colorDark: "hsl(60, 70%, 85%)",
    colorLight: "hsl(60, 70%, 30%)",
  },
];

function Feature({
  title,
  subtitle,
  Icon,
  description,
  colorLight,
  colorDark,
}: FeatureItem) {
  const { colorMode } = useColorMode();
  const iconColor = colorMode === "dark" ? colorDark : colorLight;

  return (
    <div className={clsx("col col--4")}>
      <div className={`text--center ${styles.iconWrapper}`}>
        <Icon
          className={styles.featureSvg}
          role="img"
          size={48}
          color={iconColor}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <Heading as="h4" className={`${styles.h4_styles}`}>
          {subtitle}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
