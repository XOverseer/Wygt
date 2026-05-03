import fs from 'fs';
const html = fs.readFileSync('site.html', 'utf8');
const counts: Record<string, number> = {};
const matches = html.match(/rgba?\([^)]+\)/g);
if (matches) {
  matches.forEach((c) => {
    const color = c.toLowerCase();
    counts[color] = (counts[color] || 0) + 1;
  });
}
console.log(Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0, 15));
