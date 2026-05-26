const fs = require('fs');

const linksData = `IIT Madras	https://scispace.com/resources/content/images/2021/07/IITM-Indian-Institute-of-Technology-Madras.jpeg
IIT Delhi	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8yeKAOlbZUR6uCyviAOQ8blM7D4nAv5Jkg&s
IIT Bombay	https://c.ndtvimg.com/2025-07/h1sq059_iit-bombay-and-iit-delhi_625x300_25_July_25.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738
IIT Kanpur	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCJfBP-ue2D372FtWRcLN5gBdgEAQU_slEw&s
IIT Kharagpur	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamT67B4fcWCl9ygXvwaBCcgDa1WCHuDVogg&s
IIT Roorkee	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNi7GAAfksV4F3tYz77CO7Pf683vRfp8_og&s
IIT Guwahati	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkzpCrNxoQPaGbeTNzhIdAxafOPRcepMBfw&s
IIT Hyderabad	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1FdUkbQ0lNBvw_kZ8Yg73en1p-EHFqcs_g&s
IIT BHU	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYI7ARgXp2g4D0b3BmCX0NpfUexEd1zzXFQ&s
IIT Indore	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCEUKMR6HoUZGZs_ckb2fJQ2HIC4wjW6LLQ&s
IIT Ropar	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycBQZfHD0PlNER50K1MOxUCc2-bq4z4uI0A&s
IIT Mandi	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvQKrbZqlfzdOd2WMgriZnY8B9PpqkYObwg&s
IIT Patna	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFjtoFh6k7-3aCv__gQSFxTztFWSmrIpUKg&s
IIT Gandhinagar	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5gP81ViflP8_Q_ezWaHVEgmsjpZ3gohTqg&s
IIT Bhubaneswar	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqjMJGB2kAfI_uAFxUJ7iwCTV0kom0t9aIg&s
NIT Trichy	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkABawRhdNfGO4TzL1NiAdzHtYDzUeJywJQ&s
NIT Surathkal	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOlYnc3AfZuGQibXIEYLuQ6ShbwR7PSJ10A&s
NIT Warangal	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0H7cu0LvJDmZcoV6z3srQuljE1sD_M7m0Q&s
NIT Rourkela	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4PtXmVSq-QRgS7tW372htTtDNp2R0S0Hfw&s
NIT Calicut	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NHlPv7T72pETF_8xXEFcMhAQ-GY5iCIfQw&s
NIT Kurukshetra	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-7ZnJZepky9BLGmE-Ysx6SmMpZwPZcut1A&s
NIT Allahabad	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjrc-mRSRTU9wXC5NlTn5koxyGwCdztZ2AQ&s
NIT Jaipur	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VCmL3AgaucVXRH8KdlWbP4vJSvGA7HfRSA&s
VNIT Nagpur	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQDi7YQrTREW80PysSC0fTMZL59VeIlXbmg&s
NIT Silchar	https://www.nits.ac.in/storage/Campuslife_image/Campuslife_686f57205104b.jpg
IIIT Hyderabad	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-Poi3fE3opFjZH8JxIyy7U8f8WNojFa2XA&s
IIIT Bangalore	https://img.collegepravesh.com/2014/11/IIIT-Bangalore.jpg
IIIT Delhi	https://upload.wikimedia.org/wikipedia/commons/a/a5/IIITD_Campus_2024.jpg
IIIT Allahabad	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_mAKTz4o3meMG1fRDc4j14xQverk1nGyiQ&s
IIIT Gwalior	https://preview.redd.it/i-am-fresher-at-iiit-gwalior-ama-v0-b7sdokuob2fa1.jpg?auto=webp&s=178276c94bb1574229844eb7c99e647d0f2bccec
BITS Pilani	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6FSJ0CwmC83ue9UTs17WGEpVSTiSNc-9MA&s
VIT Vellore	https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fweb_cms_content%2FVIT_Vellore_b048d11820%2FVIT_Vellore_b048d11820.jpg&w=1920&q=75
VIT Chennai	https://img.collegepravesh.com/2015/12/VIT-Chennai.jpg
VIT-AP University	https://events.vitap.ac.in/storage/event-images/01JQV3639MDS7F0M5VG962XKRW.webp
VIT Bhopal	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMprog4lieejg-Eo2_jO2DbOhdSvhrIBQPQ&s
SRM Institute of Science and Technology	https://images.shiksha.com/mediadata/images/1719317026phpTmdOdl.jpeg
Manipal Institute of Technology	https://mitmanipal.managementquotainfo.in/wp-content/uploads/sites/8/2019/12/MIT-Manipal.jpg
Thapar Institute of Engineering and Technology	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XfJyiIQJmm1vS_aX3Oo74CU8hRcMGphB_g&s
Amrita Vishwa Vidyapeetham	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GRdKsmIOkpECM4TAJL_h6_SrSrTWAeXK0g&s
KIIT Bhubaneswar	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVo1nUGj2GNFcWFWdqVH1o0QfKKZw6AUoOFA&s
Shiv Nadar University	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhvqaepD6OKbuX-t5YXj-1EZJ9HpQou59FQ&s
PES University	https://images.shiksha.com/mediadata/images/articles/1589976996phpBuHIqI.jpeg
RV College of Engineering	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRfEJh7EO4xGvEHTKlLVozhHUDttnJ0wf-w&s
BMS College of Engineering	https://admissionbackup.com/wp-content/uploads/2017/09/Direct-Admission-BMS-College-of-Engineering.jpg
MS Ramaiah Institute of Technology	https://admissionbackup.com/wp-content/uploads/2024/04/Ramaiah-Institute-of-Technology-Bangalore.jpg
DTU	https://learn.vcnow.in/wp-content/uploads/2026/01/DTU.jpg
NSUT	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl27dG9odfo43Ao4D9oLsRUJs_A1RU3SEVog&s
Jadavpur University	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgoENdKsrVgMIMMX1vLF1bxZCdSCRNh11QA&s
COEP Technological University	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkFbeI8XtQDha5r-LnyiLKQrIzB0kYXAexQ&s
Anna University	https://www.annauniv.edu/images/main-slider/slide1.jpeg`;

const linksMap = {};
linksData.trim().split('\n').forEach(line => {
  const parts = line.split('\t');
  if (parts.length >= 2) {
    const name = parts[0].trim();
    let url = parts.slice(1).join('\t').trim();
    // remove trailing dot if any from anna university link
    if (url.endsWith(' .')) {
      url = url.slice(0, -2);
    }
    linksMap[name] = url;
  }
});

let content = fs.readFileSync('data/colleges.ts', 'utf-8');

for (const [name, url] of Object.entries(linksMap)) {
  const regex = new RegExp(`"name": "${name}",([\\s\\S]*?)"image": ".*?"`, 'g');
  content = content.replace(regex, (match, p1) => {
    return `"name": "${name}",${p1}"image": "${url}"`;
  });
}

fs.writeFileSync('data/colleges.ts', content);
console.log('Successfully updated 50 college images!');
