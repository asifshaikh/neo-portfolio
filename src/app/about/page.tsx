import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I'm a Software Engineer passionate about Cloud, DevOps, Backend
          Development, and building scalable systems. I enjoy designing
          cloud-native applications, automating deployments with CI/CD, working
          with containers and Kubernetes, and building reliable backend
          services. I'm constantly learning modern cloud technologies and
          contributing to projects that improve performance, scalability, and
          developer experience.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
