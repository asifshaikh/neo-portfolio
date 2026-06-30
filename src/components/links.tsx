import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiFacebook,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:shaikha015@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/asifshaikh',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/mohammedshaikh30/',
    },
    {
      icon: SiFacebook,
      href: 'https://www.facebook.com/profile.php?id=100004311934012',
    },
  ]

  return (
    <div className="mt-20 mr-auto flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
