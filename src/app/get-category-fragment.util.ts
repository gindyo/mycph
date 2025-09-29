// Utility for generating safe fragment IDs from category names
export function getCategoryFragment(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
