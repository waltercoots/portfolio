import workData from '@/assets/work.json'

// The full catalog, in work.json's own order — kept in sync automatically so
// adding/removing a case study there doesn't require a matching edit here.
const allSlugsInOrder = workData.projects.map((p) => p.slug)

// Add a new entry to this object to add a new variant. Nothing outside this
// file needs to change: the hash (#key) selects it, unmatched hashes and no
// hash at all fall back to "default".
export const variants = {
  default: {
    caseStudies: allSlugsInOrder,
    intro: 'Product and Web Design Lead with 20+ years building enterprise and consumer software, specializing in complex systems and scalable design architecture. Trusted partner to executive leadership, driving product strategy, and shipping high-impact features at scale.',
  },

  // Example variant, built for a job application emphasizing systems/AI work.
  'tremendous-spd': {
    caseStudies: ['ai-assistant', 'untangling-workstep', 'inform'],
    intro: 'Senior Product Designer with 20+ years building enterprise software, specializing in design systems and interfaces for complex, multi-audience products. Works AI tools like Cursor and Claude directly into the design process, from early prototyping through shipped implementation.',
    blockOverrides: {
      // A curated allow-list: only these ids show, in this order. Good for a
      // heavy trim like this one, down to 2 of ai-assistant.js's ~14 blocks.
      'ai-assistant': ['intro-paragraph', 'metrics-launch'],
    },
    blockInserts: {
      // Adds a block next to an existing one without curating anything else.
      // Here it layers on top of the blockOverrides trim above, landing right
      // after intro-paragraph, before metrics-launch. On a case study with no
      // blockOverrides entry (e.g. untangling-workstep or inform below, both
      // shown in full for this variant), the same insert would just slot into
      // the untouched, fully-authored block list.
      'ai-assistant': [
        {
          after: 'intro-paragraph',
          block: {
            id: 'tremendous-spd-systems-callout',
            type: 'paragraph',
            text: "Under the hood, this shipped as a rules engine layered with LLM calls, versioned server-side, with every notification's inputs and thresholds tracked so behavior stayed auditable as the system grew.",
          },
        },
      ],
    },
    headerOverrides: {
      'ai-assistant': {
        summary: 'LLM and logic-based notifications, reframed around the systems and AI-assisted workflow work this role emphasizes.',
        tags: ['AI', 'Design Systems', 'B2B', 'Interaction Design'],
      },
    },
    topTags: ['Design Systems', 'AI-Assisted Design Workflows', 'Figma Variables & Tokens', 'B2B Dashboard UX'],
    skillEmphasis: {
      // Full replacement, not additive: only these ids render promoted for
      // this variant. 'design-systems' is promoted by default in skills.js
      // too, so it has to be re-listed here to stay promoted — everything
      // else that's normally promoted (Figma, User Experience, etc.) reverts
      // to normal size unless it's also listed.
      promote: ['design-systems', 'ai-assisted-design-workflows'],
      // New tags that don't exist in the base list at all — always render
      // promoted, appended after the base list.
      inject: [{ id: 'cursor', label: 'Cursor' }],
    },
  },
}
