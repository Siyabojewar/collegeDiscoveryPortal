const fs = require('fs');

const updates = {
  "IIT Madras": "https://www.iitmz.ac.in/_next/image?url=%2Fbanner_front.jpg&w=3840&q=75",
  "VIT Chennai": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojSH8r01spJVRhs-dZpq5Fhw0XPkmSOV9Dw&s",
  "IIIT Bangalore": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDDumMK3F5Iuvtz_OOVNbWX6Ia9z4ZzOnnw&s"
};

let content = fs.readFileSync('data/colleges.ts', 'utf-8');

for (const [name, url] of Object.entries(updates)) {
  const regex = new RegExp(`"name": "${name}",([\\s\\S]*?)"image": ".*?"`, 'g');
  content = content.replace(regex, (match, p1) => {
    return `"name": "${name}",${p1}"image": "${url}"`;
  });
}

fs.writeFileSync('data/colleges.ts', content);
console.log('Successfully updated 3 specific college images!');
