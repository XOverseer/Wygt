import fs from 'fs';
const fetchHtml = async () => {
  const response = await fetch('https://wheredyougetthat.org/');
  const html = await response.text();
  fs.writeFileSync('site.html', html);
};
fetchHtml();
