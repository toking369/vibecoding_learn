import { getCollection } from 'astro:content';

export async function getAllPhases() {
  const phases = await getCollection('phases');
  return phases.sort((a, b) => a.data.order - b.data.order);
}

export async function getPhaseBySlug(slug: string) {
  const phases = await getCollection('phases');
  return phases.find((p) => p.id === slug);
}

export async function getDocsBySection(section: string) {
  const docs = await getCollection(section as 'intro' | 'setup' | 'cases');
  return docs.sort((a, b) => a.data.order - b.data.order);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
