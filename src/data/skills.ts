import {
  type IconType,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiSqlite,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiAmazonaws,
  SiGnubash,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
      ],
    },
    {
      field: 'Backend and Databases',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'python',
          icon: SiPython,
        },
        {
          skill: 'flask',
          icon: SiFlask,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'sqlite',
          icon: SiSqlite,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
      ],
    },
    {
      field: 'DevOps and Cloud',
      skills: [
        {
          skill: 'docker',
          icon: SiDocker,
        },
        {
          skill: 'kubernetes',
          icon: SiKubernetes,
        },
        {
          skill: 'github actions',
          icon: SiGithubactions,
        },
        {
          skill: 'terraform',
          icon: SiTerraform,
        },
        {
          skill: 'aws',
          icon: SiAmazonaws,
        },
        {
          skill: 'bash',
          icon: SiGnubash,
        },
      ],
    },
  ]

export default SKILLS
