/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'scispace.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'c.ndtvimg.com' },
      { protocol: 'https', hostname: 'www.nits.ac.in' },
      { protocol: 'https', hostname: 'img.collegepravesh.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'preview.redd.it' },
      { protocol: 'https', hostname: 'www.learningroutes.in' },
      { protocol: 'https', hostname: 'events.vitap.ac.in' },
      { protocol: 'https', hostname: 'images.shiksha.com' },
      { protocol: 'https', hostname: 'mitmanipal.managementquotainfo.in' },
      { protocol: 'https', hostname: 'admissionbackup.com' },
      { protocol: 'https', hostname: 'learn.vcnow.in' },
      { protocol: 'https', hostname: 'www.annauniv.edu' },
      { protocol: 'https', hostname: 'www.iitmz.ac.in' }
    ],
  },
};

export default nextConfig;
