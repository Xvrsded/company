import { CompanyContent } from '@/types/content';

export const fallbackContent: CompanyContent = {
  hero: {
    badge: 'Technology Consulting & Product Engineering',
    title: 'Modern Technology Solutions for Your Business Growth',
    subtitle:
      'We help startups and enterprises build scalable digital products, optimize engineering workflows, and accelerate innovation with measurable outcomes.',
    primaryCta: 'Book a Consultation',
    secondaryCta: 'Explore Services'
  },
  metrics: [
    { label: 'Projects Delivered', value: '120+' },
    { label: 'Deployments / Month', value: '500+' },
    { label: 'Tech Specialists', value: '15+' },
    { label: 'Years of Experience', value: '8+' }
  ],
  features: [
    {
      title: 'Cloud Architecture & DevOps',
      description:
        'Designing resilient cloud infrastructure, CI/CD pipelines, and observability systems for high-performance applications.',
      tag: 'Core Service'
    },
    {
      title: 'AI & Data Solutions',
      description:
        'Building intelligent workflows, analytics dashboards, and machine-learning features that support business decisions.',
      tag: 'Training'
    },
    {
      title: 'Custom Web & App Development',
      description:
        'Creating modern web platforms and mobile applications with a strong focus on UX, speed, and maintainability.',
      tag: 'Legal'
    },
    {
      title: 'Managed Technology Support',
      description:
        'Continuous technical support, performance monitoring, and proactive optimization to keep your systems reliable.',
      tag: 'Support'
    },
    {
      title: 'Technology Strategy Consulting',
      description:
        'Strategic guidance to reduce technical risk, improve engineering efficiency, and align product roadmaps with goals.',
      tag: 'Consulting'
    }
  ],
  storySteps: [
    {
      title: 'Discovery & Technical Assessment',
      description: 'We analyze product goals, system architecture, and bottlenecks to define a clear implementation path.'
    },
    {
      title: 'Build & Implementation',
      description: 'Our team executes development, integration, and rollout with transparent milestones and quality standards.'
    },
    {
      title: 'Monitoring & Continuous Improvement',
      description: 'We continuously evaluate performance, security, and user feedback to sustain long-term product growth.'
    }
  ],
  testimonials: [
    {
      quote:
        'Their engineering team is fast, structured, and highly collaborative. Our product release cycle is now much smoother.',
      name: 'Emily Carter',
      role: 'Product Lead, Fintech Startup'
    },
    {
      quote:
        'From architecture review to deployment automation, they helped us modernize our platform with measurable impact.',
      name: 'Michael Tan',
      role: 'CTO, Enterprise Solutions Co.'
    }
  ],
  cta: {
    title: 'Need a reliable technology partner for your next growth phase?',
    subtitle: 'Talk to our team to plan a practical roadmap for product development, infrastructure, and scaling.',
    button: 'Contact Our Team'
  }
};
