// gitprofile.config.js

const config = {
  github: {
    username: 'ar3h1d', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['portfolio'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'barbod-mousavi-27852437',
    twitter: '',
    mastodon: 'sgb3dayk@mstdn.social',
    facebook: '',
    instagram: 'ar3h1d',
    youtube: 'ar3h1d', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: 'arshid.mo',
    telegram: 'https://t.me/AR3H1D',
    website: 'https://gravatar.com/ar3h1d',
    phone: '',
    email: 'barbod.mousavi@outlook.com',
  },
  resume: {
    fileUrl:
      'https://github.com/ar3h1d/portfolio/blob/a4608665295dc31a883e371389e96bfecee77008/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    '_Video Editing_',
    'Adobe Premiere Pro',
    'Adobe Audition',
    'DaVinci Resolve',
    'Kden Live',
    'Avid Media Composer',
    '_Graphic Design_',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'GIMP',
    'InkScape',
    '_Motion Graphic and Animation_',
    'Adobe After Effects',
    'Blender',
    '_Digital Art_',
    'Krita',
    '_Programming_',
    'Python',
    'Javascript',
    '_Research_',
    'Anytype',
    'Obsidian',
    'Raindrop',
  ],
  experiences: [
    {
      company: 'Eniac Tech',
      position: 'Research and Development Specialist',
      from: 'April 2022',
      to: 'July 2023',
      companyLink: 'https://www.eniac-tech.com/',
    },
    {
      company: '19;92 Studio',
      position: 'Co-founder, Directing, Editing, Social Media',
      from: 'July 2020',
      to: 'July 2023',
      companyLink: 'https://1992studio.wixsite.com/site?lang=en',
    },
    {
      company: 'Snow in the Abyss Short Film',
      position: 'Edit, Sound design, Color Correction',
      from: '2019',
      to: '2020',
      companyLink: '',
    },
    {
      company: 'Yellow Pickaxe Short Film',
      position: 'Edit, Sound design, Color Correction',
      from: '2018',
      to: '2019',
      companyLink: 'https://filmfreeway.com/YellowPickaxe',
    },
    {
      company: 'Cockcrow Short Documentary',
      position: 'Edit, Sound design, Color Correction',
      from: '2017',
      to: '2018',
      companyLink: 'https://www.imdb.com/title/tt9217626/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Okan University, Istanbul',
      degree: 'Master\'s Degree, Film and Television Directing',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'University of Applied Science and Technology, Tehran',
      degree: 'Bachelor\'s Degree, Cinema Directing',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'University of Applied Science and Technology, Tehran',
      degree: 'Associate Degree, Film Editing',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Cockcrow',
      description:
        'Without the power of hearing and speaking, Nezam wants to call to Adhan.',
      imageUrl: 'https://black_hole-3kf-1-v8497602.deta.app/api/photo/avicz8r33rbq.jpg',
      link: 'https://www.imdb.com/title/tt9217626',
    },
    {
      title: 'Yellow Pickaxe',
      description:
        'A father named Ibrahim, who is a construction worker, because of poverty and his disability to obtain his daughter\'s medicine, looses his daughter. He decides to destroy a wall which is a symbol of his life and finally behind this wall, he finds …',
      imageUrl: 'https://filmfreeway-production-storage-01-storage.filmfreeway.com/press_kits/posters/001/632/465/original/0797cf9238-poster.jpg?1597781151',
      link: 'https://filmfreeway.com/YellowPickaxe',
    },
    {
      title: 'Animation',
      description:
        'An animation student project, done during the associate\'s degree',
      imageUrl: 'https://black_hole-3kf-1-v8497602.deta.app/api/photo/xl5j5h14aznb.png',
      link: 'https://youtu.be/X3Uczt8MVy0',
    },
    {
      title: '19;92 Studio Motion Graphic',
      description:
        'A short motion graphic video to introduce the 19;92 studio brand',
      imageUrl: 'https://black_hole-3kf-1-v8497602.deta.app/api/photo/6efzdgwji19l.png',
      link: 'https://youtube.com/shorts/dtBM-buTTsc',
    },
    {
      title: 'Peyrang Magazin Motion Graphic',
      description:
        'A short motion graphic video to introduce and launch the Peyrang literary magazin',
      imageUrl: 'https://black_hole-3kf-1-v8497602.deta.app/api/photo/el7823zni9u5.png',
      link: 'https://youtu.be/XQIxS8--q6s',
    },
    {
      title: 'SKM Industrial Machinery',
      description:
        'Advertisement for SKM Industrial Machinery',
      imageUrl: 'https://black_hole-3kf-1-v8497602.deta.app/api/photo/m3rzlvto8al7.png',
      link: 'https://youtu.be/QKmbXZI_DJc',
    },
    {
      title: 'Digital Painting',
      description:
        'Some of my paintings on deviantart',
      imageUrl: 'https://black_hole-3kf-1-v8497602.deta.app/api/photo/nzbkmg479vsq.png',
      link: 'https://www.deviantart.com/arshid7',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/ar3h1d/portfolio"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
