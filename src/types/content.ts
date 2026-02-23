export type HeroContent = {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export type Feature = {
  title: string;
  description: string;
  tag: string;
};

export type StoryStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type CompanyContent = {
  hero: HeroContent;
  metrics: Array<{ label: string; value: string }>;
  features: Feature[];
  storySteps: StoryStep[];
  testimonials: Testimonial[];
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
};
