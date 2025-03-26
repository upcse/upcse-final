// Asset URLs from GitHub Pages
const GITHUB_PAGES_URL = 'https://upcse.github.io/assets';

export const ASSET_PATHS = {
  logos: {
    main: `${GITHUB_PAGES_URL}/logos/main.png`,
    olympic: `${GITHUB_PAGES_URL}/logos/olympic.png`,
    nehru: `${GITHUB_PAGES_URL}/logos/nehru.png`,
    indian: `${GITHUB_PAGES_URL}/logos/indian.png`,
    international: `${GITHUB_PAGES_URL}/logos/international.png`
  },
  gallery: Array.from({ length: 48 }, (_, i) => ({
    id: `gallery-${i + 1}`,
    url: `${GITHUB_PAGES_URL}/gallery/image${i + 1}.jpg`
  })),
  coreTeam: {
    member1: `${GITHUB_PAGES_URL}/core-team/member1.jpg`,
    member2: `${GITHUB_PAGES_URL}/core-team/member2.jpg`,
    member3: `${GITHUB_PAGES_URL}/core-team/member3.jpg`
  }
};

export function getAssetUrl(path: string): string {
  return `${GITHUB_PAGES_URL}/${path}`;
}